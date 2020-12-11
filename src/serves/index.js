import axios from 'axios'
// 根据环境不同引入不同api地址
import { baseApi } from '@/config'
const service = axios.create({
    baseURL: baseApi, 
    withCredentials: true, 
    timeout: 10000 
})
service.interceptors.request.use(
    config => {
        console.log(config)
        // 不传递默认开启loading
        // if (!config.hideloading) {
        //   // loading
        //   Toast.loading({
        //     forbidClick: true
        //   })
        // }
        // if (store.getters.token) {
        //   config.headers['X-Token'] = ''
        // }
    return config
    },
    error => {
        console.log(error,"error-----------")
        return Promise.reject(error)
    }
)
service.interceptors.response.use(
    response => {
        const res = response.data
        return Promise.resolve(res)
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service
