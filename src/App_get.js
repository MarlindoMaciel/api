import React, { useEffect, useState } from "react";
import api from "./services/api";

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/users/romulo27")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      <p>xUsuário: {user?.login}</p>
      <p>xBiografia: {user?.bio}</p>
    </div>
  );
}