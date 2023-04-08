import { useHistory } from "react-router-dom";

const SongTableRow = ({ id, el, handleDeleteSong }) => {
  const { lyric, biography } = el;
  const { title, author } = lyric;
  const avatar = biography.artist.image[0].url;
  const avatarStyle = {
    width: "auto",
    height: "40px",
  };
  //console.log(el);

  const history = useHistory();

  return (
    <tr>
      <td>
        <img style={avatarStyle} src={avatar} alt={author} />
      </td>
      <td>{author}</td>
      <td>{title}</td>
      <td>
        <button onClick={() => history.push(`/${id}`)}>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default SongTableRow;
