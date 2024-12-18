import React from "react";
import TopNavbar from "./components/common/main-navigation/TopNavbar";
import Footer from "./components/common/footer/Footer";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div>
      <TopNavbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
