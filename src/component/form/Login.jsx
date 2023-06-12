import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input  } from "antd";
import { useNavigate ,Link } from "react-router-dom";
import "./Login.scss";
import { login } from "../../Admin/api/axios";
import Cookies from "js-cookie";


function Login(props) {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    console.log(values);
    login(values).then((res) => {
      if (res.data?.success === true) {
        Cookies.set("jwt", res.data?.data?.jwt);
        navigate("/admin/staff");
      } else if (res.data?.error?.code === 500) {
      }
    })
    .catch((err)=>{
      console.log(err);
    })
    ;
  }
  return (
    <div className="bgr_login h-[100vh] w-[100vw] relative">
      <Form
        name="normal_login"
        className="login-form bg-[#396e6e] py-[50px] w-[40%] 
        mx-auto px-[20px] my-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[5px] "
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
              <h1 className="font-[500] text-[28px] text-[#fff] mb-[40px] text-center">Đăng nhập tài khoản </h1>
        <Form.Item
          name="userName"
          className="mx-[30px]"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon " />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          className="mx-[30px]"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
       
         
          <p
            onClick={() => navigate("/admin/staff")}
            className="cursor-pointer block text-[#fff] text-right mr-[30px] hover:text-[#7099d7]"
          >
            Fogot password
          </p>

        <Form.Item className="mx-[30px] text-center mt-[30px] ">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button bg-[#1ed31294] mr-[10px]"
          >
            Log in
          </Button>
             
          <Link to={"/register"} className="text-[#fff]">Register</Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
