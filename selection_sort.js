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

for(let  i =0; i< n; i++){
    console.log(arr[i] + " ");
}