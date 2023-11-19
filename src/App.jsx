import "./App.css";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./pages/Banner/Banner";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </>
  );
}

export default App;
