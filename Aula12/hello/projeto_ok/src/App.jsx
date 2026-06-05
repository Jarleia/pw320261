import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./Login"
import Dashboard from "./DashBoard"
import PageNoteFound from "./NotFound"
import User from "./User"
import Produtos from "./Produtos"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/create" element={<User />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="*" element={<PageNoteFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App