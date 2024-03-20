const mysym = Symbol("my key1");
let jsusers = {
  name: "nouman",
  age: 22,
  [mysym]: "key 1",
  "full name": "nouman khalil",
  email: "nouman@gmail.com",
  lastloginday: ["tuesday", "friday"],
};

// console.log(jsusers.email);
// console.log(jsusers["email"]);
// console.log(typeof jsusers[mysym]);

jsusers.email = "nouman@chat.com";

// Object.freeze(jsusers);
jsusers.email = "nouman@microsoft.com";

// console.log(jsusers);

jsusers.greetings = function () {
  console.log("hello js users");
};

jsusers.greetingstwo = function () {
  console.log(`hello jsuser ${this.name}`);
};

// console.log(jsusers.greetings());
// console.log(jsusers.greetingstwo());

// const tinderuser = new Object();

const tinderuser = {};
// console.log(tinderuser);

tinderuser.id = "123ab";
tinderuser.email = "some@gmail.com";
tinderuser.islogin = true;

console.log(tinderuser);

const regularuser = {
  email: "asc@gmail.com",
  fullname: {
    fullname: {
      userfullname: {
        firstname: "Nouman",
        lastname: "Khalil",
      },
    },
  },
};

// console.log(regularuser.fullname.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj1, obj2 };

const obj3 = Object.assign({}, obj1, obj2);

console.log(obj3);
