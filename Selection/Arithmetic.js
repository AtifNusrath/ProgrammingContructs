let readline=require('readline');

let arithmetics=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let minimumResult,maximumResult;

arithmetics.question('enter the first value: ',function(firstValue){
arithmetics.question('enter the second value: ',function(secondValue){
arithmetics.question('enter the third value: ',function(thirdValue){
    let value1=parseInt(firstValue);
    let value2=parseInt(secondValue);
    let value3=parseInt(thirdValue);
    
    let first=value1+value2*value3;
    let second=value1%value2+value3;
    let third=value3+value1/value2;
    let fourth=value1*value2+value3
    console.log("Result 1 = ",first);
    console.log("Result 2 = ",second);
    console.log("Result 3 = ",third);
    console.log("Result 4 = ",fourth);
    if (first < second && first < third && first < fourth) {
        minimumResult = first;
    } else if (second < first && second < third && second < fourth) {
        minimumResult = second;
    } else if (third < first && third < second && third < fourth) {
        minimumResult = third;
    } else {
        minimumResult = fourth;
    }
    
    if (first > third && first > fourth && first > second) {
        maximumResult = first;
    } else if (second > third && second > fourth && second > first) {
        maximumResult = second;
    } else if (third > first && third > second && third > fourth) {
        maximumResult = third;
    } else {
        maximumResult = fourth;
    }
    
    console.log("Maximum = " + maximumResult);
    console.log("minimum = " + minimumResult);
    
    arithmetics.close();
});
});
});