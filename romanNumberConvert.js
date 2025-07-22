
//Solution for Roman Numeral Converter


function convertToRoman(num) {
 const Numbers = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  };
 //función qué obtiene vectores (digitos, cunatas ordenes de mag., ordenes de magnitud)
 function digits(number){
   let arr = number.toString().split('');
   return arr.map((digit,i) => [parseInt(digit),parseInt(digit)*Math.pow(10,(arr.length-1)-i),
   Math.pow(10,(arr.length-1)-i)]);
 }; 
//función que escribe por orden de magnitud
 function writeNumPart(myVec){
   if(Numbers.hasOwnProperty(myVec[1])){
     return Numbers[myVec[1]];
   }else if(myVec[0] < 5){
     return myVec[0] == 0 ? '' : myVec[0] == 2 ? Numbers[myVec[2]] + Numbers[myVec[2]] : 
     Numbers[myVec[2]]+Numbers[myVec[2]]+Numbers[myVec[2]];
   }else{
     return Numbers[5*(myVec[2])] + (myVec[0]-5 == 1 ? Numbers[myVec[2]]:
     myVec[0]-5 == 2 ? Numbers[myVec[2]]+Numbers[myVec[2]]:
     Numbers[myVec[2]]+Numbers[myVec[2]]+Numbers[myVec[2]]);
   }
 };

//retorno
let toRomaNum = digits(num); 
return toRomaNum.map(a => writeNumPart(a)).join('');
}

console.log(convertToRoman(3999));

