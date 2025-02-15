//core node modules
//setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)
// setTimeout(() => {
//   console.log("this logs after 5 seconds");
// }, 5000);

// setTimeout(
//   (param1) => {
//     console.log(`${param1}`);
//   },
//   3000,
//   "this logs after 3 seconds"
// );

//setINterval(functionRef, delay, param1, param2, /* …, */ paramN)

// setInterval(() => {
//   console.log("this logs everey 30 seconds");
// }, 300000);

// setInterval(
//   (param1) => {
//     console.log(param1);
//   },
//   10000,
//   "while this logs every 10 seconds"
// );

//with mdn syntax
// const intervalID = setInterval(
//   myCallbackFunction,
//   10000,
//   "hello world in every 10 seconds"
// );
// function myCallbackFunction(a) {
//   console.log(a);
// }

// let number = 0;
// setInterval(() => {
//   console.log("soniyalar:", number);
//   number++;
// }, 1000);

//file-system or fs
// const fs = require("fs");
// import fs from "fs";

// // fs.writeFile("text.txt", "Hello content! this is Ollobergan", function (err) {
// //   if (err) throw err;
// //   console.log("saved");
// // });
// const data = fs.readFileSync("text.txt", "utf8");
// // console.log(data);

// fs.writeFileSync("text.txt", `${data} \n\t this is a rew line`, "utf8");
// const new_data = fs.readFileSync("text.txt", "utf8");
// // console.log(new_data);

// /////////////////////////////// extarnal node modules //////////////////////////////

// import validator from "validator";
// import moment from "moment";
// import inquirer from "inquirer";
// import { v4 as uuidv4 } from "uuid";
// import chalk from "chalk";

// // const moment = require("moment"); //moment
// // const today = moment().format("[today is: ] YYYY MM DD[th]");
// // console.log(today);
// setInterval(() => {
//   const today = moment().format("[today is: ] YYYY MM DD[th]");
//   console.log(today);
// }, 10000);

// ///// inquirer - terminal bn aloqa
// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "date",
//       message: "what is the date of your birthday?",
//     },
//   ])
//   .then((answer) => {
//     console.log(answer.date);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ///// validator --   checks and returns boolean
// const isEmail = validator.isEmail("ollobergan008@gmail.com");
// console.log("validator: ", isEmail); // true

// const isInt = validator.isInt("26"); //checks if string is intiger
// console.log("is this int? : ", isInt);

// const isIP = validator.isIP("114.200.12.144"); // IP checking
// console.log("is this ip adress: ", isIP);

// ///// uuid  -- returns new random string
// console.log("this is a random string: ", chalk.red(uuidv4()));

// ///// chalk - colorful strings
// console.log(chalk.blue("Hello world! ") + chalk.yellow("Oliver!"));

//files node modules
// hisob module ni hisob.js dan chaqirib olamiz
console.log("-----------------------------------");
const hisob = require("./hisob.js");

hisob.add(200, 4);
hisob.multiply(20, 4);
hisob.subtract(20, 4);
hisob.divide(252, 4);

console.log("-----------------------------------");

const Account = require("./account.js");
const myAccount = new Account("Ollobergan", 100, "9864-2144-2084");
const BalusAccount = new Account("Balu", 10230, "9234-1144-2090");

//static methods
Account.tellTime(); //time
Account.aboutClass(); //this is Account class!

console.log("-----------------------------------");

// methods
myAccount.details(); // Ollobergan's account! with id: 9864-2144-2084
myAccount.checkBalance(); //100$
myAccount.deposit(200); //300$
myAccount.withdraw(50); //250

console.log("-----------------------------------");

// balu's
BalusAccount.checkBalance();
BalusAccount.deposit(3200);
BalusAccount.details();
BalusAccount.withdraw(10);
