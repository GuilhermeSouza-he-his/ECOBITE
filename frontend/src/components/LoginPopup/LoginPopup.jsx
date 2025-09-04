import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext)

  const [currState, setCurrState] = useState("Login")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onLogin = async (event) => {
    event.preventDefault()
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login"
    } else {
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token)
      localStorage.setItem("token", response.data.token)
      setShowLogin(false)
    } else {
      alert(response.data.message)
    }
  }

  return (
    <div className="login-popup">
      <div className="login-popup-container">

        {/* BOTÃO DE FECHAR (X) */}
        <img
          src={assets.cross}
          alt="Fechar"
          className="close-btn"
          onClick={() => setShowLogin(false)}
        />

        {/* LADO ESQUERDO */}
        <div className="login-left">
          
          
          <h2>Tem conta?</h2>
          <p>Entre na sua conta e peça seus pedidos favoritos,<br />ou quem sabe um NOVO!!!</p>
          <p>Clica no botão e vem ser feliz!!!</p>
          <button onClick={() => setCurrState("Login")}>Entrar</button>
        </div>

        {/* LADO DIREITO (FORMULÁRIO) */}
        <div className="login-right">
          <h2>{currState === "Login" ? "Entrar" : "Crie sua conta"}</h2>
          <form onSubmit={onLogin} className="login-form">
            {currState === "Login" ? null : (
              <input
                type="text"
                name="name"
                onChange={onChangeHandler}
                value={data.name}
                placeholder="Digite seu nome"
                required
              />
            )}
            <input
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              type="email"
              placeholder="Digite seu email"
              required
            />
            <input
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              type="password"
              placeholder="Digite sua senha"
              required
            />

            <button type="submit">
              {currState === "Login" ? "Entrar" : "Cadastrar"}
            </button>
          </form>

          <p>
            {currState === "Login" ? (
              <>Não tem conta? <span onClick={() => setCurrState("Sign Up")}>Cadastrar</span></>
            ) : (
              <>Já tem conta? <span onClick={() => setCurrState("Login")}>Entrar</span></>
            )}
          </p>
        </div>

      </div>
    </div>
  )
}

export default LoginPopup
