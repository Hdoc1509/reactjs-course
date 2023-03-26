export const capitalize = (word) =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

export const capitalizeAll = (string) =>
  string.split(" ").map(capitalize).join(" ");

