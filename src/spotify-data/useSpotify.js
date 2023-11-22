import React, { useEffect } from "react";

const useSpotify = () => {
  const CLIENT_ID = "eaa5a5c8fb624e1b97f1f8feaac805f5";
  const CLIENT_SECRET = "63462a7a91b949838d5cef7db51b3619";
  const AUTH_ENDPOINT = "https://api.spotify.com/v1/artists/{id}";

  const [token, setToken] = useState("");
  let tanrandom;

  //obteniendo token de acceso
  useEffect(() => {
    var authParameters = {
      method: "POST     ",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setToken(data.access_token));
  }, []);

  const getEpisodes = () => {
    fetch("https://api.spotify.com/v1/artists/{id}").then((response) => {
      tanrandom = data.json;
    });
  };

  return {};
};

export { useSpotify };
