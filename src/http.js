import axios from 'axios'

const http = axios.create({
  baseURL: process.env.BASE_URL
})

export default function install (Vue) {
  Object.assign(Vue.prototype, {
    $http: http
  })
}
