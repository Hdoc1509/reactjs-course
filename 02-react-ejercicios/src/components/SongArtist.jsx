import React from "react";
import { titleCaseAll } from "../utils/titleCase";

const SongArtist = ({ artist }) => {
  return (
    <section>
      <h3>{artist.name}</h3>
      <img src={artist.image[0].url} alt={artist.name} />
      <p>{titleCaseAll(artist.genres.join(" - "))}</p>
      <p dangerouslySetInnerHTML={{__html: artist.bio.content}} />
    </section>
  );
};

export default SongArtist;
