<template>
<div>
  {{depth3}}
  <div>count: {{count}}</div>
  <div>doubleCount: {{doubleCount}}</div>
  <button @click="increment">increment depth4 at child component</button>
  <div>{{newStore.ns}}</div>
</div>
</template>

<script setup>
const { depth3 } = getStoreRefs('depth1/depth2/depth3')
const depth4 = store('depth1/depth2/depth3/depth4')
const { count, doubleCount } = storeToRefs(depth4)
const { increment } = depth4

const newStore = getStore('new_store')
</script>
