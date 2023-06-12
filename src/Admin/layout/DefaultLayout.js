import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  LineChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, notification, theme } from "antd";

import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Cookies from "js-cookie";
const DefaultLayout = ({ children }) => {
  const { Header, Sider, Content } = Layout;

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [selectMenuKey, setSelectMenuKey] = useState("1");

  const onMenuClick = (e) => {
    setSelectMenuKey(e.key);
  };

  const handleLogout = () => {
    notification.success({ message: "Bạn đã đăng xuất thành công" });
    Cookies.remove("dataUser");
    Cookies.remove("jwt");
  };

  return (
    <Layout className="max-h-[100vh]">
      <Sider collapsible collapsed={collapsed}>
        <div className="logo">
          {!collapsed ? (
            <div className="my-[10px]">
              <img
                className="w-[40%] h-[80px] rounded-[50%] mx-auto"
                src="https://plus.unsplash.com/premium_photo-1675127366476-98e3f3acca8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=395&q=80"
                alt=""
              />
              <h3 className="text-center text-red-50 pt-1">Admin</h3>
            </div>
          ) : (
            <div className="my-[20px]">
              <img
                className="w-[40%] h-[40px] rounded-[50%] mx-auto"
                src="https://plus.unsplash.com/premium_photo-1675127366476-98e3f3acca8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=395&q=80"
                alt=""
              />
              <h3 className="text-center text-red-50 pt-1">Admin</h3>
            </div>
          )}
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={onMenuClick}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/admin/staff"> Quản lí nhân viên </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UploadOutlined />}>
            <Link to="/admin/managerproduct"> Quản lí sản phẩm</Link>
          </Menu.Item>

          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/admin/bill"> Quản lí đơn hàng</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<LineChartOutlined />}>
            <Link to="/admin/statistical"> Thống kê doanh thu</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<UserOutlined />}>
            <Link to="/admin/supplier"> Quản lí nhà cung cấp</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<UserOutlined />}>
            <Link to="/admin/promotion"> Quản lí khuyến mãi</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<UserOutlined />}>
            <Link to="/admin/store"> Quản lí kho</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{ padding: 0, background: colorBgContainer }}
          className="flex justify-between items-center pr-[50px]"
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          {
            <p className="font-[500] font-[18px] text-[#5454e7] animate__animated animate__bounce animate__delay-2s">
              Chào mừng bạn đến với trang quản trị cho website bán điện thoại
            </p>
          }
          <Button
            variant="contained"
            startIcon={<ExitToAppIcon />}
            className="mr-[30px] bg-teal-500 text-white "
          >
            <Link to={"/"} onClick={() => handleLogout()}>
              LOGOUT
            </Link>
          </Button>
        </Header>
        <Content
          className="overflow-y-auto"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {/* {getComponent()} */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
