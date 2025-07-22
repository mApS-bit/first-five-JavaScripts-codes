function rot13(str) {
  const letras = " ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const totalLetras = letras.length;
  return str.split('').map(letter => 
  /[^A-Z]/.test(letter) ? letter :
   letras[letras.indexOf(letter)+13]).join('');  
  
}

console.log(rot13("SERR PBQR PNZC"));