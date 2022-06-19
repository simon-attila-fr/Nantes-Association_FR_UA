import { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/users/register`,
        { email, password },
        { withCredentials: true }
      )
      .then((response) => console.log(response.data));
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("Vous n'êtes pas connecté");
        }
        if (err.response.status === 403) {
          alert("Vous n'êtes pas autorisé");
        }
        console.error(err);
      });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Créer un administrateur" />
      </form>

      <p>Users List</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>Email: {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
