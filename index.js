//core node modules
//setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)
setTimeout(() => {
  console.log("this logs after5 seconds");
}, 50000);

// setTimeout(
//   (param1) => {
//     console.log(`${param1}`);
//   },
//   3000,
//   "this logs after 3 seconds"
// );

//setINterval(functionRef, delay, param1, param2, /* …, */ paramN)
setInterval(() => {
  console.log("this logs everey 30 seconds");
}, 300000);

// setInterval(
//   (param1) => {
//     console.log(param1);
//   },
//   10000,
//   "while this logs every 10 seconds"
// );
//with mdn syntax
const intervalID = setInterval(
  myCallbackFunction,
  100000,
  "hello world in every 10 seconds"
);
function myCallbackFunction(a) {
  console.log(a);
}
// let number = 0;
// setInterval(() => {
//   console.log("soniyalar:", number);
//   number++;
// }, 1000);

//file-system or fs
const fs = require("fs");
fs.writeFile(
  "text.txt",
  "Hello content! this is Ollobergan /n",
  function (err) {
    if (err) throw err;
    console.log("saved");
  }
);

const data = fs.readFileSync("text.txt", "utf8");
console.log(data);

//extarnal node modules

//files node modules
