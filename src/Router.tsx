import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Page404 from "./components/Page404";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Router;
