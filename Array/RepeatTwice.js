let myArray = [];
for (let i = 100; i > 0; i--) {
    if (i % 11 == 0) {
      myArray.push(i);
    }
  }
  console.log(...myArray);
