import './index.scss'
import { Card, Form, Input, Button, message } from 'antd'
import logo from '@/assets/logo.png'//导入一个图标
import { useDispatch } from 'react-redux'
import { fetchLogin } from '@/store/modules/user'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = async (values) =>{
        console.log(values);//获取输入数据
        //触发异步action fetchLogin,必须保证拿到token再跳转 所以是异步函数
        await dispatch(fetchLogin(values));
        //1.跳转到首页
        navigate('/');
        //2.提示用户是否登陆成功 antd自带的message方法
        message.success('You have successfully logged in');
    }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        {/* 失焦校验 antd官方用法 */}
        {/* 触发验证的时机是“onBlur”，验证就是下面的rules */}
        <Form onFinish={onFinish} validateTrigger = "onBlur">
        <Form.Item 
            name="mobile"//指定校验的字段名，和后端接口保持一致
            //多条校验逻辑，先校验第一条 第一条通过再验证第二条，需要全部通过
            rules={[//指定校验规则
                {
                    required: true,
                    message: 'Please enter your phone number',
                },
                {
                    pattern: /^1[3-9]\d{9}$/,
                    message: 'The format of yourphone number should be XXX@xxx.XXX'

                }
            ]}>
            <Input size="large" placeholder="Please enter your phone number" />
          </Form.Item>
          <Form.Item 
            name="code"//指定校验的字段名，和后端接口保持一致
            //多条校验逻辑，先校验第一条 第一条通过再验证第二条，需要全部通过
            rules={[//指定校验规则
                {
                    required: true,
                    message: 'Please enter your code:246810',
                },
            ]}>
            <Input size="large" placeholder="Please enter your email" />
          </Form.Item>
          {/* <Form.Item 
            name="email"//指定校验的字段名，和后端接口保持一致
            //多条校验逻辑，先校验第一条 第一条通过再验证第二条，需要全部通过
            rules={[//指定校验规则
                {
                    required: true,
                    message: 'Please enter your email',
                },
                {
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'The format of your email should be XXX@xxx.XXX'

                }
            ]}>
            <Input size="large" placeholder="Please enter your email" />
          </Form.Item>
          <Form.Item
           name="password"
           rules={[
               {
                   required: true,
                   message: 'Please input your password',
               },
               {
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: 'The password must contain at least 8 characters, including uppercase letters, lowercase letters, numbers, and at least one special character',
                }
           ]}>
            <Input size="large" placeholder="Please input your password" />
          </Form.Item> */}
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login