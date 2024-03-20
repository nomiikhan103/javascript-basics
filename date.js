// const mydate = new Date();

// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toString());

// const mycreateddate = new Date("2024-02-17");
// console.log(mycreateddate.toLocaleString());

// mytimeStamp = Date.now();
// console.log(mytimeStamp);
// console.log(mycreateddate.getTime());

// console.log(Math.round(Date.now() / 100));
// const newdate = new Date();
// console.log(newdate.getMonth() + 1);

// newdate.toLocaleString("default", {
//   weekday: "long",
// });

// console.log(newdate);

// Question no.1

// function nextday() {
//   let nextday = new Date();
//   nextday.setDate(nextday.getDay() + 1);

//   return nextday;
// }
// console.log(nextday());

//Question no. 2

// function dateformat() {

//   let date = new Date("2024-02-17");

//   return `${year}-${month}-${day}`;
// }
// console.log(dateformat());

let arr = [1, 4, 5];

let arr1 = [6, 7, 8];

// let arr2 = arr.concat(arr1);

// console.log(arr2);

// console.log(arr[0] + arr[1] + arr[2]);
// let avg = arr[0] + arr[1] + arr[2] / 3;
// console.log(avg);

// for (let i = 1; i <= arr.length; i++) {
//   console.log(arr);
// }

let a = ["ali", "asad", "obaid", "asif", "afaq"];

// console.log(a);

// console.log(a.slice(0, 3));
// console.log(a.splice(0, 3));

// let course1 = ["htm", "css", "javascript"];
// let course2 = ["typescript", "react", "next.js"];
// spread opreator
// let allcourses = [...course1, ...course2];

// console.log(allcourses);

// let number = [1, 2, 3, [4, 6], 7, 8, [2, 3], 9, 10, [11, 12]];

// let anothernumber = number.flat(Infinity);

// console.log(anothernumber);

// console.log(Array.isArray("Nouman"));
// console.log(Array.from("Nouman"));

// let arrycunking = ["furqan", "abbas", "abdul majid", "hassan"];

// let newarray = arrycunking.slice(1, 3);

// console.log(newarray.length);

let arr11 = ["furqan", "abbas", "abdul", "majid", "hassan"];
let chunkSize = 2;
let chunks = [];

for (let i = 0; i < arr11.length; i += chunkSize) {
  chunks.push(arr.slice(i, i + chunkSize));
}

console.log(chunks);
