let numbers = [3, 2, 5, 8, 6, 9, 7, 1, 4, 15, 19, 20, 17, 11, 18, 12, 16, 13, 10, 14]

for(let i=0; i<20; i++){
    for(let j=i+1; j<=20; j++){
        if(numbers[i] > numbers[j]){
            let temp = numbers[i]
            numbers[i] = numbers[j]
            numbers[j] = temp
        }
    }
}

console.log(numbers)