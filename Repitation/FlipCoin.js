
let head=0;
let tails=0;
while (head < 11 && tails < 11)
{
    let value=Math.floor(Math.random()*10)%2;
    if (value==1)
        head +=1;
    else
       tails +=1;
}
console.log('Head occurs=',head,' and Tails occurs=',tails);