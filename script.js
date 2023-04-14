// complete the given function

function palindrome(str){
  str = str.split(" ").join("");
  str = str.toLowerCase();
  let start = 0,
    end = str.length - 1,
    flag = 0;
  while (start < end) {
    if (str.charAt(start++) != str.charAt(end--)) {
      flag = 1;
      break;
    }
  }
  if (flag == 0) {
    return true;
  } else return false;
}
module.exports = palindrome
