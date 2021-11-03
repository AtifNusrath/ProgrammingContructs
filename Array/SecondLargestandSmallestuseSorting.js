let myArray = new Array();
 for (let i = 0; i < 10; i++) {
     let num = Math.floor(Math.random() * 900) + 99;
     myArray.push(num);
 }

 myArray.sort();

 console.log("\n Sorted Array Value : " + myArray);
 console.log("\n Second Largest Value : " + myArray[myArray.length - 2]);
 console.log("\n Second Smallest Value : " + myArray[1]);