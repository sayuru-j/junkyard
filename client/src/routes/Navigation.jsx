import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/register";
import Login from "../pages/login";
import Center from "../pages/admin/center/center";
import AddNewCenter from "../components/center/AddNewCenter";
import UpdateCenter from "../components/center/UpdateCenter";
import AccessDenied from "../components/AccessDenied";
import { useEffect, useState } from "react";

function Navigation() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />

        {/* Login Routes */}
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />

        {/* Center Routes */}
        <Route
          path="/ManageCenters"
          Component={userData?.user?.role === "admin" ? Center : AccessDenied}
        />
        <Route
          path="/AddCenter"
          Component={
            userData?.user?.role === "admin" ? AddNewCenter : AccessDenied
          }
        />
        <Route
          path="/UpdateCenter/:id"
          Component={
            userData?.user?.role === "admin" ? UpdateCenter : AccessDenied
          }
        />
      </Routes>
    </>
  );
}

export default Navigation;
