import React from "react";
import ReactDOM from "react-dom";
import { SPOTIFY_API_FREE_TOKEN_CORS_URL } from "./api/urls";
import App from "./App";
import { helpHttp } from "./helpers/helpHttp";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

helpHttp()
  .get(SPOTIFY_API_FREE_TOKEN_CORS_URL)
  .then((tokenData) => {
    //console.log(tokenData)
    sessionStorage.setItem("spotify-token", tokenData.accessToken);
  });

