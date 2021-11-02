let readline =require('readline');
let prime=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
 
prime.question(' Enter the number to find prime or not ',function(primeNumber){

let primeCheck=parseInt(primeNumber);
var data = false;
for (let i=2; i< primeCheck/2; i++){
   if(primeCheck%i==0){
    data = true;
    break;    
    }  
}
if(!data)
    console.log('Prime number');
else
    console.log('Not prime number');
prime.close();
});