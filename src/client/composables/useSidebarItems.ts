import { usePageData, usePageFrontmatter } from '@vuepress/client';
import type { PageHeader } from '@vuepress/client';
import { isArray, isPlainObject, isString } from '@vuepress/shared';
import { computed, inject, provide } from 'vue';
import type { ComputedRef, InjectionKey } from 'vue';
import { useRoute } from 'vue-router';
import type {
  DefaultThemeData,
  DefaultThemeNormalPageFrontmatter,
  SidebarConfigArray,
  SidebarConfigObject,
  SidebarItem,
  ResolvedSidebarItem,
} from '../../shared';
import { useNavLink, useThemeLocaleData } from '.';
import { normalizePath } from '../utils';

export type SidebarItemsRef = ComputedRef<ResolvedSidebarItem[]>;

export const sidebarItemsSymbol: InjectionKey<SidebarItemsRef> =
  Symbol('sidebarItems');

/**
 * Inject sidebar items global computed
 */
export const useSidebarItems = (): SidebarItemsRef => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error('useSidebarItems() is called without provider.');
  }
  return sidebarItems;
};

/**
 * Create sidebar items ref and provide as global computed in setup
 */
export const setupSidebarItems = (): void => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>();
  const sidebarItems = computed(() => {
    return resolveSidebarItems(frontmatter.value, themeLocale.value);
  });
  provide(sidebarItemsSymbol, sidebarItems);
};

/**
 * Resolve sidebar items global computed
 *
 * It should only be resolved and provided once
 */
export const resolveSidebarItems = (
  frontmatter: DefaultThemeNormalPageFrontmatter,
  themeLocale: DefaultThemeData
): ResolvedSidebarItem[] => {
  // get sidebar config from frontmatter > themeConfig
  const sidebarConfig = frontmatter.sidebar ?? themeLocale.sidebar ?? 'auto';
  const sidebarDepth =
    frontmatter.sidebarDepth ?? themeLocale.sidebarDepth ?? 2;

  // resolve sidebar items according to the config
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }

  if (sidebarConfig === 'auto') {
    return resolveAutoSidebarItems(sidebarDepth);
  }

  if (isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }

  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }

  return [];
};

/**
 * Util to transform page header to sidebar item
 */
export const headerToSidebarItem = (
  header: PageHeader,
  sidebarDepth: number
): ResolvedSidebarItem => ({
  text: header.title,
  link: `#${header.slug}`,
  children: headersToSidebarItemChildren(header.children, sidebarDepth),
});

export const headersToSidebarItemChildren = (
  headers: PageHeader[],
  sidebarDepth: number
): ResolvedSidebarItem[] =>
  sidebarDepth > 0
    ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1))
    : [];

/**
 * Resolve sidebar items if the config is `auto`
 */
export const resolveAutoSidebarItems = (
  sidebarDepth: number
): ResolvedSidebarItem[] => {
  const page = usePageData();

  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth),
    },
  ];
};

/**
 * Resolve sidebar items if the config is an array
 */
export const resolveArraySidebarItems = (
  sidebarConfig: SidebarConfigArray,
  sidebarDepth: number,
  sidebarPath?: string
): ResolvedSidebarItem[] => {
  const route = useRoute();
  const page = usePageData();

  const handleChildItem = (
    item: ResolvedSidebarItem | SidebarItem | string
  ): ResolvedSidebarItem => {
    let childItem: ResolvedSidebarItem;
    if (isString(item) || Array.isArray(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item as ResolvedSidebarItem;
    }

    if (childItem.children) {
      return {
        ...childItem,
        children: childItem.children.map((item) => handleChildItem(item)),
      };
    }

    // if the sidebar item is current page and children is not set
    // use headers of current page as children
    if (normalizePath(childItem.link || `${sidebarPath}${(childItem as SidebarItem).text}`) === normalizePath(route.path)) {
      // skip h1 header
      const headers =
        page.value.headers[0]?.level === 1
          ? page.value.headers[0].children
          : page.value.headers;
      return {
        ...childItem,
        children: headersToSidebarItemChildren(headers, sidebarDepth),
      };
    }

    return childItem;
  };

  return sidebarConfig.map((item) => handleChildItem(item));
};

/**
 * Resolve sidebar items if the config is a key -> value (path-prefix -> array) object
 */
export const resolveMultiSidebarItems = (
  sidebarConfig: SidebarConfigObject,
  sidebarDepth: number
): ResolvedSidebarItem[] => {
  const route = useRoute();
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = sidebarConfig[sidebarPath] ?? [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth, sidebarPath);
};

/**
 * Resolve the matched locale path of route path
 */
export const resolveLocalePath = (locales, routePath) => {
  const localePaths = Object.keys(locales).sort((a, b) => {
    const levelDelta = b.split('/').length - a.split('/').length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b.length - a.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }

  // 遍历localePaths 跟当前routePath进行匹配
  for (const localePath of localePaths) {
    const root = Array.isArray(locales[localePath])
      ? [...locales[localePath]]
      : [locales[localePath]];
    while (root.length) {
      const current = root.pop();
      if (current.link === routePath) {
        return localePath;
      } else if (Array.isArray(current.children)) {
        root.push(current.children);
      } else if (Array.isArray(current)) {
        if (!isString(current[0])) {
          for (const info of current) {
            (Array.isArray(info) || isPlainObject(info)) && root.push(info);
          }
        } else {
          const reg = new RegExp(`${routePath}?`);
          if (current[2] && reg.test(current[2])) {
            return localePath;
          }
          // 为未设置permalink页面进行匹配
          if (
            normalizePath(`${localePath}${current[0]}`) ===
            normalizePath(routePath)
          ) {
            return localePath;
          }
        }
      }
    }
  }

  return '/';
};
