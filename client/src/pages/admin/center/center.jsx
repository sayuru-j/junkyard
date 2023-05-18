import React from "react";
import CenterList from "../../../components/center/CenterList";
import { ViewGridAddIcon } from "@heroicons/react/outline";

function Center() {
  return (
    <div className="mt-5 min-h-screen">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-lg font-bold text-primary">Center Dashboard</h1>
        </div>

        <div>
          <a
            href="/AddCenter"
            className="bg-primary/70 hover:bg-primary cursor-pointer px-4 py-1 text-white text-sm font-medium rounded-lg shadow-sm inline-flex gap-2 items-center transition-all duration-200 ease-out"
          >
            Add Centers
            <span>
              <ViewGridAddIcon className="w-5" />
            </span>
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
