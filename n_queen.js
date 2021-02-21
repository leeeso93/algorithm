// https://www.acmicpc.net/problem/9663

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let n = Number(input[0]);
let cnt = 0;
let isused1 = new Array(n).fill(false); // row
// 대각선의 개수 2n - 1 
let max = n*n-1;
let isused2 = new Array(max).fill(false); // ▧ \ 대각선 x- y
let isused3 = new Array(max).fill(false); // ▨ / 대각선 x +y

// https://gamedevlog.tistory.com/56

function nQueen(r){
    // r = : 행 번호이자, 현재 놓은 퀸의 개수를 의미한다. 
    //  i =  열을 의미한다.

    // 퀸을 모두 배치한 경우의 수 
    if(r === n){
        cnt++;
        return 
    }

    for(let i =0;i<n;i++){
			/*
					r행 i열에 놓을 수 있는지 검사.
						1. i열에 퀸이 놓여져 있는지 확인
						2. 양쪽 대각선에 퀸이 놓여져 있는지 확인
					*/
        if(!isused1[i] && !isused2[r-i + n-1] && !isused3[r + i]){
            
						// 퀸을 놓을 경우, 행, 열, 대각선 체크를 한다.
            isused1[i] = true;
            isused2[r-i + n-1] = true;
            isused3[r + i] = true;

						// r행 c열에 퀸을 놓았으므로, r+1행에 대해서 다시 조사한다.
            nQueen(r +1);

					  // 현재 열(i)에 퀸을 놓지 않을 경우에 대해 생각한다. (이전 상태로 되돌림)
            isused1[i] = false;
            isused2[r-i + n-1] = false;
            isused3[r + i] = false;
        }
    }
    
   
}

nQueen(0);
console.log(cnt)