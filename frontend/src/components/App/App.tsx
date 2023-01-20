import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import "./App.css";
import { createUser, getAllUsers, removeUser } from "../../utils/api";
import { IUser } from "../../types/user";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    (async function () {
      const res = await getAllUsers();
      setUsers(res);
    })();
  }, []);

  const handleClickRemove = async (id: number) => {
    const res = await removeUser(id);
    setUsers(res);
  };

  const handleClickCreate = async () => {
    const res = await createUser();
    setUsers(res);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClickCreate}>Add Bot</button>
        <ul>
          {users.map((user, i) => (
            <li key={i + user.name} className="list">
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => handleClickRemove(user.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
