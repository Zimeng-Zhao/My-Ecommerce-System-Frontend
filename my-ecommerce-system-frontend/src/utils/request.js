//axios封装处理 ：接口的发送
//任何一个项目都得干
//1.根域名配置
//2.超时时间
//3.请求拦截器 响应拦截器 axios官方文档里有

import axios from "axios";
const request = axios.create({
    baseURL: 'http://localhost:8084',// http://localhost:8084
    timeout: 5000
})

// 添加请求拦截器
//请求发送之前 先拦截一下 插入一些自定义的配置 【参数的处理】
request.interceptors.request.use((config)=> {
    return config
  }, (error)=> {
    return Promise.reject(error)
})

// 添加响应拦截器
//在响应返回到客户端之前做拦截 重点处理返回的数据
request.interceptors.response.use((response)=> {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  }, (error)=> {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
})


export {request}