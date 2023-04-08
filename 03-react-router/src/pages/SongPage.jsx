import { useParams } from "react-router-dom";
import SongDetails from "../components/SongDetails";

const SongPage = ({ mySongs }) => {
  const { id } = useParams();
  //console.log(id, mySongs, mySongs[id]);

  const currentSong = mySongs[id];
  const { search, lyric, biography } = currentSong;

  return <SongDetails search={search} lyric={lyric} biography={biography} />;
};

export default SongPage;
