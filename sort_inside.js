// https://www.acmicpc.net/problem/1427

let fs = require('fs');
let input = fs.readFileSync('text.txt').toString().split('');

// 선택 정렬? 
let arr = input.map(Number);
for (let i = 0; i < input.length; i++) {
      let indexOfMax = i;
    
      for (let j = i + 1; j < input.length; j++) {
        if (input[indexOfMax] < input[j]) {
          indexOfMax = j;
        }
      }
    
      if (indexOfMax !== i) {
        const maxier = input[indexOfMax];
        input[indexOfMax] = input[i];
        input[i] = maxier;
      }
    }
    
    console.log(input.join(''));