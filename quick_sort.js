// 퀵 정렬(quick sort)
// 기준 데이터를 설정하고 그 기준보다 큰 데이터와 작은 데이터의 위치를 바꿈
// 가장 기본적인 퀵 정렬은 첫 번째 데이터를 기준 데이터(pivot)으로 설정한다.

let arr = [7,5,9,0,3,1,6,2,4,8];
let n = arr.length;

function quickSort(arr, start, end){
    if(start >= end) return; //원소가 1개 이하인 경우 종료
    let  pivot = start; // 피벗은 첫 번째 요소 
    let left = start + 1; // 왼쪽 피벗을 제외한 왼쪽 요소
    let right = end; // 오른쪽 = arr의 끝부터 

    // 반복문
    while(left <= right){

        // 분할중 
        // 왼쪽은 피벗보다 큰 데이터를 찾을 때까지 반복
        while(left <= end && arr[left] <= arr[pivot]) {
            left++;
        }
        
        // 오른쪽 피벗보다 작은 데이터를 찾을 때까지 반복
        while(right > start && arr[right] >= arr[pivot]) {
            right--;
        }

        // 엇갈렸다면 작은 데이터와 피벗을 교체
        if(left > right){
            let temp = arr[pivot];
            arr[pivot] = arr[right];
            arr[right] = temp;
        }else{ //  엇길리지 않았다면 작은 데이터(오른쪽) 와 큰 데이터(왼쪽)을 교체
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp; 
         
        }
    }

    // 분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬을 수행하는 재귀를 호출
    quickSort(arr,start,right - 1);
    quickSort(arr,right + 1, end);
    return arr;
};

console.log(quickSort(arr,0, n-1));