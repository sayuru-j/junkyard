import axios from "axios";
import React, { useEffect, useState } from "react";

function CenterList() {
  const [centers, setCenters] = useState([]);

  const getCenters = async () => {
    try {
      const response = await axios.get(``);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);

  return <div>CenterList</div>;
}

export default CenterList;
