/*封装axios*/
import axios from 'axios'
import { filterParams } from "@/untils/tools.js";


//实例axiosMas用于请求 http://apiappmas.cbi360.net
export const axiosH5 = axios.create({
  baseURL: process.env.NODE_ENV == 'development' ? 'https://apiappmas.cbi360.net' : 'https://apiappmas.cbi360.net',
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded',
  }
});
//实例axiosZxbx用于请求 http://apiappzxbx.cbi360.net
export const axiosZxbx = axios.create({
  //开发环境、生产环境的请求地址
  baseURL: process.env.NODE_ENV == 'development' ? 'https://apiappzx.cbi360.net' : 'https://apiappzx.cbi360.net',
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded',
  }
});


//axios实例数组
let axiosArr = [axiosH5,axiosZxbx];
axiosArr.map(val => {
  //实例请求拦截器
  val.interceptors.request.use(
    config => {
      // let access_token = '';
      // config.headers['access_port'] = 'h5';
      // config.headers['access_token'] = access_token;
      //post请求和get请求分别去除空数据
      if(config.method == "post") {
        if(config.data) {
          let data = JSON.parse(JSON.stringify(config.data));
          data = filterParams(data);
          config.data = data;
        }
      }else {
        let params = JSON.parse(JSON.stringify(config.params));
        params = filterParams(params);
        config.params = params;
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

      return res;
    },
    err => {
      // 响应错误
      return Promise.reject(err);
    });
})




