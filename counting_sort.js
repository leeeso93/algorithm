// 계수 정렬(Counting Sort)
// 특정한 조건이 부합할 때만 사용할 수 있지만 매우 빠르게 동작하는 정렬 알고리즘
// 계수 정렬은 데이터의 크기 범위가 제한되어 있어 정수 형태로 표현할 수 있을 때 사용가능하다.
// 데이터의 개수가 N, 데이터의 최댓값(양수)가 K일때 최악의 경우에도 수행시간 O(N + K) 를 보장한다.


let arr = [7,5,9,0,3,1,6,2,4,8];
let n = arr.length;

// 배열의 최댓값 구하기
let max = arr.reduce((acc, current) =>{ 
    return acc > current ? acc:current;
});

// 최댓값 +1 만큼(index가 0부터 9까지이므로) counting 할 배열을 생성
let cntList = new Array(max + 1).fill(0);

// 각 데이터에 해당하는 인덱스의 값이 증가한다.
for(let i =0; i< n; i++){
    cntList[arr[i]] += 1 
}

// 배열에 기록된 정렬 정보 확인
for(let i = 0; i<=max; i++){
    for(j = 0; j < cntList[i]; j++){
        console.log(i + " "); // 띄어쓰기를 기준으로 등장한 횟수만큼 인덱스 출력
    }
}