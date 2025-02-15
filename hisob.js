//object orqali hisob moduleini yaratdik!
const hisob = {};

hisob.multiply = (a, b) => {
  console.log("multiply: ", a * b);
};

hisob.subtract = (a, b) => {
  console.log("subtract: ", a - b);
};
hisob.add = (a, b) => {
  console.log("add: ", a + b);
};
hisob.divide = (a, b) => {
  console.log("divide: ", a / b);
};

module.exports = hisob;
