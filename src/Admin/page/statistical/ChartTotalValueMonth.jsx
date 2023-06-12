import React, { useEffect, useState } from "react";
import { revenueValue } from "../../api/axios";
import { Line } from "@ant-design/plots";

function ChartTotalValueMonth() {
  const [data, setData] = useState([]);
  const handleRevenue = () => {
    revenueValue().then((res) => {
      // console.log(res.data.data.listItem);
      setData(res.data.data.listItem);
    });
  };

  useEffect(() => {
    handleRevenue();
  }, []);

  const config = {
    data: data,
    padding: "auto",
    xField: "month",
    yField: "value",
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };
  return <Line {...config} />;
}

export default ChartTotalValueMonth;
