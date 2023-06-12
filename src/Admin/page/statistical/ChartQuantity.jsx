import { Column } from "@ant-design/plots";
import React, { useEffect, useState } from "react";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { revenueQuantityMonths } from "../../api/axios";
const { RangePicker } = DatePicker;
function ChartQuantity() {
  const [data, setData] = useState([]);

  const config = {
    data,
    xField: "month",
    yField: "value",
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

  const [selectedDates, setSelectedDates] = useState(null);

  const handleValue = (dates) => {
    setSelectedDates(dates);
  };
  const handleRevenue = async () => {
    if (selectedDates) {
      const startDate = selectedDates[0].format("DD/MM/YYYY");
      const endDate = selectedDates[1].format("DD/MM/YYYY");
      await revenueQuantityMonths({ start: startDate, end: endDate }).then(
        (res) => {
          console.log(res.data.data.listItem);
          setData(res.data.data.listItem);
        }
      );

      console.log("Start date:", startDate);
      console.log("End date:", endDate);
    }
  };
  useEffect(() => {
    handleRevenue();
  }, [selectedDates]);
  return (
    <div>
      <Space direction="vertical" size={4}>
        <RangePicker onChange={handleValue}
        // defaultValue={[moment("01/01/2023"), moment("/12/2023")]
      // }
        />

      </Space>

      <Column {...config} />
    </div>
  );
}

export default ChartQuantity;
