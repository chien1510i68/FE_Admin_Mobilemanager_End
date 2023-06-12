import React from "react";
// import Button from "@mui/material/Button";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router";
import { createProduct } from "../../api/axios";

function CreateProduct() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("data:", values);
    createProduct(values)
      .then((response) => {
        console.log(response);
        if (response.success === true) {
          console.log(response);
          message.info("Bạn đã thêm thành công sản phẩm");
          navigate("/admin/managerproduct");
          console.log(response.data);
          return response;
        }
      })
      .catch((error) => {
        // console.log(error);
      });

    // setOpen(false);
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
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
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
          <Input className="w-[100%] my-[10px]" />
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
          label="Mã khuyến mãi"
          name="promotionID"
          rules={[
            { required: true, message: "Please input your warrantyPeriod!" },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>
        <Form.Item
          label="Số lượng trong kho"
          name="quantityInStore"
          rules={[
            { required: true, message: "Please input your warrantyPeriod!" },
          ]}
        >
          <Input className="w-[100%] my-[10px]" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-[#d95050] ml-[20px]"
            onClick={() => navigate("/admin/managerProduct")}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-[#348f43] ml-[20px]"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CreateProduct;
