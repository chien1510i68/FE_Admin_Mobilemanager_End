import { Button, Form, Input, message } from "antd";
import React from "react";
import { updateProduct } from "../../api/axios";

function ShowInforProduct({ value, onClose }) {
  console.log(value);

  const onFinish = () => {
    onClose();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        // disabled={true}
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
        className="text-[#000]"
        // disabled={true}
        initialValues={value}
        // initialValues={
        //   formData && formData.listItem.length > 0 ? formData.listItem[0] : null
        // }
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Mã sản phẩm "
          name="productId"
          className="items-center"
          rules={[
            { required: true, message: "Please input your productName!" },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>
        <Form.Item
          label="Tên sản phẩm "
          name="productName"
          rules={[
            { required: true, message: "Please input your productName!" },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Giá sản phẩm"
          name="price"
          rules={[{ required: true, message: "Please input your price!" }]}
        >
          <Input className="w-[100%] my-[10px] bg-white text-[#000000]" />
          {/* <TextArea>{formData.price}</TextArea> */}
        </Form.Item>

        <Form.Item
          label="Ảnh"
          name="image"
          rules={[{ required: true, message: "Please input your image!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Thẻ nhớ"
          name="memoryStick"
          rules={[
            { required: false, message: "Please input your memoryStick!" },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Camera"
          name="camera"
          rules={[{ required: true, message: "Please input your camera!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Bộ nhớ"
          name="memory"
          rules={[{ required: true, message: "Please input your memory!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Hệ điều hành"
          name="operatingSystem"
          rules={[
            { required: true, message: "Please input your operatingSystem!" },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Dung lượng pin"
          name="battery"
          rules={[{ required: true, message: "Please input your battery!" }]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
          label="Nhà sản xuất"
          name="manufacturer"
          rules={[
            { required: true, message: "Please input your manufacturer!" },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item
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
        </Form.Item>
        <Form.Item
          label="Mã khuyến mại  "
          name="promotionID"
          rules={[
            { required: true, message: "Please input your warrantyPeriod!" },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>
      </Form>
      {/* </Dialog> */}
    </div>
  );
}
export default ShowInforProduct;
