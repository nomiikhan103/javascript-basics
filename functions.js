function message() {
  console.log("welcome to js");
}

// message();

// function sumtwonumers(num1, num2) {
//   console.log(num1 + num2);
// }

// const result = sumtwonumers(5, 5);
// console.log(result);

function sumtwonumers(num1, num2) {
  let result = num1 + num2;
  return result;
}

// const result = sumtwonumers(5, 5);
// console.log(result);

function isuserlogin(username = " Ali") {
  // if (!username) {
  //   console.log(" plz enter user name");
  //   return;
  // }
  return `${username} user just login`;
}

// console.log(isuserlogin());

// function calculatecardprice(val1, val2, ...num1) {
//   return num1;
// }

// console.log(calculatecardprice(200, 500, 88, 2000));

const user = {
  name: "nouman",
  price: 66,
};

function handleobject(anyobject) {
  console.log(
    `user name is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleobject(user);
// handleobject({
//   username: "Ali",
//   price: 99,
// });

// const newarray = [55, 200, 600];
// const demo = [55, 12, 600];

// function returnsecoundvalue(getnewarray) {
//   return getnewarray[1];
// }

// console.log(returnsecoundvalue(demo));

// console.log(returnsecoundvalue([22, 99, 66]));

function primenumber(num) {
  if (num % 1 == 0) {
    console.log(true);
    return;
  } else {
    console.log(false);
    return;
  }
}

console.log(primenumber(2));
