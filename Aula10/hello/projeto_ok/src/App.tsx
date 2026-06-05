import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Login.jsx";
import Dashboard from "./DashBoard.jsx";
import PageNoteFound from "./NotFound.jsx";
import User from "./User.jsx";
import Produtos from "./Produtos.jsx";
import Clientes from "./Clientes.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/user/create"
          element={<User />}
        />

        <Route
          path="/produtos"
          element={<Produtos />}
        />

        <Route
          path="/clientes"
          element={<Clientes />}
        />

        <Route
          path="*"
          element={<PageNoteFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;