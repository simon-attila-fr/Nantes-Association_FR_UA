/* eslint-disable no-restricted-syntax */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "../../assets/styles/Login.css";
import logo from "../../assets/img/logo.png";

function Login() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const emailRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/login`,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setAuth({
        id: response.data.id,
        email: response.data.mail,
        status: [response.data.status],
        loggedIn: true,
      });
      setEmail("");
      setPassword("");
      alert("Login OK");
      navigate("/admin/", { replace: true });
    } catch (error) {
      if (!error.response) {
        setErrorMsg("Le serveur ne répond pas.");
      } else if (error.response?.status === 400) {
        setErrorMsg("Veuillez préciser l'email et le mot de passe.");
      } else if (error.response?.status === 403) {
        setErrorMsg("L'email ou le mot de passe n'est pas correcte.");
      } else {
        setErrorMsg("Echec lors de la connexion.");
      }
      errorRef.current.focus();
    }
  };

  return (
    <section className="login-box">
      <img className="logo-login" src={logo} alt="logo" />
      <h2>Bienvenue sur l'administration de votre site</h2>
      <h3>Identifiez-vous</h3>
      <p ref={errorRef} aria-live="assertive">
        {errorMsg}
      </p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          ref={emailRef}
          id="email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <div className="submit-box">
          <span>
            <button type="submit" value="Se connecter">
              Se connecter
            </button>
          </span>
        </div>
      </form>
      <Link to="/">Retour à la page d'accueil</Link>
    </section>
    // </div>
  );
}

export default Login;
