// import components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Layout from "../components/Layout";

function Home() {
  return (
    <div className="bg-background">
      <Layout>
        <Header />
        <Hero />
        <Services />
      </Layout>
      <Footer />
    </div>
  );
}

export default Home;
