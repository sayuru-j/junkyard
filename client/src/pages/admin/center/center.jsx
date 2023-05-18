import React from "react";
import CenterList from "../../../components/center/CenterList";

function Center() {
  return (
    <div className="mt-5">
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-1 items-center">
          <h1 className="text-lg font-medium text-primary">Center Dashboard</h1>
          <p className="text-xs font-thin text-primary/30">
            Here you can add or remove existing centers.
          </p>
        </div>

        <div>
          <a className="bg-primary px-4 py-1 text-white text-sm font-medium rounded-lg">
            CREATE NEW
          </a>
        </div>
      </div>

      <div>
        <h1 className="text-sm">Total: 14 Centers</h1>
      </div>

      <div>
        <CenterList />
      </div>
    </div>
  );
}

export default Center;
