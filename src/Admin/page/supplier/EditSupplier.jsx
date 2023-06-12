import React from "react";
// import Button from "@mui/material/Button";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router";
import { updateSupplier } from "../../api/axios";

function EditSupplier({ value, onClose }) {
  const navigate = useNavigate();

  const onFinish = (values) => {
    // console.log("data:", values);
    updateSupplier(values)
      .then((res) => {
        // console.log(res.data.success);
        if (res.data.success) {
          message.info("Cập nhật thành công");
        } else {
          message.info("Cập nhật thất bại");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    onClose();
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
        initialValues={value}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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

export default EditSupplier;
