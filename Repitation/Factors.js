let readline = require('readline');


let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


read.question("Enter value of N for factors : ",function(input){
	console.log("Prime Factors");
       
        for (var index = 2; index * index <= input; index++) {
            while (input % index == 0) {
                console.log(index,' ');
                input = input / index;
            }
        }
        if (input > 1)
            console.log(input);
    read.close();
});