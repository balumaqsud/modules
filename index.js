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

// import inquirer from "inquirer";
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

// files node modules
// hisob module ni hisob.js dan chaqirib olamiz

console.log("-----------------------------------");
const hisob = require("./hisob.js");

// hisob.add(200, 4);
// hisob.multiply(20, 4);
// hisob.subtract(20, 4);
// hisob.divide(0, 5);
// hisob.modules(9, 4);
// hisob.divide(50, 0);
// hisob.power(10, 6);

console.log("-----------------------------------");
const Account = require("./account.js");

//two instances My and Balu's account to make transactions between!
const myAccount = new Account("Ollobergan", 100, "9864-2144-2084");
const BalusAccount = new Account("Balu", 100, "9234-1144-2090");
//static methods
Account.tellTime(); //time
Account.aboutClass(); //this is Account class!

console.log("-----------------------------------");

// methods
myAccount.details(); // Ollobergan's account! with id: 9864-2144-2084
myAccount.checkBalance();
myAccount.deposit(100);
myAccount.withdraw(50);

console.log("--------------------------------");

//sending from my account to Balus Account!
myAccount.transferMoney(112, BalusAccount);
myAccount.showTransactionHistory();
myAccount.checkBalance();

console.log("--------------------------------");
