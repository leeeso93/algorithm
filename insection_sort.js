// 삽입 정렬 (insertion sort)
// 처리되지 않은 데이터를 하나씩 골라 적절한 위치에 삽입
// 선택 정렬보다 난이도가 높지만 효율적임

let arr = [7,5,9,0,3,1,6,2,4,8];
let n = arr.length;

for(let i = 1; i < n; i++){
    // 인덱스 i 부터 1까지 감소하며 반복하는 문법
    for(let j = i ; j > 0; j--){
        // 한 칸씩 왼쪽으로 이동
        if(arr[j] < arr[j - 1]) {
            // 스와프
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }else{
            //자기보다 작은 데이터를 만나면 그 위치에서 멈춘다.
            break;
        }


    }
}

// 출력
for(let i = 0; i< n; i++){
    console.log(arr[i] + " ");
}