import React from "react";
import Styles from "./Register.module.css";

import { useState, useEffect } from "react";
import { Button } from "bootstrap";
import { useAuthentication } from "../../hooks/useAuthentication";

export const Register = () => {
  const [dispalyNome, setDisplayNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmePassword, setConfirmePassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handlerSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      dispalyNome,
      email,
      password,
    };

    if (password !== confirmePassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }

    const res = await createUser(user);

    console.log(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <div className={Styles.register}>
      <h1>Cadastre-se para postar!!</h1>
      <p>Crie seu usuário e compartilhe suas historias!! </p>
      <form onSubmit={handlerSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="dispalynome"
            required
            placeholder="Nome de usuário: "
            value={dispalyNome}
            onChange={(e) => setDisplayNome(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail: </span>
          <input
            type="email"
            name="email"
            required
            placeholder="Digite seu Email: "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            name="password"
            required
            placeholder="Digite uma Senha: "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirme a Senha: </span>
          <input
            type="password"
            name="confirmePassword"
            required
            placeholder="Corfirme a Senha: "
            value={confirmePassword}
            onChange={(e) => setConfirmePassword(e.target.value)}
          />
        </label>

        {!loading && <button className="btn">Confirmar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};
