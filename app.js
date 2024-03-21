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

/* 
Lecture 5: Reading and Writing to a File 

let textIn = fs.readFileSync("./Files/input.txt", "utf-8");
console.log(textIn);

 pitfall: read file synchronously will have to wait for an entire file to be read before the console.log can be executed

let content = `Data read from input.txt: ${textIn}. \nDate created ${new Date()}`;
fs.writeFileSync("./Files/output.txt", content);
*/

// Lecture 7: Reading and Writing to a File asynchronously

fs.readFile("./Files/start.txt", "utf8", (error1, data1) => {
  console.log(data1);
  fs.readFile(`./Files/${data1}.txt`, "utf-8", (error2, data2) => {
    console.log(data2);
    fs.readFile("./Files/append.txt", "utf-8", (error3, data3) => {
      console.log(data3);
      fs.writeFile(
        "./Files/output.txt",
        `${data2}\n\n${data3}\n\nDate created ${new Date()}`,
        () => {
          console.log("File written successfully");
        }
      );
    });
  });
});
console.log("Reading file...");
