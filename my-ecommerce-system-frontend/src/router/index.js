//路由配置
import Layout from "@/pages/Layout";// src/pages/Layout
import Login from "@/pages/Login";
import Article from "@/pages/Article";
import Home from "@/pages/Home";
import Publish from "@/pages/Publish/publish";
import {createBrowserRouter} from 'react-router-dom';
import { AuthRouter } from "@/components/AuthRoutes";

//配置路由
const router = createBrowserRouter([
    {
        path: '/',
        // element:<Layout/>
        //测试重定向, AuthRouter判单是否含有token
        element:<AuthRouter><Layout/></AuthRouter>,
        children:[
            {
                path: '/',
                element:<Home/>
            },
            {
                path: 'article',
                element:<Article/>
            },
            {
                path: 'publish',
                element:<Publish/>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    }
]);

export default router;