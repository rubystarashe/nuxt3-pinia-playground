// default
export default {
  persist: true,
  state: () => {
    return {
      count: 0
    }
  }
}

// ip
export const ip = {
  state: () => {
    return {
      server_ip: useState('server_ip'),
      client_ip: useState('client_ip')
    }
  }
}
