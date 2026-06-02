import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {TextField}  from '@mui/material'
import './App.css'
import './Dash.css'
import { Link } from 'react-router'
import Menu from './Menu'
import { useEffect } from 'react'

function Cliente() {

  // Estados
  const [list, setList] = useState([])
  const [nome, setNome] = useState("")
  const [endereco, setEndereco] = useState("")
  const [telefone, setTelefone] = useState("")

  // Carregar clientes
  async function loadClientes() {
    try {

      const response = await api.get("/cliente/all")

      // Ajuste conforme retorno do backend
      setList(response.data.clientes)

      console.log(response.data)

    } catch (error) {
      console.log("Erro ao carregar clientes", error)
    }
  }

  // Carrega ao abrir a página
  useEffect(() => {
    loadClientes()
  }, [])

  // Salvar cliente
  const saveCliente = async (event) => {
    event.preventDefault()

    const cliente = {
      nome: nome,
      endereco: endereco,
      telefone: telefone
    }

    try {

      const response = await api.post(
        "/cliente/create",
        cliente
      )

      console.log(response.data)

      alert("Cliente cadastrado com sucesso!")

      // Atualizar lista
      loadClientes()

      // Limpar campos
      setNome("")
      setEndereco("")
      setTelefone("")

    } catch (error) {
      console.log("Erro ao salvar cliente", error)
      alert("Erro ao cadastrar cliente")
    }
  }

  // Excluir cliente
  async function deleteCliente(id) {

    const confirmar = confirm(
      "Deseja realmente excluir este cliente?"
    )

    if (!confirmar) return

    try {

      await api.delete(`/cliente/delete/${id}`)

      alert("Cliente excluído!")

      loadClientes()

    } catch (error) {

      console.log(error)
      alert("Erro ao excluir cliente")

    }
  }

  return (
    <>
      <div className="top">

        <Menu page={"Clientes"} />

        <div className="layout">

          <h1>Cadastro de Clientes</h1>

          {/* FORMULÁRIO */}
          <form onSubmit={saveCliente}>

            <TextField
              label="Nome"
              type="text"
              required
              fullWidth
              value={nome}
              onChange={(e) =>
                setNome(e.target.value)
              }
              style={{ marginBottom: 10 }}
            />

            <TextField
              label="Endereço"
              type="text"
              required
              fullWidth
              value={endereco}
              onChange={(e) =>
                setEndereco(e.target.value)
              }
              style={{ marginBottom: 10 }}
            />

            <TextField
              label="Telefone"
              type="text"
              required
              fullWidth
              value={telefone}
              onChange={(e) =>
                setTelefone(e.target.value)
              }
              style={{ marginBottom: 10 }}
            />

            <button
              type="submit"
              className="counter"
            >
              Salvar Cliente
            </button>

          </form>

          <br />

          {/* TABELA */}
          <table
            border="1"
            width="100%"
            style={{
              borderCollapse: "collapse",
              marginTop: "20px"
            }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Telefone</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>

              {list.length > 0 ? (

                list.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    <td>{item.endereco}</td>
                    <td>{item.telefone}</td>

                    <td>

                      <button
                        onClick={() =>
                          deleteCliente(item.id)
                        }
                      >
                        Excluir
                      </button>

                    </td>
                  </tr>
                ))

              ) : (

                <tr>
                  <td colSpan="5">
                    Nenhum cliente encontrado
                  </td>
                </tr>

              )}

            </tbody>
          </table>

        </div>
      </div>
    </>
  )
}

export default Cliente