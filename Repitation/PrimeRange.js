let readline =require('readline');
let prime=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
 
prime.question(' Enter the number limit  to find prime range',function(primeNumber){
let limit = parseInt(primeNumber);
showPrime(limit);
function showPrime(limit)
{
    for(let number = 2;number <= limit ; number++)
    {
        if(isPrime(number))
        {
            console.log(number);
        }
    }
}

function isPrime(number)
{
    for (let factor = 2; factor < number; factor++)
    {
        if(number % factor == 0)
        {
            return false;
        }
        return true;
    }
}

prime.close();
});