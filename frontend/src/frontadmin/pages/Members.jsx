import axios from "axios";
import React, { useState, useEffect } from "react";
import TableMembers from "../components/TableMembers";
import "../../assets/styles/members.css";

export default function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/member")
      .then((res) => setMembers(res.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="divtable">
        <h1> Tous les membres </h1>
        <TableMembers data={members} />
      </div>
    </div>
  );
}
