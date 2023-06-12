import {
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  DownOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import {
  Button,
  Input,
  Spin,
  Table,
  Space,
  message,
  Modal,
  Popconfirm,
  Dropdown,
} from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  delUser,
  deleteOrder,
  findUser,
  getAllOrder,
  getAllUser,
  getOrderById,
  getOrderByPhoneNumber,
} from "../../api/axios";
import EditBill from "./EditBill";
import ShowBill from "./ShowBill";
// import EditStaff from "./EditStaff";
// import ShowStaff from "./ShowStaff";

function Bill(props) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCurrent, setPageCureent] = useState(1);
  const { Search } = Input;
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [openEditOrder, setOpenEditOrder] = useState(false);
  const [openShowOrder, setOpenShowOrder] = useState(false);
  const [valueEdit, setValueEdit] = useState(null);
  const [valueShow, setValueShow] = useState(null);
  const [condition, setCondition] = useState({
    pageNumber: page,
    pageSize: 10,
  });
  // const [valueSearch , setValueSearch] = useState(0)
  const onSearch = (value) => {
    console.log(value);
    getOrderByPhoneNumber({phoneNumber : value })
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          console.log(res.data.data);
          setData(res.data.data.listItem);
        } else {
          console.log(res.data);
          message.info("Không tìm thấy sản phẩm ");
          handleGetData();
        }
        // console.log(res.data.data.listItem);
      })
      .catch((err) => {
        message.info("Không tìm thấy đơn hàng");
        // message.info(err.response.data.message);
        handleGetData();
      });
  };
  const handleDelete = (id) => {
    deleteOrder(id).then((res) => {
      if (res.data.success) {
        message.info("Đã xóa thành công đơn hàng ");
        handleGetData();
      }
    });
    // message.info(id);
  };

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    // console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  const navigate = useNavigate();

  // const data1 = {}
  const handleGetData = async () => {
    // const pageCurrent = ;
    const data1 = await getAllOrder(condition);
    // console.log(data1);
    setData(data1.data.data.listItem);
  };

  const columns = [
    {
      title: "Mã",
      dataIndex: "orderId",
    },
    {
      title: "SĐT",
      dataIndex: "phoneNumber",
    },
    {
      title: "Địa chỉ",
      dataIndex: "addr",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
    },
    {
      title: "Ngày tạo đơn",
      dataIndex: "orderCreationDate",
    },
    {
      title: "Trạng thái",
      dataIndex: "statusId",
      render : (statusId) =>{
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
      }
    },
    {
      title: "Tùy chọn",
      align: "center",
      render: (e, record, index) => (
        <Space size={10} key={index}>
          <Button
            className="flex justify-center items-center text-md shadow-md"
            icon={<EditOutlined />}
            onClick={() => {
              setOpenEditOrder(true);
              setValueEdit(record);
              // console.log(record);
            }}
          ></Button>

          <Button
            onClick={() => {
              setOpenShowOrder(true);
              setValueShow(record);
            }}
            className="flex justify-center items-center text-md shadow-md"
            icon={<SolutionOutlined />}
          ></Button>

          <Popconfirm
            onConfirm={() => handleDelete(record.orderId)}
            title={"Bạn có muốn xóa đơn hàng này không"}
            okButtonProps={<Button className="bg-[#000]">OK</Button>}
          >
            <Button
              className="flex justify-center items-center text-md shadow-md"
              icon={<DeleteOutlined />}
            ></Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const items = [
    {
      key: "1",
      label: "Mã tăng dần",
    },

    {
      key: "2",
      label: "Ngày gần nhất",
    },
  ];

  const onClick = ({ key }) => {
    console.log(key);
    const newCondition = { ...condition, key: key };
    setCondition(newCondition);
    // handleGetData();
  };

  useEffect(() => {
    handleGetData();
  }, [condition]);
  return (
    <div>
      <h2 className="font-[500] text-[20px] mb-2 text-center">
        Danh sách đơn hàng
      </h2>
      <div className="flex items-center justify-around mx-5">
        <Dropdown
          menu={{ items, onClick }}
          className="my-[20px] block w-[20%] "
        >
          <a onClick={(e) => e.preventDefault()}>
            <Button
              type="primary"
              shape="round"
              className="bg-[#3eaf51] flex items-center"
            >
              Sắp xếp theo
              <DownOutlined />
            </Button>
          </a>
        </Dropdown>
        <Search
          placeholder="Nhập số điện thoại để tìm đơn hàng"
          onSearch={onSearch}
          className="w-[40%]"
        />
      </div>
      <div className="my-[30px]">
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          className="bg-[#333]"
          loading={loading}
        >
          Reload
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{
          onChange: (a) => console.log(a),
        }}
      />
      <Modal
        className="text-center"
        title="Chỉnh sửa thông tin đơn hàng "
        centered
        open={openEditOrder}
        destroyOnClose={true}
        onOk={() => console.log("this is ok")}
        onCancel={() => {
          setOpenEditOrder(false);
        }}
        width={1000}
        footer={[]}
      >
        <EditBill
          value={valueEdit}
          onClose={() => {
            setOpenEditOrder(false);
          }}
        />
      </Modal>

      <Modal
        className="text-center"
        title="Thông tin chi tiết đơn hàng "
        centered
        open={openShowOrder}
        destroyOnClose={true}
        onOk={() => console.log("this is ok")}
        onCancel={() => {
          setOpenShowOrder(false);
        }}
        width={1000}
        footer={[]}
      >
        <ShowBill
          value={valueShow}
          onClose={() => {
            setOpenShowOrder(false);
          }}
        />
      </Modal>
    </div>
  );
}

export default Bill;
