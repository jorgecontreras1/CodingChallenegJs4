const array = [1.5, 3, 2.5, 1];
const nums = (x, y) => x + y;

function arrayAverage(x){
    const average = x.reduce(nums)/ x.length
    return average
}
console.log(arrayAverage(Array))