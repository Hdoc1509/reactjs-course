import { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import {
  LASTFM_API_URL,
  SOMERANDOMAPI_URL,
  SPOTIFY_API_URL,
} from "../api/urls";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [biography, setBiography] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      const artistUrlParams = new URLSearchParams({
        method: "artist.getInfo",
        artist,
        api_key: import.meta.env.VITE_LASTFM_API_KEY,
        format: "json",
      });
      const songUrlParams = new URLSearchParams({
        title: `${song}-${artist}`,
      });
      const artistImageUrlParams = new URLSearchParams({
        q: artist,
        type: "artist",
        limit: 1,
      });

      const artistUrl = `${LASTFM_API_URL}/?${artistUrlParams.toString()}`;
      const songUrl = `${SOMERANDOMAPI_URL}/lyrics?${songUrlParams.toString()}`;
      const artistSpotifyUrl = `${SPOTIFY_API_URL}/search?${artistImageUrlParams.toString()}`;

      //console.log({ artistUrl, songUrl, artistSpotifyUrl });

      setLoading(true);

      const [artistRes, songRes, artistSpotifyRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
        helpHttp().get(artistSpotifyUrl, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("spotify-token")}`,
          },
        }),
      ]);

      if (
        artistRes.artist !== undefined &&
        artistSpotifyRes.err === undefined
      ) {
        const { images, genres } = artistSpotifyRes.artists.items[0];

        artistRes.artist.image = images;
        artistRes.artist.genres = genres;
      }

      //console.log({ artistRes, songRes, artistSpotifyRes });

      setBiography(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    //console.log(data);

    setSearch(data);
  };

  return (
    <div>
      <h2>Song Search</h2>
      <article className="grid-1-3">
        <SongForm handleSearch={handleSearch} />
        {loading && <Loader />}
        {search !== null && !loading && (
          <SongDetails search={search} lyric={lyric} biography={biography} />
        )}
      </article>
    </div>
  );
};

export default SongSearch;
