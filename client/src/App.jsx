import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Navigation from "./routes/Navigation";

function App() {
  return (
    <>
      <main className="bg-background">
        <Header />
        <Layout>
          <Navigation />
        </Layout>
        <Footer />
      </main>
    </>
  );
}

export default App;
