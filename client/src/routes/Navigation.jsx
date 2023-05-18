import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Center from "../pages/admin/center/center";
import AddNewCenter from "../components/center/AddNewCenter";
import UpdateCenter from "../components/center/UpdateCenter";

function Navigation() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />

        {/* Center Routes */}
        <Route path="/ManageCenters" Component={Center} />
        <Route path="/AddCenter" Component={AddNewCenter} />
        <Route path="/UpdateCenter/:id" Component={UpdateCenter} />
      </Routes>
    </>
  );
}

export default Navigation;
