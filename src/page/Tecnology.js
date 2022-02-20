import React from "react";
import { Link } from "react-router-dom";
import { getAllUsers } from "../utils/users";
import "../styles/tecnology.css"

const Tecnology = () => {
  const users = getAllUsers();
  return (
    <main>
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
    </main>
  );
};

export default Tecnology;
