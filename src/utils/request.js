import axios from 'axios'
import { Notification, MessageBox } from 'element-ui'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  // baseURL: "http://10.75.4.70:9020",
  baseURL: process.env.VUE_APP_BASE_API,

  // 超时
  timeout: 10000
})
// request拦截器
service.interceptors.request.use(
  config => {
    config.headers['token'] = sessionStorage.getItem("token") // 让每个请求携带自定义token 请根据实际情况自行修改
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

export default service
