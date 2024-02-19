import axios from 'axios'

const api = axios.create({
  baseURL: 'https://mylocker-api.herokuapp.com/',
})

export default api
