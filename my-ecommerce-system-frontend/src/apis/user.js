//放置和用户相关的所有请求
import { request } from "@/utils";
//1. 登录请求 Axios请求的通用写法
export function loginAPI(formData){//异步函数 调用的时候注意async await
    request({
        url:'/authorizations',
        method:'POST',
        data:formData
    })
}

//2. 获取用户信息
export function getProfile(){//异步函数 调用的时候注意async await
    request({
        url:'/user/profile',
        method:'GET',
    })
}