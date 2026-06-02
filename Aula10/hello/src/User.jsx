import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Alert, TextField } from '@mui/material'
import './App.css'
import './Dash.css'
import { Form, Link } from 'react-router'
import Menu from './Menu'
import { useEffect } from 'react'
import api from './service/api'

function User(setUser) {

  const [list, setList] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  async function loadProducts() {

    const result = await api.get("/usuario/all").then(
      (res) => {
        setList(res.data.usuarios)
        console.log(res.data.usuarios);

      }
    )

  }

  useEffect(() => {
    loadProducts();
  }, [])

  const saveUser = async (event) => {
    event.preventDefault();

    const user = {
      nome: name,
      email:email,
      senha: senha,
      mensagem:""
    };
    console.log(user);
    const save = await api.post("/usuario/create", JSON.stringify(user)).then(
      (response) => {
        if (response.status == "ok") {
            loadProducts()
           
        }

      }
    ).catch((error) => {
      console.log(error);

    })


    alert("criando usuário");

  }

  return (
    <>
      <div className='top'  >



        <Menu page={"Users"} />
        <div className='layout'>
          <h1>Usuários</h1>

          <form onSubmit={saveUser}>
            <TextField id="login" label="Email" onChange={(e) =>{
              setEmail(e.target.value)
            } } required type="email" style={{ marginBottom: 10 }}
            ></TextField>
            <br></br>
            <TextField id="login" label="Nome" onChange={(e)=>{
              setName(e.target.value)
            }} required type="text" style={{ marginBottom: 10 }}
            ></TextField>

            <br></br>
            <TextField id="login" label="Senha" required onChange={ (e)=>{
              setSenha(e.target.value)
            }} type="password" style={{ marginBottom: 10 }}
            ></TextField>

            <br></br>

            <button
              type="submit"
              className="counter"
            >
              Salvar
            </button>

          </form>

          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => (
                <tr key={item.id}>
                  <td>{item.nome}</td>
                  <td>{item.email}</td>
                  <td> <a href='#'> Excluir </a> </td>
                  <td> <a href='#'> Editar </a>  </td>
                </tr>
              ))}
            </tbody>
          </table>


        </div>

      </div>

    </>
  )
}

export default User

