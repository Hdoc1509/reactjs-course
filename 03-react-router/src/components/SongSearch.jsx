import { useState, useEffect } from "react";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import Error404 from "../pages/Error404";
import SongTable from "./SongTable";
import SongPage from "../pages/SongPage";
import { getArtistInfo } from "../services/artists";
import { getSongLyrics } from "../services/lyrics";

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

      setLoading(true);

      const [artistRes, lyricsRes] = await Promise.all([
        getArtistInfo(artist),
        getSongLyrics({ artist, song }),
      ]);

      //console.log({ artistRes, lyricsRes });

      setBiography(artistRes);
      setLyric(lyricsRes);
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
