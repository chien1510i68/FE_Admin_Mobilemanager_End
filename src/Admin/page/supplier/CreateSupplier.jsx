import React from "react";
// import Button from "@mui/material/Button";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router";
import { createSupplier } from "../../api/axios";

function CreateSupplier({ onClose }) {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("data:", values);
    onClose();
    createSupplier(values)
      .then((res) => {
        console.log(res.data.success === true);
        if(res.data.success ){
          message.info("Thêm thành công nhà cung cấp")
        }else{
          message.info("Thất bại")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        className=""
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
        initialValues={{ remember: false }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tên nhà cung cấp "
          name="supplierName"
          // rules={[{ required: true, message: "Please input your productName!" }, ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Địa chỉ "
          name="supplierAddr"
          // rules={[{ required: true, message: "Please input your price!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Số điện thoại"
          name="supplierPhoneNumber"
          // rules={[{ required: true, message: "Please input your image!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="supplierEmail"
          // rules={[
          // { required: false, message: "Please input your memoryStick!" },
          // ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Số tài khoản"
          name="supplierAccountNumber"
          // rules={[{ required: true, message: "Please input your camera!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Ngân hàng nhận"
          name="bank"
          // rules={[{ required: true, message: "Please input your memory!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Website nhà cung cấp"
          name="supplierWebsite"
          // rules={[
          //   { required: true, message: "Please input your operatingSystem!" },
          // ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Tên người nhận"
          name="bankAccountName"
          // rules={[{ required: true, message: "Please input your battery!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        {/* <Form.Item
          label="Nhà sản xuất"
          name="manufacturer"
          rules={[
            { required: true, message: "Please input your manufacturer!" },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item> */}

        {/* <Form.Item
          label="Kích thước"
          name="size"
          rules={[{ required: true, message: "Please input your size!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Màu sắc"
          name="color"
          rules={[{ required: true, message: "Please input your color!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Thời gian bảo hành "
          name="warrantyPeriod"
          rules={[
            { required: true, message: "Please input your warrantyPeriod!" },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item> */}

        <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-[#d95050] ml-[20px]"
            onClick={() => onClose()}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-[#348f43] ml-[20px]"
            onClick={() => onClose()}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      {/* </Dialog> */}
    </div>
  );
}

export default CreateSupplier;
