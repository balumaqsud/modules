const moment = require("moment");

class Account {
  name;
  #amount;
  #account_id;

  constructor(name, amount, account_id) {
    this.name = name;
    this.#amount = amount;
    this.#account_id = account_id;
  }

  details() {
    console.log(`${this.name}'s account! with id: ${this.#account_id}`);
  }

  checkBalance() {
    console.log(`Hi, ${this.name}, you have ${this.#amount}$ in your account!`);
  }

  deposit(d_amount) {
    this.#amount += d_amount;
    console.log(`${d_amount}$ is deposited! you have ${this.#amount}$`);
  }

  withdraw(w_amount) {
    if (w_amount > this.#amount) {
      console.log(
        `you have only ${this.#amount}$, you don't have enough money!`
      );
    } else {
      this.#amount -= w_amount;
      console.log(`${w_amount}$ is withdrawn! you have ${this.#amount}$`);
    }
  }

  static aboutClass() {
    console.log("this is Account class!");
  }

  static tellTime() {
    const time = moment().format("HH:mm:ss");
    console.log(`it is ${time}`);
  }
}

module.exports = Account;
