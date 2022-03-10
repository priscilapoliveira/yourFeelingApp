import axios from 'axios'

const baseURL = 'https://my-json-server.typicode.com'

const api = axios.create({
  baseURL: baseURL,
})

export default api
