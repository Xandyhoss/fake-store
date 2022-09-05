import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Main from "./pages/Main";
import Page404 from "./pages/Page404";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Router;
