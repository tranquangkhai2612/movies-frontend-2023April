import axios from "axios";

export default axios.create({
  baseURL: `../../movies.json`,
  // http://localhost:8080/api/v1/movies
  //   headers: { "ngrok-skip-browser-warning": "true" },
});
