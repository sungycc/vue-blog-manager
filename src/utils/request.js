import axios from 'axios'

import store from '@/store'
import { getToken } from '@/utils/auth'

const request = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 6000,
})

request.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    const res = response.data
    if (res.success === true) {
      return res.data
    } else {
      return Promise.reject(new Error(res || 'Error'))
    }
    // return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default request
