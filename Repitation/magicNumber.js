let readline=require('readline');

let palindrome=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

palindrome.question('enter number to check palindrome ',function(num){
    let number=parseInt(num);
        let index=0;
        let temp=number; let r=0;let sum=0;
    const getPalindrome=()=>{
        while(number>0){    
            r=Math.floor(number%10);
            sum=(sum*10)+r;
            number=Math.floor(number/10);
        }      
        return sum;
    }
const getPrime=()=>{
        let primeCheck=parseInt(num);
        let count =1;
        while(count<primeCheck/2){
            if(primeCheck%count==0){
                index++;
            }
            count++;
        }
        return index;
    }
    let result;
    result=getPrime();
    let result2=getPalindrome();
    result=(index<2)?' a ':' not a';
    result2=(temp==sum)?' a ':' not a ';

    console.log('given number is ',result,' primenumber',' and ',result2,' palindrome number');

    palindrome.close();
})