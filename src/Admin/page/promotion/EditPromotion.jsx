import React from "react";
import { Button, Form, Input, message } from "antd";
import { updatePromotion } from "../../api/axios";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function EditPromotion({ value, onClose, getPromotion }) {
  const onFinish = (values) => {
    console.log("dataEditProduct:", values);
    const ids_string = values.ids;
    console.log(ids_string);
    // ids_array = [int(id) for id in ids_string.split(",")]
    const idsArray = ids_string.split(",").map(function (id) {
      return parseInt(id);
    });
    const condition = {
      ...values,

      ids: idsArray,
    };
    console.log("condiotion is : ", condition);
    updatePromotion(condition)
      .then((res) => {
        if (res.data.success) {
          message.info("Sửa thành công khuyến mãi");
          getPromotion();
        } else {
          message.info("Sửa khuyến mãi thất bại ");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // setOpen(false);
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
          label="Mã khuyến mãi"
          name="promotionID"
          className="hidden "
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

export default EditPromotion;
