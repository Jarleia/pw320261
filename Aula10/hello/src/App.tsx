import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Login";
import Dashboard from "./DashBoard";
import PageNotFound from "./NotFound"; // Ou "./NotFound.jsx"
import User from "./User";
import Produtos from "./Produtos";
import Clientes from "./Clientes";

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