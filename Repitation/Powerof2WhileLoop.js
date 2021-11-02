let readline=require('readline');

let powerOfTwo=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

powerOfTwo.question('enter the number ',function(num){
    let number=parseInt(num);
    let result=[];
    let index=0;
    const getPowers=()=>{
        while(index<number){
            result[index]=Math.pow(2,index);
            if(result[index]<=128) index++;
            else break;
        }
        return result;
    }
    let array=getPowers();
    console.log(array);  

    powerOfTwo.close();
});