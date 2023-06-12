import { PhoneOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import React from "react";
import { useNavigate } from "react-router";
import { addUser, updateUser } from "../../api/axios";
// import { Option } from "antd/es/mentions";

function ShowStaff({ value, onClose }) {
  const navigate = useNavigate();
  const onFinish = (data) => {
    console.log(data);
    updateUser(data)
      .then((res) => {
        console.log(res.data);
        if (res.data.success === true) {
          onClose();
          message.info("Tài khoản đã cập nhật thành công ");
        }
        if (res.data.success === false) {
          onClose();
          message.info("Tài khoản không cập nhật thành công ");
        }
      })
      .catch((error) => {
        console.log("co loi khi tao tai khoan ", error);
      });
  };
  // const [role, setRole] = useState(1);

  return (
    <div>
      <div>

        
        <Form
          initialValues={value}
          className="flex justify-between flex-wrap mx-[30px] "
          onFinish={onFinish}
        >
          <FormItem className=" my-[20px] w-[45%]" name="userID">
            <Input
              disabled={true}
              size="large"
              placeholder="Mã nhân viên"
              prefix={<UserOutlined />}
            />
          </FormItem>
          <FormItem className=" my-[20px] w-[45%]" name="userName">
            <Input
              size="large"
              placeholder="Họ và tên"
              prefix={<UserOutlined />}
            />
          </FormItem>
         
          <FormItem className=" my-[20px] w-[45%]" name="email">
            <Input
              size="large"
              placeholder="Nhập vào email"
              prefix={<UserOutlined />}
            />
          </FormItem>

          <FormItem name="addr" className=" my-[20px] w-[45%]">
            <Input
              size="large"
              placeholder="Địa chỉ thường trú"
              prefix={<UserOutlined />}
            />
          </FormItem>
          <FormItem className=" my-[20px] w-[45%]" name="phoneNumber">
            <Input
              size="large"
              placeholder="Số điện thoại"
              prefix={<PhoneOutlined />}
            />
          </FormItem>

        
         
        </Form>
      </div>
    </div>
  );
}

export default ShowStaff;
