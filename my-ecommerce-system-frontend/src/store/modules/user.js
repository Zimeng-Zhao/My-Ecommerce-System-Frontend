//和用户相关的状态管理
import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";
import { setToken as _setToken, getToken, removeToken } from "@/utils";
import { loginAPI, getProfile } from "@/apis/user";

const userStore = createSlice({
    name: "user",
    //状态声明
    initialState:{
        //后端反过来的类型是什么 初始值就是什么 暂定是字符串
        //初始化 优先从localstorage取，不然一刷新token又变成‘’了
        // token:''
        // token: localStorage.getItem('token_key') || ''
        //因为在localstorage里取出token可能要复用 所以写入utils，在这调用
        token: getToken() || '',
        userInfo: {}
    },
    //同步修改方法
    reducers:{
        setToken(state, action){
            //token存入了redux中，但一刷新就会变成初始值空字符串
            state.token = action.payload;
            //所以需要再LocalStrorage中再存一份
            // localStorage.setItem('token_key', action.payload)
            //因为在localstorage里存入token可能要复用 所以写入utils，在这调用
            _setToken(action.payload)
        },
        setUserInfo(state, action){
            state.userInfo = action.payload;
        },
        clearUserInfo(state){
            state.token = '';
            state.userInfo = {};
            //清除localStorage里的用户信息
            removeToken();
        }
    }
})

//解构出actionCreater
const {setToken, setUserInfo, clearUserInfo} = userStore.actions;

//获取reducer函数
const userReducer = userStore.reducer;

//异步方法 完成登录获取token
const fetchLogin = (loginForm) =>{
    return async (dispatch)=>{
        //1.发送异步请求 这里的地址是后端地址 目前用的假地址
        // const res = await request.post('/authorizations', loginForm)
        const res = await loginAPI(loginForm);
        //2.提交同步action进行token的存入  存入的initialstate
        dispatch(setToken(res.data.token))
    }
}
//asynchronous method to get userInfo
const fetchUserInfo = () =>{
    return async (dispatch)=>{
        //1.发送异步请求 这里的地址是后端地址 目前用的假地址
        // const res = await request.get('user/profile');
        const res = await getProfile();
        //2.提交同步action进行token的存入  存入的initialstate
        dispatch(setUserInfo(res.data));
    }
}


export {setToken, fetchLogin, fetchUserInfo, clearUserInfo};

export default userReducer;

