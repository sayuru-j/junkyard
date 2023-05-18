import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  TrashIcon,
  PencilIcon,
  DocumentDownloadIcon,
  RefreshIcon,
} from "@heroicons/react/outline";

function CenterList() {
  const [centers, setCenters] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [refresh, setRefresh] = useState(false);

  const getCenters = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}/centers`);

      setCenters(response.data);
    } catch (error) {
      setError(error);
    }
  };

  const handleDelete = async (center_Id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API}/centers/${center_Id}`
      );

      setSuccess(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getCenters();

    //Setting state of Error and Success to default
    setSuccess("");
    setError("");
  }, [success, refresh]);

  return (
    <>
      <div className="pb-2 flex w-full items-center justify-between py-4">
        <h1 className="text-sm font-medium">Total: {centers.length}</h1>
        <div className="max-w-lg w-full">
          <input
            className="rounded-full w-full shadow-sm text-sm pl-2 py-1 outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="overflow-x-auto overflow-y-auto rounded-md max-h-[70vh] shadow-sm mt-1">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Center ID
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Center Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Address
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Supervisor
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Phone No
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Email
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Operating Hours
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Accepted Materials
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Capacity
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Cover
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Services Offered
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900"
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {centers?.map((center) => (
              <tr key={center._id} className="hover:bg-gray-50">
                <th className="px-4 py-4">{center.center_Id}</th>
                <td className="px-4 py-4">{center.center_Name}</td>
                <td className="px-4 py-4">{center.address}</td>
                <td className="px-4 py-4">{center.supervisor}</td>
                <td className="px-4 py-4">{center.phone_No}</td>
                <td className="px-4 py-4 italic">{center.email}</td>
                <td className="px-4 py-4">{center.operating_Hours}</td>
                <td className="px-4 py-4">
                  <div key={center._id} className="flex gap-3 max-w-10">
                    {center.accepted_Materials.map((material) => (
                      <div
                        key={material}
                        className="rounded-full inline-flex px-4 py-1 text-xs text-green-700 font-medium bg-green-50"
                      >
                        {material}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="rounded-full inline-flex px-4 py-1 text-xs text-purple-700/80 font-medium bg-purple-50">
                    {center.capacity}
                    <span className="pl-1 text-purple-700/50">KG</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center justify-center">
                    <img
                      className="rounded-full w-8 h-8 object-cover"
                      src={center.photo_Url}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div key={center._id} className="flex gap-3 max-w-10">
                    {center.services_Offered.map((service) => (
                      <div key={service} className="flex">
                        <h1 className="rounded-full px-4 py-1 text-xs text-red-700 font-medium bg-red-50">
                          {service}
                        </h1>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex gap-3 items-center">
                    <a>
                      <PencilIcon className="w-5 hover:text-accent cursor-pointer" />
                    </a>
                    <button
                      onClick={handleDelete.bind(this, center.center_Id)}
                      type="button"
                    >
                      <TrashIcon className="w-5 hover:text-accent" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between py-3">
        <div>
          <button
            type="button"
            onClick={() => setRefresh(!refresh)}
            className=" bg-primary px-4 py-1 text-white text-sm rounded-lg font-medium inline-flex items-center gap-2"
          >
            Refresh
            <span>
              <RefreshIcon className="w-5" />
            </span>
          </button>
        </div>
        <div>
          <button
            type="button"
            className=" bg-accent px-4 py-1 text-white text-sm rounded-lg font-medium inline-flex items-center gap-2"
          >
            Download A Report
            <span>
              <DocumentDownloadIcon className="w-5" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default CenterList;
