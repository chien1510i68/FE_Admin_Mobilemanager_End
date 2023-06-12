import React, { useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate, Link } from "react-router-dom";
import "./Login.scss";
import axios from "axios";
import { register } from "../../Admin/api/axios";

function Register(props) {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    register(values).then((res) => {
      if(res.data.success === true){
        navigate("/")
      }
    })
    .catch((err)=>{
      console.log("Loi :" , err);
    })
  };
  useEffect(() => {
    onFinish();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="bgr_login h-[100vh] w-[100vw] relative">
      <Form
        name="normal_login"
        className="login-form bg-[#396e6e] py-[20px] w-[40%] 
        mx-auto px-[20px] my-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[5px] "
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <h1 className="font-[500] text-[28px] text-[#fff] mb-[40px] text-center">
          Đăng kí tài khoản{" "}
        </h1>
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
          name="phoneNumber"
          className="mx-[30px]"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon " />}
            placeholder="Phone number"
          />
        </Form.Item>

        <Form.Item
          name="email"
          className="mx-[30px]"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon " />}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name="addr"
          className="mx-[30px]"
          rules={[
            {
              required: true,
              message: "Please input your Address!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon " />}
            placeholder="Address"
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

        <Button
          type="primary"
          htmlType="submit"
          className="bg-[#1cdf73d1] px-[20px] block ml-auto mr-[40px] "
          //   onClick={}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Register;
