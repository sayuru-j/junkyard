import React from "react";
import CenterList from "../../../components/center/CenterList";

function Center() {
  return (
    <div className="mt-5 min-h-screen">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-lg font-medium text-primary">Center Dashboard</h1>
        </div>

        <div>
          <a className="bg-primary px-4 py-1 text-white text-sm font-medium rounded-lg shadow-sm">
            CREATE NEW
          </a>
        </div>
      </div>

      <div>
        <CenterList />
      </div>
    </div>
  );
}

export default Center;
