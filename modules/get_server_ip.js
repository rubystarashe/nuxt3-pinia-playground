import { defineNuxtModule } from '@nuxt/kit'
import { $fetch } from 'ohmyfetch'

export default defineNuxtModule({
  async setup (options, nuxt) {
    const { ip } = await $fetch('https://api.ipify.org?format=json')
    nuxt.options.runtimeConfig.public.serverip = ip
  }
})
