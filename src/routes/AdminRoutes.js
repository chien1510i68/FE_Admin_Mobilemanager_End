import { createBrowserRouter } from "react-router-dom";
import React from "react";
import DefaultLayout from "../Admin/layout/DefaultLayout";
import ManagerProduct from "../Admin/page/managerProduct/MangerProduct";
import Login from "../component/form/Login.jsx";
import CreateProduct from "../Admin/page/managerProduct/CreateProduct";
import Register from "../component/form/Register";
import AddStaff from "../Admin/page/staffManager/AddStaff";
import Staff from "../Admin/page/staffManager/Staff";
import Statistical from "../Admin/page/statistical/Statistical"
import ManagerSupplier from "../Admin/page/supplier/ManagerSupplier";
import ManagerPromotion from "../Admin/page/promotion/ManagerPromotion";
import Bill from "../Admin/page/bill/Bill";
import Store from "../Admin/page/store/Store";

const routesAdmin = createBrowserRouter([
  {
    path: "/admin",
    element: <DefaultLayout />,
    children: [
      {
        path: "staff",
        element: <Staff />,
      },
      {
        path: "addstaff",
        element: <AddStaff />,
      },
      {
        path: "bill",
        element: <Bill />,
      },
      {
        path: "managerproduct",
        element: <ManagerProduct />,
      },
     
      {
        path: "statistical",
        element: <Statistical/>,
      },
      {
        path : "addProduct",
        element : <CreateProduct/>
      },{
        path : "supplier",
        element : <ManagerSupplier/>
      },{
        path : "promotion",
        element : <ManagerPromotion/>
      }
      ,{
        path : "store",
        element : <Store/>
      }
    ],
    
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path:"/register",
    element : <Register/>
  }
]);
export default routesAdmin;
