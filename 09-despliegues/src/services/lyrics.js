import { SOMERANDOMAPI_URL } from "../config";
import { helpHttp } from "../helpers/helpHttp";

export const getSongLyrics = async ({ artist, song }) => {
  const songParams = new URLSearchParams({ title: `${song}-${artist}` });

  const songUrl = `${SOMERANDOMAPI_URL}/lyrics?${songParams.toString()}`;

  const songRes = await helpHttp().get(songUrl);

  return songRes;
};
