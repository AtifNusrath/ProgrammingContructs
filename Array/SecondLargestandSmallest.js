let myArray = new Array();
for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 900) + 99;
    myArray.push(num);
}


function findSecondLargest() {
    let max = Math.max.apply(null, myArray);
    myArray.splice(myArray.indexOf(max), 1);
    return Math.max.apply(null, myArray);
}

console.log(myArray);

let secondLargestValue = findSecondLargest();
console.log("\nSecond Largest value : " + secondLargestValue);

function findSecondSmallest() {
    let min = Math.min.apply(null, myArray)
    myArray.splice(myArray.indexOf(min), 1);
    return Math.min.apply(null, myArray);
}

let secondSmallestValue = findSecondSmallest();
console.log("\nSecond Smallest value : " + secondSmallestValue);