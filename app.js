const readline = require("readline");
const fs = require("fs"); //fs stand for "file system"

/* Lecture 4: Reading Input and Writing Output

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter your name: ", (name) => {
  console.log(`You entered: ${name}`);
  rl.close();
});

rl.on("close", () => {
  console.log("Interface closed");
  process.exit(0);
});
*/

/* Lecture 5: Reading and Writing to a File */
let textIn = fs.readFileSync("./Files/input.txt", "utf-8");
console.log(textIn);

// pitfall: read file synchronously will have to wait for an entire file to be read before the console.log can be executed

let content = `Data read from input.txt: ${textIn}. \nDate created ${new Date()}`;
fs.writeFileSync("./Files/output.txt", content);
