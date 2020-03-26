import React from 'react';
import imgHeroes from '../../assets/heroes.png'
import imgLogo from '../../assets/logo.svg';
import './login.css';

const Login = () => {
  return (
    <div className="login">
      <div className="form">

        <img src={imgLogo} alt="Be The Hero" />
        <h2>Faça seu Login</h2>
        <form>
          <input type="text" placeholder="Sua ID" />
          <button>Acessar</button>
          <a href="#">Não tenho cadastro</a>
        </form>

      </div>
      <div className="image">
        <img src={imgHeroes} alt="Heroes" />
      </div>
    </div>
  );
};

export default Login;