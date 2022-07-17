import axios from "axios";
import React, { useState, useEffect } from "react";
import MemberForm from "../components/Form/MemberForm";
import TableMembers from "../components/TableMembers";

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
      <div>
        <MemberForm />
      </div>
      <div>
        <h1> Tous les membres</h1>
        <TableMembers data={members} />
      </div>
    </div>
  );
}
