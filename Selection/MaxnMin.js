var value=[1,2,3,4,5];
let count=0;
while(count<5){
    value[count]=Math.floor(Math.random()*1000);
    console.log(value[count]);
    count++;
}
const getMinAndMaxValue=()=>{
    let min=value[0]; let max=value[0];
    for (let i = 0; i < value.length; i++) {
        const element = value[i];
        min=(element<min)?min:element;
        max=(element>max)?max:element;
    }
    return [max,min];
}
const[minimum,maximum]=getMinAndMaxValue();
console.log("minimum value : ",minimum," maximum ",maximum);