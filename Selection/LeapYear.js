var readline=require('readline');
var checkLeapYear=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

checkLeapYear.question('Enter the year: ',function(year){
      const checkYear=parseInt(year);
      console.log("Enter year is ",checkYear);
      
      if(year<1000 || year>9999){
        console.log('Wrong input ensure its a 4 digit number');
    }else{
        if(((year % 4 ==0) && (year % 100 !=0)) || (year % 400==0)){
        console.log(year ," Leap year");      
     } else {
        console.log(year ," Not Leap year");   
     }  
    }       
      checkLeapYear.close();
    });