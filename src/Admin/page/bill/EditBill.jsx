import { Button, Form, Input, Select, message } from "antd";
import React from "react";
import { updateOrder } from "../../api/axios";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function EditBill({ value, onClose }) {
  const onFinish = (values) => {
    console.log("data:", values);
    updateOrder(values)
      .then((res) => {
        if (res.data.success === true) {
          message.info("Sửa thành công khuyến mãi");
        }
        // else {
        //   message.info("Sửa khuyến mãi thất bại ");
        // }
      })
      .catch((err) => {
        console.log(err);
      });
    // setOpen(false);
  };
  const { Option } = Select;
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
        <Form.Item label="Mã đơn hàng" name="orderId" className="hidden ">
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>
        <Form.Item
          label="Số điện thoại"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please input your phoneNumber!",
            },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Địa chỉ"
          name="addr"
          rules={[{ required: true, message: "Please input your addres!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Số lượng"
          name="quantity"
          rules={[
            {
              required: true,
              message: "Please input your quantity!",
            },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        {/* <Form.Item
          label="Trạng thái đơn hàng"
          name="statusId"
          rules={[
            {
              required: true,
              message: "Please input your minimumPurchaseAmount!",
            },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item> */}
        <Form.Item
          label="Trạng thái đơn hàng"
          name="statusId"
          rules={[
            {
              required: true,
              message: "Please input your minimumPurchaseAmount!",
            },
          ]}
        >
          <Select className="w-[100%] my-[10px]">
            <Option value={1}>Đang xử lí</Option>
            <Option value={2}>Đã xác nhận</Option>
            <Option value={3}>Đang giao</Option>
            <Option value={5}>Đã hủy</Option>
            <Option value={4}>Đã giao và thanh toán</Option>
            <Option value={6}>Đã hoàn trả</Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
          <Button
            type="primary"
            // htmlType="submit"
            className="bg-[#d95050] ml-[20px] "
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

export default EditBill;
