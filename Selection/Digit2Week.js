let readline=require('readline');

let digit=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

digit.question('enter the number : ',function(number){
    let word;
    let numbers=parseInt(number);
    switch(numbers){
        case 0:
            word='Sunday';
            break;
        case 1:
            word='Monday';
            break;
        case 2:
            word='Tuesday';
            break;
        case 3:
            word='Wednesday';
            break;
        case 4:
            word='Thursday';
            break;
        case 5:
            word='Friday';
            break;
        case 6:
            word='Saturday';
            break;
        default:
            word='Enter proper number';
    }    
    console.log(word);
    digit.close();
});