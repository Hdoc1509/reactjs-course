import { capitalizeAll } from "../utils/capitalize";

const SongArtist = ({ artist }) => {
  return (
    <section>
      <h3>{artist.name}</h3>
      <img src={artist.image[0].url} alt={artist.name} />
      <p>{capitalizeAll(artist.genres.join(" - "))}</p>
      <p
        dangerouslySetInnerHTML={{ __html: artist.bio.content }}
        style={{ whiteSpace: "pre-wrap" }}
      />
    </section>
  );
};

export default SongArtist;
