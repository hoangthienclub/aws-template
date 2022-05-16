const possible = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "abcdefghijklmnopqrstuvwxyz",
  "0123456789",
  "!@#$%^&*",
];

export const code = (length: number) => {
  const strArray = new Array(length);
  const charSet = [possible[0], possible[2]].join("");
  for (let i = 0; i < strArray.length; i++) {
    strArray[i] = charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return strArray.join("");
};

export default {
  code,
};
