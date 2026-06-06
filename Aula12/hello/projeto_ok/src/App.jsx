import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import DashBoard from "./DashBoard";
import Menu from "./Menu";
import Clientes from "./Clientes";
import Produtos from "./Produtos";
import User from "./User";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;