//和用户相关的状态管理
import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";

const userStore = createSlice({
    name: "user",
    //状态声明
    initialState:{
        //后端反过来的类型是什么 初始值就是什么 暂定是字符串
        token:''
    },
    //同步修改方法
    reducers:{
        setToken(state, action){
            state.token = action.payload;
        }
    }
})

//解构出actionCreater
const {setToken} = userStore.actions;

//获取reducer函数
const userReducer = userStore.reducer;

//异步方法 完成登录获取token
const fetchLogin = (loginForm) =>{
    return async (dispatch)=>{
        //1.发送异步请求 这里的地址是后端地址 目前用的假地址
        const res = await request.post('/authorizations', loginForm)
        //2.提交同步action进行token的存入  存入的initialstate
        dispatch(setToken(res.data.token))
    }
}


export {setToken, fetchLogin};

export default userReducer;

