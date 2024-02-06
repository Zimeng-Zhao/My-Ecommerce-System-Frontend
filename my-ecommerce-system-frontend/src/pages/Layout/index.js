//测试token是否成功注入
// import { request } from "@/utils";
// import { useEffect } from "react";


// const Layout = () =>{
//     useEffect(() =>{
//         request.get('user/profile');
//     },[]);
//     return <div>This is Layout</div>
// }

// export default Layout;
import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useLocale } from 'antd/es/locale'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearUserInfo, fetchUserInfo } from '@/store/modules/user'

const { Header, Sider } = Layout
//菜单参数
const items = [
  {
    label: 'Products',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: 'Deals',
    key: '/article',
    icon: <DiffOutlined />,
  },
  {
    label: 'Orders',
    key: '/publish',
    icon: <EditOutlined />,
  },
]

const GeekLayout = () => {
  const navigate = useNavigate();
    const onMenuClick = (route) =>{//点左边的菜单标签 返回对应得key 右边跳转
        console.log('菜单被点击了', route)
        //接收路由地址,为什么是key？可以从打印出的route看到 此时地址存在key属性里
        const path= route.key;
        //用hook函数导航到想去的route
        navigate(path);
    }
//反向高亮：刷新界面 当前的url对应的左侧菜单高亮
//1.获取当前路由路径 react：useLocation() pathname
const location = useLocation();
console.log(location.pathname);
const selectedKey = location.pathname;

//触发个人用户信息 action
const dispatch = useDispatch();
useEffect(() =>{
  dispatch(fetchUserInfo());
},[dispatch])
//useSelector:专门负责从redux中获取数据
const name = useSelector(state =>state.user.userInfo.name);

//退出登录确认回调
const onConfirm = () =>{//这样可以监控到用户什么时候点击了退出
  console.log('确认退出');
  dispatch(clearUserInfo());//清除用户信息
  //跳转到登录页 useNavigate
  navigate('/login');
}
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{name}</span>
          <span className="user-logout">
            <Popconfirm title="Are you sure you want to exit?" okText="Yes" cancelText="No" onConfirm={onConfirm}>
              <LogoutOutlined /> Log out
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={selectedKey}//selectedkey和item数组中的key进行匹配，匹配成功得菜单栏会高亮 selectedKeys本身负责选择对应的路径，style负责高亮
            onClick={onMenuClick}
            items={items}//遍历上面的数组生成了左侧菜单
            style={{ height: '100%', borderRight: 0 }}></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          {/* 二级路由出口 */}
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}
export default GeekLayout