import { PhoneOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import React from "react";
import { useNavigate } from "react-router";
import { addUser, updateUser } from "../../api/axios";
// import { Option } from "antd/es/mentions";

function EditStaff({ value, onClose }) {
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

export default EditStaff;
