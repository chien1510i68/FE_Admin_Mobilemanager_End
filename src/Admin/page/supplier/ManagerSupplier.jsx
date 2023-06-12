import {
  DeleteOutlined,
  EditOutlined,
  SolutionOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Button, Modal, Popconfirm, Space, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { deleteSupplier, getSupplier } from "../../api/axios";
import EditSupplier from "./EditSupplier";
import { useNavigate } from "react-router";
import CreateSupplier from "./CreateSupplier";
import ShowSupplier from "./ShowSupplier";

function ManagerSupplier(props) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState(null);
  const [pageCurrent, setPageCurrent] = useState(0);
  const [openEdit, setOpenEdit] = useState(false);
  const [openShow, setOpenShow] = useState(false);
  const [valueEdit, setValueEdit] = useState(null);
  const [valueShow, setValueShow] = useState(null);
  const [openCreate, setOpenCreate] = useState(false);
  const columns = [
    {
      title: "Mã",
      dataIndex: "supplierId",
    },
    {
      title: "Tên",
      dataIndex: "supplierName",
    },
    {
      title: "Địa chỉ",
      dataIndex: "supplierAddr",
    },
    {
      title: "SĐT",
      dataIndex: "supplierPhoneNumber",
      hideSelectAll: true,
    },
    {
      title: "Email",
      dataIndex: "supplierEmail",
      columnWidth: 20,
    },
    // {
    //   title: "Website ",
    //   dataIndex: "supplierWebsite",
    // },
    {
      title: "STK ",
      dataIndex: "supplierAccountNumber",
    },
    {
      title: "Ngân hàng nhận ",
      dataIndex: "bank",
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
              // handleEditProduct(record.productId);
              setOpenEdit(true);
              setValueEdit(record);
            }}
          ></Button>

          <Popconfirm
            onConfirm={() => {
              handleDelete(record.supplierId);
            }}
            title={"Bạn có muốn xóa nhà cung cấp "}
            okButtonProps={<Button className="bg-[#000]">OK</Button>}
          >
            <Button
              className="flex justify-center items-center text-md shadow-md"
              icon={<DeleteOutlined />}
            ></Button>
          </Popconfirm>

          <Button
            className="flex justify-center items-center text-md shadow-md"
            icon={<SolutionOutlined />}
            onClick={() => {
              // handleEditProduct(record.productId);
              setOpenShow(true);
              setValueShow(record);
            }}
          ></Button>
        </Space>
      ),
    },
  ];
  const handleGetSupplier = () => {
    getSupplier({ page: pageCurrent, size: 10 }).then((res) => {
      console.log(res.data.data.listItem);
      setData(res.data.data.listItem);
      console.log(data);
    });
  };
  useEffect(() => {
    handleGetSupplier();
  }, []);

  const handleDelete = (id) => {
    deleteSupplier(id)
    .then((res) => {
      if(res.data.success){
          message.info("Xoá thành công ");
          handleGetSupplier();
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      <Button
        type="primary"
        shape="round"
        className="bg-[#3eaf51] flex items-center "
        onClick={() => {
          setOpenCreate(true);
        }}
      >
        <PlusCircleOutlined />
        Thêm mới nhà cung cấp
      </Button>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <span
          style={{
            marginLeft: 8,
          }}
        ></span>
      </div>
      <Table columns={columns} dataSource={data} />
      <Modal
        className="text-center"
        title="Thêm nhà cung cấp "
        centered
        open={openCreate}
        destroyOnClose={true}
        // onOk={() => setOpenCreate(false)}
        onCancel={() => {
          setOpenCreate(false);
        }}
        width={1000}
        footer={[]}
      >
        <CreateSupplier
          onClose={() => {
            setOpenCreate(false);
          }}
        />
      </Modal>
      <Modal
        className="text-center"
        title="Chỉnh sửa thông tin nhà cung cấp "
        centered
        open={openEdit}
        destroyOnClose={true}
        // onOk={() => setOpenDialogEditProduct(false)}
        onCancel={() => {
          setOpenEdit(false);
        }}
        width={1000}
        footer={[]}
      >
        <EditSupplier
          value={valueEdit}
          onClose={() => {
            setOpenEdit(false);
          }}
        />
      </Modal>
      <Modal
        className="text-center"
        title="Chỉnh sửa thông tin nhà cung cấp "
        centered
        open={openShow}
        destroyOnClose={true}
        // onOk={() => setOpenDialogEditProduct(false)}
        onCancel={() => {
          setOpenShow(false);
        }}
        width={1000}
        footer={[]}
      >
        <ShowSupplier value={valueShow} />
      </Modal>
    </div>
  );
}

export default ManagerSupplier;
