import React from "react";
import ReactDOM from "react-dom/client";
import { SPOTIFY_API_FREE_TOKEN_CORS_URL } from "./api/urls";
import App from "./App";
import { helpHttp } from "./helpers/helpHttp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

helpHttp()
  .get(SPOTIFY_API_FREE_TOKEN_CORS_URL)
  .then((tokenData) => {
    //console.log(tokenData)
    sessionStorage.setItem("spotify-token", tokenData.accessToken);
  });
