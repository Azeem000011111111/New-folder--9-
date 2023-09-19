// Call back and promises and methods
// Callbacks



function carMaintenance(cb:(text:string)=>void){
  console.log("leave car at mechanic")
  setTimeout(()=>{
    console.log("your car is ready")
    cb("pick your car")
  },2000)
}
function pickDress(cb:(text:string)=>void){
  setTimeout(()=>{
    console.log("your dress is ready")
    cb("pick your dress")
  },100)
}
function attendEvent(cb:(text:string)=>void){
  console.log("attend event")
  cb("now you can go home")
}
function backToHome(){
  console.log("return hoem")
}
carMaintenance(function carMaint(text:string){
  console.log("car maint call back", text);
  pickDress(function dressReady(text:string){
    console.log("pick your dress ready 1",text)
  })
  attendEvent(function eventclose(text:string){
    console.log("attend event 1", text)
  })
  backToHome()


}
             
              )



// we moved to promise because to much call back
//create pyramid of dom or call back hell and that
//was diffcult to debug so for simplicty and easy debugging we use promises

// // Promise Chaining

function carMaintenance1(): Promise<string> {
  console.log("I leave my car at 9 in workshop");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Car is fixed...");
      resolve("Your car is ready");
    }, 2000);
  });
}

function pickDress1(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Your Dress is ready");
      resolve("pick your dress");
    }, 100);
  });
}

function attendEvent1(): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log("Now you can attend the event");
    resolve("Now you can go home");
  });
}

function BacktoHome1() {
  console.log("reached home");
}

carMaintenance1()
  .then(pickDress1)
  .then(attendEvent1)
  .then(BacktoHome1);



//=================================
// 20 arrays method


// // .push()
// const numbers = [1, 2, 3];
// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// // .pop()
// numbers.pop();
// console.log(numbers); // [1, 2, 3]

// // .shift()
// numbers.shift();
// console.log(numbers); // [2, 3]

// // .unshift()
// numbers.unshift(0);
// console.log(numbers); // [0, 2, 3]

// // .reverse()
// numbers.reverse();
// console.log(numbers); // [3, 2, 0]

// // .slice()
// const slice = numbers.slice(1, 3);
// console.log(slice); // [2, 3]

// // .fill()
// numbers.fill(100);
// console.log(numbers); // [100, 100, 100]

// // .indexOf()
// const index = numbers.indexOf(100);
// console.log(index); // 0

// // .findIndex()
// const findIndex = numbers.findIndex((n) => n === 100);
// console.log(findIndex); // 0

// // .find()
// const find = numbers.find((n) => n === 100);
// console.log(find); // 100

// // .reduce()
// const sum = numbers.reduce((a, b) => a + b);
// console.log(sum); // 600

// // .join()
// const joined = numbers.join(", ");
// console.log(joined); // "0, 2, 3"

// // .includes()
// const includes = numbers.includes(100);
// console.log(includes); // true

// // .some()
// const some = numbers.some((n) => n > 100);
// console.log(some); // false

// // .every()
// const every = numbers.every((n) => n < 100);
// console.log(every); // true

// // .concat()
// const concat = numbers.concat([4, 5, 6]);
// console.log(concat); // [0, 2, 3, 4, 5, 6]

// // .forEach()
// numbers.forEach((n) => console.log(n)); // 0, 2, 3

// // .sort()
// numbers.sort((a, b) => a - b);
// console.log(numbers); // [0, 2, 3]

// // .filter()
// const filtered = numbers.filter((n) => n > 100);
// console.log(filtered); // []

// // .map()
// const mapped = numbers.map((n) => n * 2);
// console.log(mapped); // [0, 4, 6]