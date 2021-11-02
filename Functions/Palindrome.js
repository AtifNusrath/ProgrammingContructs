let readline=require('readline');

let palindrome=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function palindromeCheck(number){
    let temp=number; 
    let sum=0;
    while(number>0){    
        let r=Math.round(number%10);
        sum=(sum*10)+r;    
        number=Math.round(number/10);   
       }    
       if(temp==sum)    
        console.log("palindrome number ");    
       else    
        console.log("not palindrome"); 
}

palindrome.question('enter number to check palindrome ',function(num){
    let number=parseInt(num);
      
    palindromeCheck(number);   
    palindrome.close();
})