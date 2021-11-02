let readline=require('readline');

let digit=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

digit.question('enter the number : ',function(number){
   
    let numbers=parseInt(number);
    if(numbers ==1 )
        console.log('One');
    else if(numbers == 2)      
        console.log('Two');
    else if(numbers == 3)
        console.log('Three');    
    else if(numbers == 4)
        console.log('Four');
    else if(numbers == 5)
        console.log('Five');
    else if(numbers == 6)
        console.log('Six');
    else if(numbers == 7)
        console.log('Seven');
    else if(numbers == 8)
        console.log('Eight');
    else if(numbers == 9)
        console.log('Nine');         
    else
        console.log('Enter single digit number');
    
    digit.close();
});