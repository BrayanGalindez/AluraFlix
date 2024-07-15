import Home from "./pages/Home";
import Form from "./pages/Form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
