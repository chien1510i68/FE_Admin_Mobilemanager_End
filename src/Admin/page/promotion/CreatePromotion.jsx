import React from "react";
import { Button, Form, Input, message } from "antd";
import { createPromotion } from "../../api/axios";
const onFinish = (values) => {
  console.log("data:", values);
  createPromotion(values)
    .then((res) => {
      if (res.data.success) {
        message.info("Thêm thành công khuyến mãi");
      } else {
        message.info("Tạo khuyến mãi thất bại ");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  // setOpen(false);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function CreatePromotion({ onClose }) {
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
          label="Ngày bắt đầu"
          name="startDate"
          rules={[
            {
              required: true,
              message: "Please input your promotionPercentage!",
            },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Ngày kết thúc"
          name="endDate"
          rules={[{ required: true, message: "Please input your endDate!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Đơn hàng phải lớn hơn"
          name="minimumPurchaseAmount"
          rules={[
            {
              required: true,
              message: "Please input your minimumPurchaseAmount!",
            },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Phần trăm khuyến mãi"
          name="promotionPercentage"
          rules={[
            {
              required: true,
              message: "Please input your minimumPurchaseAmount!",
            },
          ]}
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

export default CreatePromotion;
