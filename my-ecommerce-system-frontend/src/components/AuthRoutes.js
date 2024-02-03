//封装高阶组件

import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";

//核心逻辑 ： 有token 正常跳转 无token 去登录
export function AuthRouter({children}){//参数是组件 用childre属性来接收
    const token = getToken();
    if(token){
        return <>{children}</>//这么写不会影响页面布局
    }else{
        return <Navigate to={'/login'} replace />
    }
}