// // async await

// import { esbuildVersion } from "vite"

// function delay(ms) {
//     const promise = new Promise((resolve, reject) => {
//       const any = true;
//       if (any) {
//         try {
//           setTimeout(() => {
//             resolve("i am reolved");
//           }, ms);
//         } catch (error) {
//           reject(error);
//         }
//       } else {
//         reject("any is false");
//       }
//     });
//     return promise;
//   }
  
// async function newFunctio ()  {
//     await data = delay(1000)
//     console.log(data)
// }


let tuple: [string, number] = ["hello", 10];

let [first, second] = tuple;