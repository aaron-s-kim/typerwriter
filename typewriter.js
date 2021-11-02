const sentence = "hello there from lighthouse labs";

// console.log adds a new line character (\n) to the end of the string
// in Node, we can replace console.log with process.stdout.write

// // Make letters appear with a delay after each character
// for (const char of sentence) {
//   setTimeout(() => {
//     // print the char here
//     process.stdout.write(char);
//   }, 1000); // <= 1s delay to make it noticeable. Can dial it down later.
// }
// // Notes
// all characters will appear at once, 1s after program is run
// this is b/c register a delayed output of each character by 1s
// but loop runs through string really fast, creating a 1s timer for each char
// all chars appear to print at the same time after 1s timeout

let delay = 0;
let cCount = 0;
for (const char of sentence) {
  setTimeout(() => {
    cCount += 1;
    if (cCount === (sentence.length)) {
      process.stdout.write(char + '\n');
    } else {
      process.stdout.write(char);
    }
  }, delay);
  delay += 50;
}
