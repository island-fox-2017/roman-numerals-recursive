'use strict'

function to_roman(input) {
  let num = input;
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let arab = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1  ];

  for (var i = 0; i <= arab.length - 1; i++) {
    if (num === 0) {
      return '';
    } else if (num >= arab[i]) {
      return roman[i] + to_roman(num - arab[i]);
    }
  }
} // ----- to_roman

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
