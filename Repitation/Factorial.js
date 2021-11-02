let readline =require('readline');
let factnumber=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

factnumber.question(' Enter the to find factorial of a number ',function(factorial){
let fact=parseInt(factorial);
    
    let factSum=1;
        for(let i=1; i<=fact; i++){
            factSum=factSum*i;
        }
    
    console.log('Factorial of ',fact,' is ',factSum);
    factnumber.close();
});