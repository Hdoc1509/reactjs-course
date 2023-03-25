export const titleCase = (word) =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

export const titleCaseAll = (string) =>
  string.split(" ").map(titleCase).join(" ");

