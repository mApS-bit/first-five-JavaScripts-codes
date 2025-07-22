function palindrome(str) {
  let newArr = [...str.toLowerCase()].filter(a => a.match(/[a-z]|\d/));
  return newArr.filter((a,i, arr) => arr[i] === arr[(arr.length - 1)-i] ).length == newArr.length ? true : false;
}

console.log(palindrome("five|\_/|four"));