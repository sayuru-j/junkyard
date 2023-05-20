import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  TrashIcon,
  PencilIcon,
  DocumentDownloadIcon,
  RefreshIcon,
} from "@heroicons/react/outline";

function getCollection() {
  const [collections, setCollections] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const getCollections = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/collection`
      );
      setCollections(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    getCollections();
    setIsDeleted(false);
  }, [isDeleted]);

  const handleDelete = async (_id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API}/collection/${_id}`
      );
      if (response.data) {
        setIsDeleted(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-20">
      <h1 className="my-2 text-center font-medium text-lg">
        Manage Collection
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Collection Date
              </th>
              <th scope="col" className="px-6 py-3">
                Waste Type
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {collections.map((collection) => (
              <tr
                key={collection._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {collection.name}
                </th>
                <td className="px-6 py-4">{collection.address}</td>
                <td className="px-6 py-4">{collection.collectionDate}</td>
                <td className="px-6 py-4">{collection.wasteType}</td>
                <td className="px-6 py-4">{collection.quantity}</td>

                <td className="px-6 py-4 text-right flex items-center gap-3">
                  <a
                    href={`/editCollection/${collection._id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <PencilIcon className="w-5" />
                  </a>
                  <button
                    type="button"
                    onClick={handleDelete.bind(this, collection._id)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <TrashIcon className="w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default getCollection;
