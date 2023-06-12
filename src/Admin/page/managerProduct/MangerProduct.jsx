import {
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  PlusCircleOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import {
  Button,
  Dropdown,
  Input,
  Modal,
  Popconfirm,
  Space,
  Table,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProduct, getProduct } from "../../api/axios";
import EditProduct from "./EditProduct";
import "./Product.scss";
import ShowInforProduct from "./ShowInforProduct";
// import ModelDeleteProduct from "./ModelDeleteProduct";

function MangerProduct(props) {
  const [openDialogEditProduct, setOpenDialogEditProduct] = useState(false);
  const [openDialogShowProduct, setOpenDialogShowProduct] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState([]);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedId, setSelectedId] = useState(null);
  const [valueRecord, setValueRecord] = useState(null);
  const [valueRecordShow, setValueRecordShow] = useState(null);
  const [totalProduct, setTotalProduct] = useState();
  const [condition, setCondition] = useState({
    page: pageCurrent-1,
    size: pageSize,
  });

  const navigate = useNavigate();

  const { Search } = Input;
  const onSearch = (value) => {
    const newCondition = { ...condition, productId: value };
    setCondition(newCondition);
    console.log(newCondition);
  };
  const handleDelete = (productId) => {
    const value = { productId: productId };
    deleteProduct(value)
      .then((res) => {
        if (res.data.success === true) {
          listProduct();
          message.info("Xóa thành công");
        } else {
          message.info("Xóa thất bại");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    listProduct();
  };

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const listProduct = () => {
    getProduct(condition).then((res) => {
      setData(res.data.data.listItem);
      setTotalProduct(res.data.data.total);
    });
  };

  useEffect(() => {
    listProduct();
  }, [condition]);

  const columns = [
    {
      title: "Mã ",
      dataIndex: "productId",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
    },
    {
      title: "Giá",
      dataIndex: "price",
    },
    {
      title: "Số lượng",
      dataIndex: "quantityInStore",
    },
    {
      title: "Nhà sản xuất",
      dataIndex: "manufacturer",
    },
    {
      title: "Mã khuyến mãi",
      dataIndex: "promotionID",
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
              setOpenDialogEditProduct(true);
              setValueRecord(record);
            }}
          ></Button>

          <Popconfirm
            onConfirm={() => handleDelete(record.productId)}
            title={"Bạn có muốn xóa sản phẩm "}
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
              setOpenDialogShowProduct(true);
              setValueRecordShow(record);
            }}
          ></Button>
        </Space>
      ),
    },
  ];

  const onClick = ({ key }) => {
    const newCondition = { ...condition, keySort: key };
    setCondition(newCondition);
  };

  const items = [
    {
      key: "1",
      label: "Mã tăng dần",
    },

    {
      key: "2",
      label: "Số lượng nhiều nhất",
    },
  ];

  const onFinish = (values) => {
    console.log("id:", { selectedId });

    // setOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className="flex items-center w-full justify-around mb-[40px]">
        <Button
          type="primary"
          shape="round"
          className="bg-[#3eaf51] flex items-center w-[20%]"
          onClick={() => navigate("/admin/addProduct")}
        >
          <PlusCircleOutlined />
          Thêm mới sản phẩm
        </Button>

        <Search
          placeholder="Nhập vào mã sản phẩm"
          onSearch={onSearch}
          className="w-[40%]"
        />

        {/* </Form> */}

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
        <Button
          type="primary"
          shape="round"
          className="bg-[#3eaf51] flex items-center w-[15%]"
        >
          <DeleteOutlined />
          Xóa tất cả
        </Button>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{
          onChange: (page, size) => {
            console.log("page- size", page, size);
            setCondition({
              page: page-1,
              size: size,
            });
            // setPageSize(size);
            // setPageCurrent(page);
          },
          // defaultCurrent: 1,
          // pageSize: pageSize,
          // current: pageCurrent,
          total: totalProduct,

          // showSizeChanger: true,
        }}
      ></Table>
      <Modal
        className="text-center"
        title="Chỉnh sửa thông tin sản phẩm "
        centered
        open={openDialogEditProduct}
        destroyOnClose={true}
        // onOk={() => setOpenDialogEditProduct(false)}
        onCancel={() => {
          setOpenDialogEditProduct(false);
          setSelectedId(null);
        }}
        width={1000}
        footer={[]}
      >
        <EditProduct
          value={valueRecord}
          onClose={() => setOpenDialogEditProduct(false)}
          ondaData={() => {
            listProduct();
          }}
        />
      </Modal>
      <Modal
        className="text-center"
        title="Chỉnh sửa thông tin sản phẩm "
        centered
        open={openDialogShowProduct}
        // destroyOnClose={true}
        // onOk={() => setOpenDialogEditProduct(false)}
        onCancel={() => {
          setOpenDialogShowProduct(false);
          setSelectedId(null);
        }}
        width={1000}
        footer={[]}
      >
        <ShowInforProduct
          value={valueRecordShow}
          onClose={() => setOpenDialogShowProduct(false)}
        />
      </Modal>
    </div>
  );
}

export default MangerProduct;
