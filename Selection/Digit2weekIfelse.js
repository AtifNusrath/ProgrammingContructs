let readline=require('readline');

let digit=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

digit.question('enter the number : ',function(number){
    
    let numbers=parseInt(number);
    if(numbers ==1 )
        console.log('Sunday');
    else if(numbers == 2)      
        console.log('Monday');
    else if(numbers == 3)
        console.log('Tuesday');    
    else if(numbers == 4)
        console.log('Wednesday');
    else if(numbers == 5)
        console.log('Thursday');
    else if(numbers == 6)
        console.log('Friday');
    else if(numbers == 7)
        console.log('Saturday');         
    else
        console.log('Enter proper number');
       
    digit.close();
});