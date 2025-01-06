let numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let largest_number = numbers[0];

for(let i=0; i<numbers.length; i++){
    if(largest_number < numbers[i]){
        largest_number = numbers[i];
    }
}

console.log(largest_number);