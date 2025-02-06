import NavBar from "./components/NavBar";
import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";

function App() {
  const[users, setUsers] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch(error => console.error(error))
  },[])
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <Outlet context={users}/>
    </>
  );
};

export default App;
