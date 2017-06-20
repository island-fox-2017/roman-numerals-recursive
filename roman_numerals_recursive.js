function to_roman(input) {
  // start your code here
  let arabicNum = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let romanNum = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

  let converted = '';
  
  if (input === 0) {
    return converted
  }

  for (let i = arabicNum.length - 1; i >= 0; i--) {
    if (input >= arabicNum[i]) {
      converted+=romanNum[i];
      input -= arabicNum[i];
      return converted + to_roman(input);
    } 
  }
  
}

// console.log(to_roman(44));


console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
console.log('1646  | MCC      | ', to_roman(1200))