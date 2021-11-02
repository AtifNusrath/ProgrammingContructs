let readline=require('readline');

let digit=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

digit.question('enter the number : ',function(number){
    let word;
    let numbers=parseInt(number);
    switch(numbers){
        case 1:
            word='Unit';
            break;
        case 10:
            word='Ten';
            break;
        case 100:
            word='Hundred';
            break;
        case 1000:
            word='Thousand';
            break;
        case 10000:
            word='Ten Thousand';
            break;
        case 100000:
            word='One Lakh';
            break;
        case 1000000:
            word='Ten Lakh';
            break;
        case 100000000:
            word='One Crore';
            break;
        case 100000000:
            word='Ten Crore';
            break;
        default:
            if(numbers>100000000) word='above Ten crores';
            else word='Enter proper number';
    }    
    console.log(word);
    digit.close();
});
