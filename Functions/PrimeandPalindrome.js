let readline=require('readline');

let palindrome=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
       
    const getPalindrome=(number)=>{
        let temp=number; 
        let r=0;
        let sum=0;
        while(number>0){    
            r=Math.floor(number%10);
            sum=(sum*10)+r;
            number=Math.floor(number/10);
        } 
         
        
        if(temp==sum)
            console.log('Palindrome number\n');
        else
            console.log(sum, 'not a Palindrome number\n');

        console.log('And also Palindrome number is ',sum);
        getPrime(sum);

    }
    const getPrime=(number)=>{
        let primeCheck=number;
        var data = false;
        for (let i=2; i< primeCheck/2; i++){
            if(primeCheck%i==0){
                data = true;
                break;    
            }  
        }
         if(!data)
             console.log(number,' Prime number\n');
         else
             console.log(number,' Not prime number\n');
    }
    palindrome.question('enter number to check palindrome ',function(num){
        let number=parseInt(num);
    getPrime(number);
    getPalindrome(number);
    
    palindrome.close();
})