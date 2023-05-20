import { PlusCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnnotationIcon } from "@heroicons/react/solid";

function UpdateCenter() {
  const navigate = useNavigate();

  const params = useParams();

  const getCenter = async () => {
    const id = params.id;

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/centers/${id}`
      );

      setState({
        ...response.data,
        working_Hours_left: response?.data?.operating_Hours?.substring(0, 5),
        working_Hours_right: response?.data?.operating_Hours?.substring(9, 15),
      });
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getCenter(params);
  }, []);

  const [state, setState] = useState({});
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedValues2, setSelectedValues2] = useState([]);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const handleChange = (item) => (e) => {
    setState({ ...state, [item]: e.target.value });
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;

    if (event.target.checked) {
      setSelectedValues((prevState) => [...prevState, value]);
    } else {
      setSelectedValues((prevState) =>
        prevState.filter((val) => val !== value)
      );
    }
  };

  const handleCheckboxChange2 = (event) => {
    const value = event.target.value;

    if (event.target.checked) {
      setSelectedValues2((prevState) => [...prevState, value]);
    } else {
      setSelectedValues2((prevState) =>
        prevState.filter((val) => val !== value)
      );
    }
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ecgop3wq");
    data.append("cloud_name", "df2vpsktp");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/df2vpsktp/image/upload",
        data
      );
      const responseData = await response.data;
      setUrl(responseData.url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API}/centers/${params.id}`,
        {
          center_Id: "CID" + state.center_Id.replace("CID", ""),
          center_Name: state.center_Name,
          address: state.address,
          photo_Url: url ? url : state.photo_Url,
          supervisor: state.supervisor,
          phone_No: state.phone_No,
          email: state.email,
          operating_Hours:
            state.working_Hours_left + " To " + state.working_Hours_right,
          capacity: state.capacity,
          accepted_Materials:
            selectedValues.length > 0
              ? selectedValues
              : state.accepted_Materials,
          services_Offered:
            selectedValues2.length > 0
              ? selectedValues2
              : state.services_Offered,
        }
      );

      navigate(response?.data && "/ManageCenters");

      // console.log(url);
    } catch (error) {
      setError(error?.response?.data?.error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col mt-10 gap-5 mb-20">
      <div className="flex items-center text-primary gap-1">
        <h1 className="pl-1 font-medium text-lg">Adding A New Center</h1>
        <PlusCircleIcon className="w-5 animate-spin" />
      </div>
      <div className="w-full flex justify-center mt-5">
        <div className="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
          <div className="grid  gap-8 grid-cols-1">
            <div className="flex flex-col ">
              <div className="flex flex-col sm:flex-row items-center">
                <h2 className="font-semibold text-lg mr-auto">Center Info</h2>
                <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
              </div>
              <div className="mt-5">
                <div className="form flex flex-col gap-4">
                  <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Center ID <abbr title="required">*</abbr>
                      </label>
                      <div className="relative flex items-center">
                        <input
                          placeholder="001"
                          className="appearance-none outline-none pl-14 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
                          type="text"
                          name="center-id"
                          id="center-id"
                          onChange={handleChange("center_Id")}
                          value={state?.center_Id?.replace("CID", "")}
                        />
                        <div className="absolute font-medium text-primary/50 left-0 bg-slate-200 h-full flex items-center px-4 rounded-l-md">
                          CID
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Center Name <abbr title="required">*</abbr>
                      </label>
                      <input
                        placeholder="Center Name"
                        className="appearance-none outline-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                        name="center-name"
                        id="center-name"
                        onChange={handleChange("center_Name")}
                        value={state?.center_Name}
                      />
                    </div>
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Address <abbr title="required">*</abbr>
                      </label>
                      <input
                        placeholder="Colombo 12"
                        className="appearance-none outline-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                        name="address"
                        id="address"
                        onChange={handleChange("address")}
                        value={state?.address}
                      />
                    </div>
                  </div>
                  <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Supervisor <abbr title="required">*</abbr>
                      </label>

                      <input
                        placeholder="Mr. John"
                        className="appearance-none outline-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                        name="supervisor"
                        id="supervisor"
                        onChange={handleChange("supervisor")}
                        value={state?.supervisor}
                      />
                    </div>
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Phone No: <abbr title="required">*</abbr>
                      </label>
                      <input
                        placeholder="Phone Number"
                        className="appearance-none outline-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="tel"
                        name="phone-no"
                        id="phone-no"
                        onChange={handleChange("phone_No")}
                        value={state?.phone_No}
                      />
                    </div>
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Email <abbr title="required">*</abbr>
                      </label>
                      <input
                        placeholder="example@email.com"
                        className="appearance-none outline-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                        name="email"
                        id="email"
                        onChange={handleChange("email")}
                        value={state?.email}
                      />
                    </div>
                  </div>
                  <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Working Hours <abbr title="required">*</abbr>
                      </label>

                      <div className="flex gap-2 items-center">
                        <input
                          placeholder=""
                          className="appearance-none outline-none block w-1/2 bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
                          type="time"
                          name="working-hours-left"
                          id="working-hours-left"
                          onChange={handleChange("working_Hours_left")}
                          value={state?.operating_Hours?.substring(0, 5)}
                        />
                        <span>To</span>
                        <input
                          placeholder=""
                          className="appearance-none outline-none block w-1/2 bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
                          type="time"
                          name="working-hours-right"
                          id="working-hours-right"
                          onChange={handleChange("working_Hours_right")}
                          value={state?.operating_Hours?.substring(9, 15)}
                        />
                      </div>
                    </div>
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Capacity <abbr title="required">*</abbr>
                      </label>
                      <div className="relative flex items-center">
                        <input
                          placeholder="Capacity"
                          className="appearance-none outline-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
                          type="number"
                          name="capacity"
                          id="capacity"
                          onChange={handleChange("capacity")}
                          value={state?.capacity}
                        />
                        <div className="absolute font-medium text-primary/50 right-0 bg-slate-200 h-full flex items-center px-4 rounded-r-md">
                          KG
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2 pt-">
                        Upload Cover <abbr title="required">*</abbr>
                        <input
                          className="hidden"
                          type="file"
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                        <p
                          className="text-sm text-primary/50 mt-2 flex items-center justify-center cursor-pointer w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          type="button"
                        >
                          Change the photo
                        </p>
                      </label>
                    </div>
                  </div>
                  <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                    <div className="mb-3 space-y-2 w-1/3 text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Accepted Materials <abbr title="required">*</abbr>
                      </label>

                      <div className="flex items-center mb-4">
                        <input
                          id="household-waste"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          onChange={handleCheckboxChange}
                          value="Household"
                        />
                        <label
                          htmlFor="household-waste"
                          className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                        >
                          Household Waste
                        </label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          id="recycle-materials"
                          type="checkbox"
                          value="Recycle"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          onChange={handleCheckboxChange}
                        />
                        <label
                          htmlFor="recycle-materials"
                          className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                        >
                          Recycle Materials
                        </label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          id="hazardous-waste"
                          type="checkbox"
                          value="Hazardous"
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label
                          htmlFor="hazardous-waste"
                          className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                        >
                          Hazardous Waste
                        </label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          id="construction-demo"
                          type="checkbox"
                          value="Construction and Demolition"
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label
                          htmlFor="construction-demo"
                          className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                        >
                          Construction and Demolition Waste
                        </label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          id="organic-waste"
                          type="checkbox"
                          value="Organic"
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label
                          htmlFor="organic-waste"
                          className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                        >
                          Organic Waste
                        </label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          id="industrial-waste"
                          type="checkbox"
                          value="Industrial"
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label
                          htmlFor="industrial-waste"
                          className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                        >
                          Industrial Waste
                        </label>
                      </div>
                    </div>

                    <div className="mb-3 space-y-2 w-1/3 text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Services Offered <abbr title="required">*</abbr>
                      </label>

                      <div className="flex items-center mb-4">
                        <input
                          id="recycling"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          onChange={handleCheckboxChange2}
                          value="Recycling"
                        />
                        <label
                          htmlFor="recycling"
                          className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                        >
                          Recycling
                        </label>
                      </div>

                      <div className="flex items-center mb-4">
                        <input
                          id="waste-to-energy"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          onChange={handleCheckboxChange2}
                          value="Waste To Energy Conversion"
                        />
                        <label
                          htmlFor="waste-to-energy"
                          className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                        >
                          Waste To Energy Conversion
                        </label>
                      </div>

                      <div className="flex items-center mb-4">
                        <input
                          id="comp-serv"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          onChange={handleCheckboxChange2}
                          value="Composting Services"
                        />
                        <label
                          htmlFor="comp-serv"
                          className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                        >
                          Composting Services
                        </label>
                      </div>
                    </div>

                    {image ? (
                      <div className="flex flex-col items-center w-1/3 justify-center">
                        <img
                          className="rounded-2xl max-h-48"
                          src={URL.createObjectURL(image)}
                          alt=""
                        />
                        <button
                          onClick={uploadImage}
                          type="button"
                          className="my-2 py-1 bg-primary text-white px-4 rounded-lg"
                        >
                          {url ? "Uploaded" : "Upload"}
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center w-1/3 justify-center">
                        <img
                          className="rounded-2xl max-h-48"
                          src={state?.photo_Url}
                          alt=""
                        />
                        <button
                          onClick={uploadImage}
                          type="button"
                          className="my-2 py-1 bg-primary text-white px-4 rounded-lg"
                        >
                          {url ? "Uploaded" : "Upload"}
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <button
                        onClick={() => navigate("/ManageCenters")}
                        className="mb-2 md:mb-0 bg-white px-5 py-1 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-lg hover:shadow-lg hover:bg-gray-100"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSubmit}
                        className="mb-2 md:mb-0 bg-primary/50 px-5 py-1 text-sm shadow-sm font-medium tracking-wider text-white rounded-lg hover:shadow-lg hover:bg-primary"
                      >
                        Add
                      </button>
                    </div>
                    {error && (
                      <div className="bg-red-50 px-4 flex items-center gap-2 rounded-lg py-1">
                        <AnnotationIcon className="w-4 text-red-600" />
                        <h1 className="text-sm font-medium text-red-600">
                          {error}
                        </h1>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateCenter;
