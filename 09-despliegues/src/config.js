export const LASTFM_API_KEY = import.meta.env.VITE_LASTFM_API_KEY;

const CORS_ANYWHERE_URL = "https://cors-anywhere.herokuapp.com/";

export const LASTFM_API_URL = "http://ws.audioscrobbler.com/2.0";

export const SOMERANDOMAPI_URL = "https://some-random-api.ml";

export const SPOTIFY_API_URL = "https://api.spotify.com/v1";
export const SPOTIFY_API_FREE_TOKEN_URL =
  "https://open.spotify.com/get_access_token";
export const SPOTIFY_API_FREE_TOKEN_CORS_URL = `${CORS_ANYWHERE_URL}${SPOTIFY_API_FREE_TOKEN_URL}`;
