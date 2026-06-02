import { useState, useEffect } from "react";
import axios from "axios";

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  // Buscar clientes do banco
  const buscarClientes = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/clientes"
      );

      setClientes(response.data);
    } catch (error) {
      console.log(
        "Erro ao buscar clientes:",
        error
      );
    }
  };

  // Carregar clientes ao abrir a página
  useEffect(() => {
    buscarClientes();
  }, []);

  // Cadastrar cliente
  const cadastrarCliente = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:3000/clientes",
        {
          nome,
          email,
        }
      );

      alert("Cliente cadastrado!");

      // limpar campos
      setNome("");
      setEmail("");

      // atualizar lista
      buscarClientes();
    } catch (error) {
      console.log(
        "Erro ao cadastrar:",
        error
      );
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cadastro de Clientes</h1>

      <form onSubmit={cadastrarCliente}>
        <div>
          <label>Nome:</label>
          <br />

          <input
            type="text"
            placeholder="Digite o nome"
            value={nome}
            onChange={(e) =>
              setNome(e.target.value)
            }
            required
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <br />

          <input
            type="email"
            placeholder="Digite o email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />
        </div>

        <br />

        <button type="submit">
          Cadastrar
        </button>
      </form>

      <hr />

      <h2>Clientes cadastrados</h2>

      {clientes.length === 0 ? (
        <p>Nenhum cliente cadastrado.</p>
      ) : (
        clientes.map((cliente) => (
          <div key={cliente.id}>
            <strong>
              {cliente.nome}
            </strong>{" "}
            - {cliente.email}
          </div>
        ))
      )}
    </div>
  );
}

export default Clientes;