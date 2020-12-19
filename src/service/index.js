/*封装axios*/
import axios from 'axios'
import { filterParams } from "@/utils/tools.js";


//实例axiosMas用于请求 http://apiappop.cbi360.net
export const request = axios.create({
  // baseURL: process.env.NODE_ENV == 'development' ? 'http://apiappop.cbi360.net' : 'http://apiappop.cbi360.net',
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  timeout: 2*60*1000 // 请求超时时间
});
//实例axiosZxbx用于请求 http://apiappzxbx.cbi360.net
// export const axiosZxbx = axios.create({
//   //开发环境、生产环境的请求地址
//   baseURL: process.env.NODE_ENV == 'development' ? 'https://apiappzx.cbi360.net' : 'https://apiappzx.cbi360.net',
//   headers: {
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   timeout: 2*60*1000 // 请求超时时间
// });


//axios实例数组
let axiosArr = [request];
axiosArr.map(val => {
  //实例请求拦截器
  val.interceptors.request.use(
    config => {
      // let access_token = '';
      // config.headers['access_port'] = 'h5';
      // config.headers['access_token'] = access_token;
      //post请求和get请求分别去除空数据
      if(config.method == "post") {
        config.data = filterParams(config.data || {});
      }else {
        config.params = filterParams(config.params || {});
      }
      return config;
    },
    err => {
      // 对请求错误做些什么
      return Promise.reject(err);
    });
  //实例响应拦截器
  val.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      // 响应错误
      return Promise.reject(err);
    });
})




