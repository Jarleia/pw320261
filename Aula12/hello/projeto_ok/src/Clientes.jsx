import { useState } from "react";
import {
  TextField,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import Menu from "./Menu";

function Clientes() {
  const [clientes, setClientes] = useState([]);

  const [cliente, setCliente] = useState({
    nome: "",
    endereco: "",
    telefone: "",
  });

  const [idEditando, setIdEditando] = useState(null);

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const salvar = () => {
    if (!cliente.nome || !cliente.endereco || !cliente.telefone) {
      alert("Preencha todos os campos");
      return;
    }

    if (idEditando) {
      setClientes(
        clientes.map((item) =>
          item.id === idEditando
            ? { ...item, ...cliente }
            : item
        )
      );

      setIdEditando(null);
    } else {
      const novoCliente = {
        id: Date.now(),
        ...cliente,
      };

      setClientes([...clientes, novoCliente]);
    }

    limpar();
  };

  const editar = (item) => {
    setCliente({
      nome: item.nome,
      endereco: item.endereco,
      telefone: item.telefone,
    });

    setIdEditando(item.id);
  };

  const excluir = (id) => {
    setClientes(clientes.filter((item) => item.id !== id));
  };

  const limpar = () => {
    setCliente({
      nome: "",
      endereco: "",
      telefone: "",
    });
  };

  return (
    <div className="top">
      <Menu page="Clientes" />

      <div className="layout">
        <h1>Cadastro de Clientes</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxWidth: "500px",
          }}
        >
          <TextField
            label="Nome"
            name="nome"
            value={cliente.nome}
            onChange={handleChange}
          />

          <TextField
            label="Endereço"
            name="endereco"
            value={cliente.endereco}
            onChange={handleChange}
          />

          <TextField
            label="Telefone"
            name="telefone"
            value={cliente.telefone}
            onChange={handleChange}
          />

          <Button
            variant="contained"
            onClick={salvar}
          >
            {idEditando ? "Atualizar" : "Salvar"}
          </Button>
        </div>

        <br />

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Endereço</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {clientes.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.nome}</TableCell>
                <TableCell>{item.endereco}</TableCell>
                <TableCell>{item.telefone}</TableCell>
                <TableCell>
                  <Button
                    color="warning"
                    variant="contained"
                    onClick={() => editar(item)}
                    sx={{ mr: 1 }}
                  >
                    Editar
                  </Button>

                  <Button
                    color="error"
                    variant="contained"
                    onClick={() => excluir(item.id)}
                  >
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Clientes;