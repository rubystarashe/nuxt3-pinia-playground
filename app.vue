<template>
<div>
  <div>Server: {{server_ip}}</div><div>Client: {{client_ip}}</div>
  <div v-for="(store, i) in stores" :key="i">{{store}}: {{pinia.stores[store]().$state}}</div>
  <div v-if="defaultStore.$persist">
    {{defaultStore.count}}
    <button @click="defaultStore.count++">increase persist counter</button>
  </div>
  <Child/>
  <button @click="increment">increment depth4 at app.vue</button>
  <div>{{newStore.ns}}</div>
</div>
</template>

<script setup>
const { server_ip, client_ip } = getStore('ip').toRefs()
const { pinia } = useNuxtApp()
const stores = Object.keys(pinia.stores)
const defaultStore = getStore('default')
const { increment } = getStore('depth1/depth2/depth3/depth4')
defineStore('new_store', () => { return { ns: ref('New Store!') } })
const newStore = getStore('new_store')
</script>
