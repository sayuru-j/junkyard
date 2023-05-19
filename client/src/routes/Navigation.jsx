import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Fleet from "../pages/admin/fleet/fleet";
import Userview from "../pages/user/userShedule";

function Navigation() {
  return (
    <>
      <Routes>
        <Route path="/" exact Component={Home} />


        {/* Fleet */}
        <Route path="/fleet" exact Component={Fleet}/>

        {/* Userview */}
        <Route path="/userShedule" exact Component={Userview}/>
      </Routes>
    </>
  );
}

export default Navigation;
