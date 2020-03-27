import React from 'react';
import imgLogo from '../../assets/logo.svg';
import './signup.css';

const Signup = () => {
  return (
    <div className="signup">
      <div className="form">
        <form >
          <label>Nome</label>
          <input type="text" placeholder="Nome da ONG" />
          <label>Email</label>
          <input type="text" placeholder="Email da ONG" />
          <label>WhatsApp</label>
          <input type="text" placeholder="WhatsApp da ONG" />



          <label>Cidade</label>
          <input type="text" placeholder="Cidade da ONG" />


          <label>UF</label>
          <input type="text" placeholder="Estado da ONG" maxLength={2} />





          <button>Cadastrar</button>
          <a href="#">Já tenho Cadastro</a>
        </form>
      </div>
      <div className="image">
        <img src={imgLogo} alt="Be the Hero" />
      </div>
    </div>


  );
};

export default Signup;