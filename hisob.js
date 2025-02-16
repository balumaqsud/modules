//object orqali hisob moduleini yaratdik!

const hisob = {};

hisob.modules = (a, b) => {
  let res = a % b;
  console.log(`$ this is the reminder: ${res}`);
};

hisob.power = (a, b) => {
  console.log("A tpo B", Math.pow(a, b));
};

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
  if (b === 0) {
    console.log(`${a} is not devisible with 0, still ${a}`);
  } else {
    console.log("divide: ", a / b);
  }
};

module.exports = hisob;
