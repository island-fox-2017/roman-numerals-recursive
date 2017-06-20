

function to_roman (num) {
// your implementation code here
  word = '';

  var romawi = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  var desimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

  for(i=0;i<romawi.length;i++){
    if(num >= desimal[i]){
      word += romawi[i];
      num = num - desimal[i];
    }
  }

  if(num === 0){
    return word
  }else{
    return word + to_roman(num)
  }

}


console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
