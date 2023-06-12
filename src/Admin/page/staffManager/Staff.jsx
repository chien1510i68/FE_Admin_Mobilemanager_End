import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Button, Input, Modal, Popconfirm, Space, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { delUser, findUser, getAllUser } from "../../api/axios";
import EditStaff from "./EditStaff";
import ShowStaff from "./ShowStaff";

function Staff(props) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const { Search } = Input;
  const [id, setId] = useState(1);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [openEditUser, setOpenEditUser] = useState(false);
  const [openShowUser, setOpenShowUser] = useState(false);
  const [valueEdit, setValueEdit] = useState(null);
  const [valueShow, setValueShow] = useState(null);
  const onSearch = (value) => {
    setId(value);
    console.log(value);
    findUser({ id: value })
      .then((res) => {
        // console.log(res.data.data.listItem);
        setData(res.data.data.listItem);
      })
      .catch((err) => {
        message.info(err.response.data.message);
      });
  };
  const handleDelete = (id) => {
    delUser(id).then((res) => {
      if (res.data.success) {
        message.info("Đã xóa thành công tài khoản ");
        handleGetData();
      }
    });
    // message.info(userID);
    // console.log(userID);
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
    const pageCurrent = { start: page, limit: 10 };
    const data1 = await getAllUser(pageCurrent);
    // console.log(data1);
    setData(data1.data.data.listItem);
  };

  const columns = [
    {
      title: "Mã",
      dataIndex: "userID",
    },
    {
      title: "SĐT",
      dataIndex: "phoneNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Địa chỉ",
      dataIndex: "addr",
    },
    {
      title: "Họ và tên",
      dataIndex: "userName",
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
              setOpenEditUser(true);
              setValueEdit(record);
              // console.log(record);
            }}
          ></Button>

          <Button
            onClick={() => {
              setOpenShowUser(true);
              setValueShow(record);
            }}
            className="flex justify-center items-center text-md shadow-md"
            icon={<SolutionOutlined />}
          ></Button>

          <Popconfirm
            onConfirm={() => handleDelete(record.userID)}
            title={"Bạn có muốn xóa nhân viên này không  "}
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

  useEffect(() => {
    handleGetData();
  }, [id]);
  return (
    <div>
      <h2 className="font-[500] text-[20px] mb-5 text-center">
        Danh sách nhân viên
      </h2>
      <div className="flex justify-around mx-5">
        <Button
          type="primary"
          shape="round"
          className="bg-[#3eaf51] flex items-center w-[23%]"
          onClick={() => navigate("/admin/addstaff")}
        >
          <PlusCircleOutlined />
          Thêm mới nhân viên
        </Button>
        <Search
          placeholder="Tìm kiếm thông tin nhân viên "
          onSearch={onSearch}
          className="w-[40%]"
        />
      </div>
      <div className="my-[50px]">
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
          onChange: (page, size) => {
            setPageSize(size);
            setPageCurrent(page);
          },
          defaultCurrent: 1,
          pageSize: pageSize,
          current: pageCurrent,
          // showSizeChanger: true,
        }}
      ></Table>
      <Modal
        className="text-center"
        title="Chỉnh sửa thông tin nhân viên "
        centered
        open={openEditUser}
        destroyOnClose={true}
        onOk={() => console.log("this is ok")}
        onCancel={() => {
          setOpenEditUser(false);
        }}
        width={1000}
        footer={[]}
      >
        <EditStaff
          value={valueEdit}
          onClose={() => {
            setOpenEditUser(false);
          }}
        />
      </Modal>

      <Modal
        className="text-center"
        title="Thông tin chi tiết nhân viên "
        centered
        open={openShowUser}
        destroyOnClose={true}
        onOk={() => console.log("this is ok")}
        onCancel={() => {
          setOpenShowUser(false);
        }}
        width={1000}
        footer={[]}
      >
        <ShowStaff
          value={valueShow}
          onClose={() => {
            setOpenShowUser(false);
          }}
        />
      </Modal>
    </div>
  );
}

export default Staff;
