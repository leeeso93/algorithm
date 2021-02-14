// 선택 정렬 (selection sort)
// 처리되지 않은 데이터 중에서 가장 작은 데이터를 선택해 맨 앞의 데이터와 바꾸는 것을 반복하는것 
let arr = [7,5,9,0,3,1,6,2,4,8];
let n = arr.length;

for(let i = 0; i< n; i++){
    let min_index = i; // 가장 작은 원소의 인덱스
    
    for(let j = i  +1; j< n; j++){
        if(arr[min_index] > arr[j]){
            min_index = j;
        }
    }

    // 스와프(자리 바꾸기)
    let temp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = temp;
}

// 출력
for(let  i =0; i< n; i++){
    console.log(arr[i] + " ");
}