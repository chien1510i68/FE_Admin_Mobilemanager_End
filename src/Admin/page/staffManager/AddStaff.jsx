import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  RightOutlined,
  UserOutlined,
  PhoneOutlined,
  CalendarOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Form, Input, Button, Dropdown, Select, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import { addUser } from "../../api/axios";
// import { Option } from "antd/es/mentions";

function AddStaff(props) {
  const navigate = useNavigate();
  const onFinish = (data) => {
    console.log(data);
    addUser(data).then((res) => {
      if (res.data?.success === true) {
        message.info("Tao tai khoan thanh cong");
        navigate('/admin/staff')

      } else if (res.data.error?.code === 500) {
        console.log("Tao tai khoan khong thanh cong");
      }
    })
    .catch((error) =>{
        console.log("co loi khi tao tai khoan " , error);
    })

    
  };
  // const [role, setRole] = useState(1);

  return (
    <div>
      <div className="flex items-center">
        <h3
          className="cursor-pointer hover:text-[#54b14e]"
          onClick={() => navigate("/admin/staff")}
        >
          Danh sách nhân viên{" "}
        </h3>
        <RightOutlined className="mx-2" />

        <h3>Tạo mới nhân viên </h3>
      </div>

      <div>
        <Form
          className="flex justify-between flex-wrap mx-[30px] "
          onFinish={onFinish}
        >
          <FormItem className=" my-[20px] w-[45%]" name="userName">
            <Input
              size="large"
              placeholder="Họ và tên"
              prefix={<UserOutlined />}
            />
          </FormItem>
          <FormItem className=" my-[20px] w-[45%]" name="password">
            <Input
              size="large"
              placeholder="Nhập mật khẩu"
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
        
          <Form.Item
            // onFinish={onFinishRole}
            className="w-[45%] my-[20px] py-1 items-center flex"
            //  name="role"
            name="roleId"
            // label="Role"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Chọn quyền cho nhân viên"
              // onChange={onGenderChange}

              allowClear
            >
              <Select.Option value="1">Quản lí website</Select.Option>
              <Select.Option value="0">Supper Admin</Select.Option>
            </Select>
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            className="w-[15%] mt-[20px] ml-auto block bg-[#508dc3]"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AddStaff;
