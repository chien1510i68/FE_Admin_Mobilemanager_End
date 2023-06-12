import React, { useEffect, useState } from "react";
import { Column } from "@ant-design/charts";
import {
  inventoryLowQuantity,
  statisticalPhoneByManuFacturer,
} from "../../api/axios";
import { Button, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import InventoryLowQuantity from "./InventoryLowQuantity";
import StatisticalSold from "../statistical/StatisticalSold";

function Store() {
  const [data, setData] = useState([]);
  const [manufacturer, setManufacturer] = useState("Apple");

  const items = [
    {
      key: "Apple",
      label: "Apple",
    },

    {
      key: "SamSung",
      label: "SamSung",
    },
    {
      key: "Oppo",
      label: "Oppo",
    },
    {
      key: "Realme",
      label: "Realme",
    },
    {
      key: "Redme",
      label: "Redme",
    },
  ];

  const onClick = ({ key }) => {
    setManufacturer(key);
  };

  const handelGetData = () => {
    statisticalPhoneByManuFacturer({ manufacturer: manufacturer }).then(
      (res) => {
        setData(res.data);
      }
    );
  };

  useEffect(() => {
    handelGetData();
    // handleGetDataStatistical();
  }, [manufacturer]);

  const config = {
    data: data,
    xField: "phoneName",
    yField: "quantity",
    columnWidth: 10,
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.2,
      },
    },
    meta: {
      type: { alias: "Category" },
      sales: { alias: "Sales" },
    },
  };

  return (
    <>
      <>
        <Dropdown
          menu={{ items, onClick }}
          className=" my-[20px] block w-[20%] "
        >
          <a onClick={(e) => e.preventDefault()}>
            <Button
              type="primary"
              shape="round"
              className="bg-[#3eaf51] flex items-center"
            >
              Thống kê theo hãng điện thoại
              <DownOutlined />
            </Button>
          </a>
        </Dropdown>

        <Column
          {...config}
          onReady={(plot) => {
            plot.on("plot:click", (evt) => {
              const { x, y } = evt;
              const { xField } = plot.options;
              const tooltipData = plot.chart.getTooltipItems({ x, y });
              console.log(tooltipData);
            });
          }}
        />
        <h2 className="my-[50px] text-center">
          Biểu đồ thống kê số lượng điện thoại của hãng {manufacturer} trong kho{" "}
        </h2>
      </>

      <>
        <InventoryLowQuantity />
      </>

    
    </>
  );
}

export default Store;
