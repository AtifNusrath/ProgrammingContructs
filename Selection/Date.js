var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Enter a Month: ', function (months) {
    rl.question('Enter a date: ', function (dates) {
        const month = parseInt(months);
        const day = parseInt(dates);

        if(month < 3 || month > 6 || day >31 || day < 1)
        {
        console.log("Invalid Values");
        }
        else
        {
        if((month >=3) && (month <=6))
        {
        
        if((month == 3) && (day <=20))
        {
        console.log("valid Date and Month");
        }
        
        else if ((month ==6)&&(day<=20))
        {
        console.log("Valid Date");
        }
        else if (month ==4 && day <=30 || month == 5 && day <=31)
        {
        console.log("Valid date");
        }
        
        }
        }

        rl.close();
    });
});