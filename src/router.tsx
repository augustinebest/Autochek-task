import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProductDetail from "./pages/productDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="details/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
