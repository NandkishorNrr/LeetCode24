var lengthOfLastWord = function (s) {
  s = s.trim();
  let len = 0;
  let i = s.length;
  while (i > 0 && s.charAt(i - 1) != " ") {
    len++;
    i--;
  }

  return len;
};