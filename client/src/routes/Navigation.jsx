import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Fleet from "../pages/admin/fleet/fleet";

function Navigation() {
  return (
    <>
      <Routes>
        <Route path="/" exact Component={Home} />


        {/* Fleet */}
        <Route path="/fleet" exact Component={Fleet}/>
      </Routes>
    </>
  );
}

export default Navigation;
