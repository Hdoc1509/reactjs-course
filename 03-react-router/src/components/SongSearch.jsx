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
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import Error404 from "../pages/Error404";
import SongTable from "./SongTable";
import SongPage from "../pages/SongPage";

const initialMySongs = JSON.parse(localStorage.getItem("mySongs")) ?? [];

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [biography, setBiography] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(initialMySongs);

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

    localStorage.setItem("mySongs", JSON.stringify(mySongs));
  }, [search, mySongs]);

  const handleSearch = (data) => {
    //console.log(data);

    setSearch(data);
  };

  const handleSaveSong = () => {
    alert("Guardando canción en Favoritos");
    const currentSong = {
      search,
      lyric,
      biography,
    };

    const songs = [...mySongs, currentSong];
    setMySongs(songs);
    setSearch(null);
    localStorage.setItem("mySongs", JSON.stringify(songs));
  };

  const handleDeleteSong = (id) => {
    //alert(`Eliminando canción con el id: ${id}`);
    const isDelete = window.confirm(
      `¿Estás seguro de eliminar la canción con el id ${id}?`
    );

    if (isDelete) {
      const songs = mySongs.filter((_, index) => index !== id);

      setMySongs(songs);
      localStorage.setItem("mySongs", JSON.stringify(songs));
    }
  };

  return (
    <div>
      <HashRouter basename="canciones">
        <header>
          <h2>Song Search</h2>
          <Link to="/">Home</Link>
        </header>
        {loading && <Loader />}
        <article className="grid-1-2">
          <Switch>
            <Route exact path="/">
              <SongForm
                handleSearch={handleSearch}
                handleSaveSong={handleSaveSong}
              />
              <SongTable
                mySongs={mySongs}
                handleDeleteSong={handleDeleteSong}
              />
              {search !== null && !loading && (
                <SongDetails
                  search={search}
                  lyric={lyric}
                  biography={biography}
                />
              )}
            </Route>
            <Route exact path="/:id">
              <SongPage mySongs={mySongs} />
            </Route>
            <Route path="*" component={Error404} />
          </Switch>
        </article>
      </HashRouter>
    </div>
  );
};

export default SongSearch;
