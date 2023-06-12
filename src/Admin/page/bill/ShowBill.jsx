import React from "react";
import { Input } from "antd";

function ShowBill({ value, onClose }) {
  const getStatusLabel = (statusId) => {
    if(statusId == 1 ){
      return "Đang xử lí"
    }
    if(statusId == 2 ){
      return "Đã xác nhận"
    }
    if(statusId == 3 ){
      return "Đang giao"
    }
    if(statusId == 4 ){
      return "Đã giao"
    }
    if(statusId == 5 ){
      return "Đã hủy"
    }
    if(statusId == 6 ){
      return "Đã thanh toán"
    }
    if(statusId == 7 ){
      return "Đã hoàn trả"
    }
  };

  const statusLabel = getStatusLabel(value.statusId);

  return (
    <div>
      <div>
        <label>Mã đơn hàng:</label>
        <Input value={value.orderId} className="w-[100%] my-[10px]"  />
      </div>
      <div>
        <label>Số điện thoại:</label>
        <Input
          value={value.phoneNumber}
          className="w-[100%] my-[10px]"
          
        />
      </div>
      <div>
        <label>Địa chỉ:</label>
        <Input value={value.addr} className="w-[100%] my-[10px]"  />
      </div>
      <div>
        <label>Số lượng:</label>
        <Input value={value.quantity} className="w-[100%] my-[10px]"  />
      </div>
      <div>
        <label>Trạng thái đơn hàng:</label>
        <Input value={statusLabel} className="w-[100%] my-[10px]"  />
      </div>
    </div>
  );
}

export default ShowBill;
