import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";

function Navigation() {
  return (
    <>
      <Routes>
        <Route path="/" exact Component={Home} />
      </Routes>
    </>
  );
}

export default Navigation;
