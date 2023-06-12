import React from "react";
import { Form, Input } from "antd";

function ShowPromotion({ value }) {
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
          label="Mã khuyến mãi"
          name="promotionID"
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
        <Form.Item
          label="Danh sách sản phẩm"
          name="ids"
          rules={[
            {
              required: true,
              message: "Please input your minimumPurchaseAmount!",
            },
          ]}
        >
          <Input
            className="w-[100%] my-[10px]"
            placeholder="Nhập mã các sản phẩm có khuyến mãi này "
          />
        </Form.Item>
      </Form>
    </div>
  );
}

export default ShowPromotion;
