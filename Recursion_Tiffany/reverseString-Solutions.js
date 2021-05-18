// Maria -------------------
function revString(str) {
  if (str === "") {
    return "";
  }
  const restOfString = str.slice(0, str.length - 1);
  return str[str.length - 1] + revString(restOfString);
}

// Lee -------------------
function reversestring(str) {
  if (str.length === 0) {
    return str;
  }
  let newString = str.slice(str.length - 1);
  let subString = str.substr(0, str.length - 1);
  return newString + reversestring(subString);
}

// Paul -------------------
function reverseString(string) {
  if (string.length <= 1) {<
    return string;
  }
  return reverseString(string.slice(1)) + string[0];
}

// Tiffany -------------------
function reverse(str) {
  if (!str || str.length === 1) {
  return str;
  }
  const splitString = str.split(“”);
  const index = str.length - 1;
  const spliced = splitString.splice(index, 1);
  return spliced.join(“”) + reverse(splitString.join(“”);
  }
