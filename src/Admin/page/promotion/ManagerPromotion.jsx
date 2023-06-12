import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Button, Modal, Popconfirm, Space, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import {
  deletePromotion,
  deleteSupplier,
  getAllPromotion,
  getSupplier,
} from "../../api/axios";
// import CreateProduct from "./CreateSupplier";
// import EditSupplier from "./EditSupplier";
import { useNavigate } from "react-router";
import CreatePromotion from "./CreatePromotion";
import EditPromotion from "./EditPromotion";
import ShowPromotion from "./ShowPromotion";
// import CreateSupplier from "./CreateSupplier";
// import ShowSupplier from "./ShowSupplier";

function ManagerPromotion(props) {
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
      title: "Mã khuyến mãi",
      dataIndex: "promotionID",
    },
    {
      title: "Giá trị",
      dataIndex: "promotionPercentage",
    },
    {
      title: "Ngày bắt đầu",
      dataIndex: "startDate",
    },
    {
      title: "Ngày kết thúc",
      dataIndex: "endDate",
    },
    {
      title: "Điều kiện",
      dataIndex: "minimumPurchaseAmount",
      columnWidth: 20,
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
              handleDelete(record.promotionID);
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
  const handleGetPromotion = () => {
    getAllPromotion({ pageNumber: pageCurrent, pageSize: 10 }).then((res) => {
      console.log(res.data.data.listItem);
      setData(res.data.data.listItem);
      console.log(data);
    });
  };
  useEffect(() => {
    handleGetPromotion();
  }, []);

  const handleDelete = (id) => {
    deletePromotion(id)
      .then((res) => {
        // console.log(res.data.success);
        if (res.data.success) {
          message.info("Xoá thành công ");
          handleGetPromotion();
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
        Thêm mới khuyến mãi
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
        title="Thêm thông tin khuyến mãi"
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
        <CreatePromotion
          onClose={() => {
            setOpenCreate(false);
          }}
        />
      </Modal>
      <Modal
        className="text-center"
        title="Chỉnh sửa thông tin khuyến mãi "
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
        <EditPromotion
          value={valueEdit}
          onClose={() => setOpenEdit(false)}
          getPromotion={() => handleGetPromotion()}
        />
      </Modal>
      <Modal
        className="text-center"
        title="Xem chi tiết khuyến mãi"
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
        <ShowPromotion value={valueShow} />
      </Modal>
    </div>
  );
}

export default ManagerPromotion;
