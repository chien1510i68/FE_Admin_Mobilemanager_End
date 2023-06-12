import React from "react";
// import Button from "@mui/material/Button";
import { Form, Input } from "antd";

function ShowSupplier({ value }) {
 
  return (
    <div>
      <Form
        name="basic"
        className=""
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
        initialValues={value}
        autoComplete="off"
      >
        <Form.Item
          label="Mã nhà cung cấp "
          name="supplierId"
          disable
          // rules={[{ required: true, message: "Please input your productName!" }, ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>
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

      
      </Form>
      {/* </Dialog> */}
    </div>
  );
}

export default ShowSupplier;
