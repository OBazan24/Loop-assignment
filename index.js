// let num = 0;
// for (num = 0; num < 100; num++) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     console.log("FIZZ BAZZ");
//   } else if (num % 5 === 0) {
//     console.log("BUZZ");
//   } else if (num % 3 === 0) {
//     console.log("FIZZ ");
//   } else {
//     console.log(num);
//   }
// }

let n = 1;

for (n = 1; n < 30; n++) {
  if (n % 2 !== 0 && n % 3 !== 0) {
    console.log(`${n} Prime`);
  } else {
    console.log(n);
  }
}
