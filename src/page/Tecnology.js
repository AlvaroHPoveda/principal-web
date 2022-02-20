import React from "react";
import { Link } from "react-router-dom";
import { getAllUsers } from "../utils/users";

const Tecnology = () => {
  const users = getAllUsers();
  console.log(users)
  return (
    <div>
      <h1>Tecnologia</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>
              <Link to={"/tecnology/" + user.id}>{user.name}</Link>
            </h2>
          </li>
        ))}
      </ul>      
    </div>
  );
};

export default Tecnology;
