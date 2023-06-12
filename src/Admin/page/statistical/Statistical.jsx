import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";
import { revenueValue } from "../../api/axios";
import ChartQuantity from "./ChartQuantity";
import ChartTotalValueMonth from "./ChartTotalValueMonth";
import StatisticalSold from "./StatisticalSold";

function Statistical() {
  return (
    <div>
      <>
        <ChartTotalValueMonth />
        <h2 className=" my-[50px] font-[500] text-[16px] text-center">
          Biểu đồ thống kê giá trị hàng tháng của cửa hàng
        </h2>
      </>

      <>
        <ChartQuantity />
        <h2 className=" my-[50px] font-[500] text-[16px] text-center">
          Biểu đồ thống kê số lượng hàng tháng bán được của cửa hàng
        </h2>
      </>

      <>
        <StatisticalSold />
        <h2 className=" my-[50px] font-[500] text-[16px] text-center">
          Biểu đồ thống kê số lượng điện thoại đã bán của từng hãng trong năm
          2023
        </h2>
      </>
    </div>
  );
}

export default Statistical;
