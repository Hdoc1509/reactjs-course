import React from "react";
import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, lyric, biography }) => {
  if (lyric === null || biography === null) return;

  return (
    <>
      {lyric.error || lyric.err == true || lyric.name === "AbortError" ? (
        <Message
          message={`Error: no existe la canción "<em>${search.song}</em>"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={lyric.title} lyrics={lyric.lyrics} />
      )}
      {biography.artist ? (
        <SongArtist artist={biography.artist} />
      ) : (
        <Message
          message={`Error: no existe el artista "<em>${search.artist}</em>"`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
