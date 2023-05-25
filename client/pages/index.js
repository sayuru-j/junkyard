import Layout from '../components/Layout'
import HomeComponents from '../components/HomeComponents'
import Others from './others';


const HomePage = () => {
  
  return  <div><Others/>
          <Layout>
          <HomeComponents></HomeComponents>      {/*wrap the homecomponent by layout  <HomeComponents></HomeComponents> */ }
          </Layout>
          </div>
  }
  
  export default HomePage;
  