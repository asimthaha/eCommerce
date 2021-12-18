import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProduct from "./pages/AddProduct";
import ListProduct from "./pages/ListProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/add-product" element={<AddProduct/>} />
        <Route path="/list" element={<ListProduct/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
