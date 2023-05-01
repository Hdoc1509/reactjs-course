import { LASTFM_API_KEY, LASTFM_API_URL, SPOTIFY_API_URL } from "../config";
import { helpHttp } from "../helpers/helpHttp";

export const getArtistInfo = async (artist) => {
  const artistParams = new URLSearchParams({
    method: "artist.getInfo",
    artist,
    api_key: LASTFM_API_KEY,
    format: "json",
  });
  const artistSpotifyParams = new URLSearchParams({
    q: artist,
    type: "artist",
    limit: 1,
  });

  const artistUrl = `${LASTFM_API_URL}/?${artistParams.toString()}`;
  const artistSpotifyUrl = `${SPOTIFY_API_URL}/search?${artistSpotifyParams.toString()}`;

  const [artistRes, artistSpotifyRes] = await Promise.all([
    helpHttp().get(artistUrl),
    helpHttp().get(artistSpotifyUrl, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("spotify-token")}`,
      },
    }),
  ]);

  if (artistRes.artist !== undefined && artistSpotifyRes.err === undefined) {
    const { images, genres } = artistSpotifyRes.artists.items[0];

    artistRes.artist.image = images;
    artistRes.artist.genres = genres;
  }

  return artistRes;
};
