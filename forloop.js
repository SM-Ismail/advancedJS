const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const sqnumbers = [];
for (let i = 0; i < numbers.length; i++){
    const elements = numbers[i];
    const result = elements * elements;
    sqnumbers.push(result); 
}
console.log(sqnumbers);
//using map to write for loop smartly
 