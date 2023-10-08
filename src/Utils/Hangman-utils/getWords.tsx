import diacritics from "diacritics";

export const getRandom = <T,>(array: T[]): T => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const getNormalizedWord = (string: string) =>
  diacritics.remove(string).toUpperCase();

export const getHiddenWord = (string: string) =>
  diacritics
    .remove(string)
    .toUpperCase()
    .split("")
    .map(() => "_");
