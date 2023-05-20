import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditCollection() {
  const params = useParams();
  const [collection, setCollection] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [state, setState] = useState({
    name: "",
    address: "",
    collectionDate: "",
    wasteType: "",
    quantity: "",
  });
  const [changing, setChanging] = useState(false);
  const getCollection = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/collection/${params.id}`
      );
      setCollection(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCollection();
  }, []);

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

  const handleChange = (item) => (e) => {
    setState({
      ...state,
      [item]: e.target.value,
    });

    setChanging(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API}/collection/${params.id}`,
        {
          name: state.name ? state.name : collection.name,
          address: state.address ? state.address : collection.address,
          collectionDate: state.collectionDate
            ? state.collectionDate
            : collection.collectionDate,
          wasteType: state.wasteType ? state.wasteType : collection.wasteType,
          quantity: state.quantity ? state.quantity : collection.quantity,
        }
      );

      console.log(response.data);
      if (response.data) {
        navigate("/CollectSuccess");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="min-h-screen">
      <h1 className="mt-16 font-medium text-lg">Edit Pickup Collection</h1>
      <div className="sm:mt-0">
       
        <div className="md:grid md:grid-cols-3 md:gap-6 mt-10">
          <div className="mt-5 md:mt-0 md:col-span-4">
            <form onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white/60 sm:p-16">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange("name")}
                        defaultValue={collection?.name}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange("address")}
                        defaultValue={collection?.address}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email_address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Collection Date
                      </label>
                      <input
                        type="date"
                        name="email_address"
                        id="email_address"
                        autoComplete="email"
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange("collectionDate")}
                        defaultValue={collection?.collectionDate?.split("T")[0]}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Waste Type
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleChange("wasteType")}
                        placeholder={collection?.wasteType}
                      >
                        <option>Select</option>
                        <option value="Plastic">Plastic</option>
                        <option value="Food">Food</option>
                        <option value="Metal">Metal</option>
                        <option value="Paper">Paper</option>
                        <option value="Glass">Glass</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Textile">Textile</option>
                        <option value="Chemicals">Chemicals</option>
                        <option value="Wood">Wood</option>
                        <option value="Batteries">Batteries</option>
                        <option value="Hazardous Waste">Hazardous Waste</option>
                        <option value="Organic Waste">Organic Waste</option>
                        <option value="Construction Debris">
                          Construction Debris
                        </option>
                        <option value="Medical Waste">Medical Waste</option>
                        <option value="E-Waste">E-Waste</option>
                        <option value="Bottles and Cans">
                          Bottles and Cans
                        </option>
                        <option value="Packaging Materials">
                          Packaging Materials
                        </option>
                        <option value="Automotive Parts">
                          Automotive Parts
                        </option>
                        <option value="Appliances">Appliances</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Toxic Substances">
                          Toxic Substances
                        </option>
                        <option value="Scrap Metal">Scrap Metal</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Quantity
                      </label>
                      <input
                        type="number"
                        name="state"
                        id="state"
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange("quantity")}
                        defaultValue={collection?.quantity}
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-white/20 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditCollection;
