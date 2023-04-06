import logo from "./logo.svg";
import "./App.css";
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    try {
      const res = await api.get("/api/v1/movies");
      setMovies(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div className="App"></div>;
}

export default App;
