import './index.scss'
import { Card, Form, Input, Button } from 'antd'
import logo from '@/assets/logo.png'//导入一个图标

const Login = () => {
    const onFinish = (values) =>{
        console.log(values);//获取输入数据
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
          </Form.Item>
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