import VehicleAdd from "../../../components/fleet/VehicleAdd";
import VehicleList from "../../../components/fleet/VehicleList";
import SheduleList from "../../../components/fleet/SheduleList";
import SheduleAdd from "../../../components/fleet/SheduleAdd";
import UpdateVehicle from "../../../components/fleet/UpdateVehicle";

function Fleet() {
  return (
    <>
      <VehicleAdd />
      <SheduleAdd />
      <UpdateVehicle />
      <SheduleList />
      <VehicleList />
    </>
  );
}

export default Fleet;
