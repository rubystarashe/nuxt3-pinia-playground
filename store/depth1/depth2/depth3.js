// depth1/depth2/depth3
export default {
  state: () => {
    const { path } = toRefs(useRoute())
    return {
      depth3: computed(() => `We are now at ${path.value}`)
    }
  }
}

// depth1/depth2/depth3/depth4
export const depth4 = () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  return { count, doubleCount, increment }
}
