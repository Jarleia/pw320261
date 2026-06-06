import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import DashBoard from "./DashBoard";
import Menu from "./Menu";
import Produtos from "./Produtos";
import User from "./User";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;