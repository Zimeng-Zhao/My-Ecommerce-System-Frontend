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

const { Header, Sider } = Layout
//菜单参数
const items = [
  {
    label: '首页',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: '文章管理',
    key: '/article',
    icon: <DiffOutlined />,
  },
  {
    label: '创建文章',
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
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">柴柴老师</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
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