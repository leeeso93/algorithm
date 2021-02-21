// https://www.acmicpc.net/problem/1065

let fs = require('fs');
let n = Number(fs.readFileSync('text.txt').toString());
let cnt = 0

if(n <  100){  // 100미만은 모두 등차수열
    cnt = n
   
}else if(n <= 1000){
    cnt = 99;
    for(let i = 100; i<=n; i++){
        let numArr = i.toString().split('').map(Number)
      if(numArr[2] - numArr[1] === numArr[1] - numArr[0]){
          cnt++;
      }
    }
 }else { /// 1000은 한수가 아님 
     return;
 }

console.log(cnt)
