let readline=require('readline');

let digit=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

digit.question('enter the number : ',function(number){
    
    let numbers=parseInt(number);
    if(numbers == 1 )
        console.log('Unit');
    else if(numbers == 10 )    
        console.log('Ten');
    else if(numbers == 100 )    
        console.log('Hundred');
    else if(numbers == 1000 )    
        console.log('Thousand');
    else if(numbers == 10000 )    
        console.log('Ten Thousand');
    else if(numbers == 100000 )    
        console.log('One Lakh');
    else if(numbers == 1000000 )    
        console.log('Ten Lakh');
    else if(numbers == 10000000 )    
        console.log('One Crore');
    else if(numbers == 100000000 )    
        console.log('Ten Crore');
    else{
        if(numbers>100000000) 
            console.log('above Ten crores');
        else 
            console.log('Enter proper number');
}
    digit.close();
});
