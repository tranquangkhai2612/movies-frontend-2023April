import axios from "axios";

export default axios.create({
  baseURL: `http://localhost:8080`,
  // http://localhost:8080/api/v1/movies
  //   headers: { "ngrok-skip-browser-warning": "true" },
});
