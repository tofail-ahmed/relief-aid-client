import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import AllReliefGoods from "./pages/AllReliefGoods";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import ProtectedRoute from "./components/layouts/ProtectedRoute";
import Home from "./pages/Home/Home";
import GoodDetails from "./components/GoodDetails";
import Gallery from "./pages/Gallery/Gallery";
import Supplies from "./pages/Supplies/Supplies";
import CreateSupply from "./pages/Supplies/CreateSupply";
import SupplyDetails from "./pages/Supplies/SupplyDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "relief-goods",
        element: <AllReliefGoods />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: `relief-details/:id`,
        element: <GoodDetails></GoodDetails>,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "supplies",
        element: <Supplies />,
      },
      {
        path: "create-supply",
        element: <CreateSupply />,
      },
      {
        path:`supply-details/:id`,
        element:<SupplyDetails/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
