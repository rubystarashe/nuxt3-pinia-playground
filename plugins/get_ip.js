export default defineNuxtPlugin(async nuxt => {
  const server_ip = useState('server_ip')
  const client_ip = useState('client_ip')

  if (process.server && nuxt.ssrContext) {
    const { public: { serverip } } = useRuntimeConfig()
    server_ip.value = serverip

    const { req } = nuxt.ssrContext
    client_ip.value = req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.headers['x-forwarded-for'] || ''
  }
})
