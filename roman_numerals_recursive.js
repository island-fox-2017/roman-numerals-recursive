//Rekursi

function to_roman(input) {
  var num = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  var roman  = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var resul = '';

  if (input == 0) {
    return ''
  }
  else {
    for (var i = 0; i < roman.length; i++) {
      if (input >= roman[i]) {
        return num[i] + to_roman(input - roman[i])
      }
  }
}
}

console.log('My totally sweet testing script\n');
console.log('Input    | expected    | actual');
console.log('---------|-------------|-------');
console.log('4        | IV          | ', to_roman(4));
console.log('9        | IX          | ', to_roman(9));
console.log('13       | XIII        | ', to_roman(13));
console.log('1453     | MCDLIII     | ', to_roman(1453));
console.log('1646     | MDCXLVI     | ', to_roman(1646));
