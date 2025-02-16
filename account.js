const moment = require("moment");

class Account {
  name;
  #amount;
  #account_id;
  #transactionHistory = [];

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
    this.#transactionHistory.push(d_amount);

    console.log(
      `${this.name}, ${d_amount}$ is deposited! you have ${this.#amount}$`
    );
  }

  withdraw(w_amount) {
    if (w_amount > this.#amount) {
      console.log(
        `you have only ${this.#amount}$, you don't have enough money!`
      );
    } else {
      this.#amount -= w_amount;
      this.#transactionHistory.push(`-${w_amount}`);
      console.log(`${w_amount}$ is withdrawn! you have ${this.#amount}$`);
    }
  }
  /// this are added additionally
  showTransactionHistory() {
    console.log("history:", this.#transactionHistory);
  }

  transferMoney(amount, recipientAccount) {
    if (this.#amount > amount) {
      this.#amount -= amount;
      recipientAccount.deposit(amount);
      console.log(`${amount}$ is sent to ${recipientAccount.name}`);
    } else {
      console.log(`your balance, ${this.#amount}, is not enough!`);
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
