import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import VehicleAdd from "../../../components/fleet/VehicleAdd"
import Layout from "../../../components/Layout"
import VehicleList from "../../../components/fleet/VehicleList"

function Fleet() {
  return (
    <>
    <Layout>
    <Header/>
    <VehicleAdd/>
    <VehicleList/>
    
    </Layout>
    <Footer/>
    </>
  )
}

export default Fleet