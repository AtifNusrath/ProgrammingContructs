let readline =require('readline');
let harmonic=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

harmonic.question(' Enter the number to nth hormonic number : ',function(number){
let value1=parseInt(number);
sum=1;
for(let i=0;i<=value1;i++){
    sum+=1/sum++;
}
console.log('value is : ',sum);
harmonic.close();
});
