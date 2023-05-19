import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/register";
import Login from "../pages/login";
import Center from "../pages/admin/center/center";
import AddNewCenter from "../components/center/AddNewCenter";
import UpdateCenter from "../components/center/UpdateCenter";
import AccessDenied from "../components/AccessDenied";
import { useEffect, useState } from "react";
import CenterPublic from "../pages/user/center/centerPublic";
import Userview from "../pages/user/fleet/userShedule";
import Fleet from "../pages/admin/fleet/fleet";
import getCollection from "../components/collect/getCollection"
import EditCollection from "../components/collect/EditCollection"
import AddCollection from "../components/collect/addCollect";

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

        {/* Collect Routes */}
        <Route path="/addcollect" Component={AddCollection} />
        <Route path="/getCollectin" Component={getCollection} />
        <Route path="/editCollection/:id" Component={EditCollection} />
        

        {/* Fleet */}
        <Route
          path="/ManageFleet"
          Component={userData?.user?.role === "admin" ? Fleet : Userview}
        />

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

        <Route path="/Centers" Component={CenterPublic} />
      </Routes>
    </>
  );
}

export default Navigation;
