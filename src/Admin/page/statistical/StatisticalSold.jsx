import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";
import { statisticalSoldByManufacturer } from "../../api/axios";

function StatisticalSold(props) {
  const [data, setData] = useState([]);
  const handelGetData = () => {
    statisticalSoldByManufacturer().then((res)=>{
      setData(res.data);
    })
  };

  
  useEffect(() => {
    handelGetData();
  }, []);
  const config = {
    data : data,
    xField: "manufacturer",
    yField: "sold",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return (
    <div>
      <Column {...config} />
    </div>
  );
}

export default StatisticalSold;
