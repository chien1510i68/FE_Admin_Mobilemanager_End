import React, { useEffect, useState } from "react";
import { Column } from "@ant-design/charts";
import {
  inventoryLowQuantity,
  statisticalPhoneByManuFacturer,
} from "../../api/axios";
import { Button, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Slider, Switch } from "antd";

function InventoryLowQuantity() {
  const [quantity , setQuantity] = useState(0)
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
  const [disabled, setDisabled] = useState(false);
  const onChange = (value) => {
    console.log(value);
    setQuantity(value);
  };

  const [dataStatistical, setDataStatistical] = useState([]);
  const [keyStatistical, setKeyStatistical] = useState("Apple");

  const onClick = ({ key }) => {
    setKeyStatistical(key);
  };

  const handleGetDataStatistical = () => {
    inventoryLowQuantity({ manufacturer: keyStatistical , quantity : quantity}).then((res) => {
      setDataStatistical(res.data);
    });
  };

  const config = {
    data: dataStatistical,
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

  useEffect(() => {
    handleGetDataStatistical();
  }, [keyStatistical , quantity]);

  return (
    <>
      <div className="flex items-center">
        <Dropdown menu={{ items, onClick }} className="my-[20px] block w-[20%]">
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
        <>
        <h2 className="ml-[200px] mr-[20px]">Lựa chọn số lượng </h2>
        <Slider
          className="w-[150px] "
          min={1}
          max={10}
          defaultValue={5}
          onChange={onChange}
          disabled={disabled}
        />
        </>

      </div>

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
        Biểu đồ thống kê số lượng điện thoại của hãng {keyStatistical}{" "}
        trong kho nhỏ hơn {quantity}
      </h2>
    </>
  );
}
export default InventoryLowQuantity;
