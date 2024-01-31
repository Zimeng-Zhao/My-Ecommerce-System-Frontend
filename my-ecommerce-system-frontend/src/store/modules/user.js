//和用户相关的状态管理
import { createSlice } from "@reduxjs/toolkit";

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

export {setToken};

export default userReducer;

