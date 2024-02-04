//axios封装处理 ：接口的发送
//任何一个项目都得干
//1.根域名配置
//2.超时时间
//3.请求拦截器 响应拦截器 axios官方文档里有

import axios from "axios";
import { getToken, removeToken } from "./token";
import router from "@/router";
const request = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',// http://localhost:8084
    timeout: 5000
})

// 添加请求拦截器
//请求发送之前 先拦截一下 插入一些自定义的配置 【参数的处理】
request.interceptors.request.use((config)=> {
  //操作这个config 注入token数据
  //1.获取token
  //2.按照后端格式要求去做token拼接 注入
  const token = getToken();
  if(token){
    //前面是axios的固定写法 后面是后端要求的格式 空格是固定写法 必须有
    config.headers.Authorization = `Bearer ${token}`
  }
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
    //监控401 token失效
    console.dir(error)
    if(error.response.status == 401){
      removeToken();
      router.navigate('/login');
      window.location.reload();//强制刷新
    }
    return Promise.reject(error)
})


export {request}