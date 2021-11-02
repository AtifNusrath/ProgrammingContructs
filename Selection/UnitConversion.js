let readline=require('readline');
let unitConversion=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

unitConversion.question('\n1.Feet to Inch\n 2.Feet to Meter\n 3.Inch to Feet \n 4.Meter to Feet\n enter the number : ',function(number){
    unitConversion.question('enter the value to convert: ',function(val){
    let numbers=parseInt(number);
    let value=parseInt(val);
switch(numbers){
    case 1:
            console.log(val,' feet is equal to : ',value*12, ' inches');           
            break;
     case 2:   
            console.log(val,' feet is equal to : ',value*0.305, ' meters');
            break;
    case 3:
            console.log(val,' inch is equal to : ',value*0.0833, ' feets');
            break;
    case 4:
            console.log(val,' meters is equal to : ',value*3*3.37*0.305, ' feets');
            break;
    default:
        console.log('Enter valid choice');
        unitConversion.close();
    }
                
    unitConversion.close();
});
});