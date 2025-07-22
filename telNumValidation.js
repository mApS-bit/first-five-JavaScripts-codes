
//Solution for Telephone Number Validator
//JS

function telephoneCheck(str) {
  const regEx = /^1? ?(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
  return regEx.test(str);
}

const result = telephoneCheck("555-555-5555");
console.log(result);
