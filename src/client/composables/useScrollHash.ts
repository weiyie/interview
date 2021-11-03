import { onMounted } from 'vue';

export const setupScrollHash = () => {
  onMounted(() => {
    const { hash } = document.location

    if (hash) {
      const id = hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(decodeURI(id))
        if (element) element.scrollIntoView()
      }, 150);
    }
  })
}