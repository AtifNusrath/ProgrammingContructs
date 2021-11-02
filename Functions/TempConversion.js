let readline=require('readline');

let temperatureConversion=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

temperatureConversion.question('Enter 0 => celsius and 1 => farenheit heat ',function(input){
    temperatureConversion.question('Enter the value to convert ',function(temp){
        let conversion=0;
        let value=parseInt(input);
        let temperature=parseInt(temp);
            switch(value){
                case 1:
                    conversion=(temperature*9/5)+32;
                    console.log(temperature,'celsius : ',conversion,"farenheit heat ");
                    break;
                case 0:
                    conversion=(temperature-32)*5/9;
                    console.log(temperature,'farenheit heat : ',conversion,"celsius ");
                    break;
                default:
                    console.log('enter proper value');
                    temperatureConversion.close();
            }
            temperatureConversion.close();
    })
})
