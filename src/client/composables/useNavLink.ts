import type { NavLink } from '../../shared';
import { useResolveRouteWithRedirect } from './useResolveRouteWithRedirect';

/**
 * Resolve NavLink props from string
 *
 * @example
 * - Input: '/README.md'
 * - Output: { text: 'Home', link: '/' }
 */
export const useNavLink = (item: string | string[]): NavLink => {
  let result;
  if (Array.isArray(item)) {
    result = {
      text: item[1],
      link: item[2],
    };
  } else {
    const resolved = useResolveRouteWithRedirect(item);
    result = {
      text: resolved.meta.title || item,
      link: resolved.name === '404' ? item : resolved.fullPath,
    };
  }
  return result;
};
