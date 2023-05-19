import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import VehicleAdd from "../../../components/fleet/VehicleAdd"
import Layout from "../../../components/Layout"
import VehicleList from "../../../components/fleet/VehicleList"
import SheduleList from "../../../components/fleet/SheduleList"
import SheduleAdd from "../../../components/fleet/SheduleAdd"
import UpdateVehicle from "../../../components/fleet/UpdateVehicle"

function Fleet() {
  return (
    <>
    <Layout>
    <Header/>
    <VehicleAdd/>
    <SheduleAdd/>
    <UpdateVehicle/>
    <SheduleList/>
    <VehicleList/>
    </Layout>
    <Footer/>
    </>
  )
}

export default Fleet