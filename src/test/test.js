// const grid=[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,null] ,

//   ]

//   const hhhh=[
//       [grid[1][2]]
//   ]
//   console.log(hhhh)

//   function mov(x=2,y=2){
//     let a=(grid[x][y])
//     return a

// }
// console.log(mov());

// for(let x=0;x<4;x++){
//     console.log(x);
//     for(let y=0;y<4;y++){
//         console.log(y);
//         this.setState(({x,y})=>{
//             return{
//                 x:x,
//                 y:y
//             }
//         })
// console.log(grid[x][y]);
//     }
// }

//   state={
//       data:[grid[x][y]],
//       x:3,
//       y:2

//   }

// const data=[
//     [null,null,null,null],
//     [null,null,null,null],
//     [null,null,null,null],
//     [null,null,null,null] ,

//   ]

// for(let x=0;x<4;x++){

//     for(let y=0;y<4;y++){
//        console.log(data[x][y]=arr[x][y])

//     }
// }

// const arr=[
//         [1,2,3,4],
//         [5,6,7,8],
//         [9,10,11,12],
//         [13,14,15,null]]

// const all=[
//        [arr[0][0],arr[0][1],arr[0][2],arr[0][3]],
//        [arr[1][0],arr[1][1],arr[1][2],arr[1][3]],
//        [arr[2][0],arr[2][1],arr[2][2],arr[2][3]],
//        [arr[3][0],arr[3][1],arr[3][2],arr[3][3]]

// ]

// // console.log(faq)

//  const  data=[
//         [{x=0,y=0,num:arr[x][y]},{x:0,y:1,num:2},{x:0,y:2,num:null},{x:0,y:3,num:4}],
//         [{x:1,y:0,num:5},{x:1,y:1,num:6},{x:1,y:2,num:7},{x:1,y:3,num:8}],
//         [{x:2,y:0,num:9},{x:2,y:1,num:10},{x:2,y:2,num:11},{x:2,y:3,num:12}],
//         [{x:3,y:0,num:13},{x:3,y:1,num:14},{x:3,y:2,num:15},{x:0,y:2,num:null}],
//     ]

// for(let x=0;x<4;x++){

//     for(let y=0;y<4;y++){

//     }
// }

// const data = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, null],
// ];
// let x;
// let y;
// arr[0][0]

// const arr = [
//   [
//     { [x]: 0, [y]: 0, data: data[x][y] },
//     [(x = 0), (y = 1), data[x][y]],
//     [(x = 0), (y = 2), data[x][y]],
//     [(x = 0), (y = 3), data[x][y]],
//   ],
//   [
//     [(x = 1), (y = 0), data[x][y]],
//     [(x = 1), (y = 1), data[x][y]],
//     [(x = 1), (y = 2), data[x][y]],
//     [(x = 1), (y = 3), data[x][y]],
//   ],
//   [
//     [(x = 2), (y = 0), data[x][y]],
//     [(x = 2), (y = 1), data[x][y]],
//     [(x = 2), (y = 2), data[x][y]],
//     [(x = 2), (y = 3), data[x][y]],
//   ],
//   [
//     [(x = 3), (y = 0), data[x][y]],
//     [(x = 3), (y = 1), data[x][y]],
//     [(x = 3), (y = 2), data[x][y]],
//     [(x = 3), (y = 3), data[x][y]],
//   ],
// ];
// console.log(arr);

// var array = [2, 5, 9];
// array[0] = null;
// console.log(array);

//  const  data=[
//     [
//       { num: 1, id: 0 },
//       { num: 2, id: 1 },
//       { num: 3, id: 2 },
//       { num: 4, id: 3 },
//     ],
//     [
//       { num: 5, id: 4 },
//       { num: 6, id: 5 },
//       { num: 7, id: 6 },
//       { num: 8, id: 7 },
//     ],
//     [
//       { num: 9, id: 8 },
//       { num: 10, id: 9 },
//       { num: null, id: 10 },
//       { num: 12, id: 11 },
//     ],
//     [
//       { num: 13, id: 12 },
//       { num: 14, id: 13 },
//       { num: 15, id: 14 },
//       { num: 16, id: 15 },
//     ],
//   ]

//  name =(params) =>{
//     const data = [...state.data];

// data[3][2].num = 16;
// data[3][3].num = 15;

// setState(data);

// console.log(data);
// }

// const a = {
//   name: "Andranik",
// };

// const b = { ...a };

// b.name = "Narek";

// console.log(b);

// let a = "Andranik";
// let b = a;

// b = "Narek";

// console.log(a);

// const arrs = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
// ];

// arrs.forEach((arr, arrIdx) => {
//   const nullNum = arr.findIndex((elm) => elm === null);
//   if (nullNum > 0) {
//       console.log(arrIdx, nullNum);
//   }else{
//       return;
//   }
// });

// const arrs = [
//   [null, 7, 8, 5],
//   [1, 2, 3, 4],
// ];

// for (let i = 0; i < arrs.length; i++) {
//   console.log(i);
//   const nullNum = arrs[i].findIndex((elm) => elm === null);
//   if (nullNum >= 0) {
//       console.log(i, nullNum);
//       break;
//   }
// }

// const data = [
//   [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }],
//   [{ num: 5 }, { num: 6 }, { num: 7 }, { num: 8 }],
//   [{ num: 9 }, { num: 10 }, { num: null }, { num: 12 }],
//   [{ num: 13 }, { num: 14 }, { num: 15 }, { num: 16 }],
// ];

// console.log(data);
// var data = [
//   [{ num: null }, { num: null }, { num: null }, { num: null }],
//   [{ num: null }, { num: null }, { num: null }, { num: null }],
//   [{ num: null }, { num: null }, { num: null }, { num: null }],
//   [{ num: null }, { num: null }, { num: null }, { num: null }],
// ];

// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null],
//   ranNums = [],
//   i = nums.length, // 9
//   j = 0; //0

//   while (i--) {
//              j = Math.floor(Math.random() * (i + 1));
//              ranNums.push(nums[j]);

//              console.log(nums.splice(j, 1)[0];);

//            }

// for (let x = 0; x < 4; x++) {
//    for (let y = 0; y < 4; y++) {
//
//  }
// console.log(data);

// console.log('hello');

// const data = [
//   [{ num: null }, { num: null }, { num: null }, { num: null }],
//   [{ num: null }, { num: null }, { num: null }, { num: null }],
//   [{ num: null }, { num: null }, { num: null }, { num: null }],
//   [{ num: null }, { num: null }, { num: null }, { num: null }],
// ];

// const  nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]

// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null],
// ranNums = [],
// i = nums.length, // 9
// j = 0; //0

// while (i--) {
// j = Math.floor(Math.random() * (i + 1));
// ranNums.push(nums[j]);
// console.log(nums.splice(j, 1));
// }

// let rndNumArr = [];
// export const data = [
//     { id: 0, num: 1, animate: null },
//     { id: 1, num: 2, animate: null },
//     { id: 2, num: 3, animate: null },
//     { id: 3, num: 4, animate: null },
//     { id: 4, num: 5, animate: null },
//     { id: 5, num: 6, animate: null },
//     { id: 6, num: 7, animate: null },
//     { id: 7, num: 8, animate: null },
//     { id: 8, num: 9, animate: null },
//     { id: 9, num: 10, animate: null },
//     { id: 10, num: 11, animate: null },
//     { id: 11, num: 12, animate: null },
//     { id: 12, num: 13, animate: null },
//     { id: 13, num: 14, animate: null },
//     { id: 14, num: 15, animate: null },
//     { id: 15, num: 16, animate: null },
// ];

// const rndNumGenerator = (arr) => {
//   let rndNum = Math.floor(Math.random() * 16 + 1);
//   let doesExist = arr.find((el) => el === rndNum);

//   if (doesExist === undefined) {
//     arr.push(rndNum);
//   } else {
//     return rndNumGenerator(arr);
//   }
//   return arr;
// };

// for (let i = 0; i < 16; i++) {
//   rndNumGenerator(rndNumArr);
// }

// data.forEach((el, ind) => {
//     if (rndNumArr[ind] === 16) {
//         rndNumArr[ind] = null;
//     }
//     el.num = rndNumArr[ind];
// });

// const generateRundomNumArray = () => {
//   const rndNumArr = [];

//   const rndNumGenerator = () => {
//     const rndNum = Math.floor(Math.random() * 16 + 1);
//     const doesExist = rndNumArr.find((el) => el.num === rndNum);

//     if (doesExist === undefined) {
//       rndNumArr.push({ num: rndNum });
//     } else {
//       return rndNumGenerator();
//     }
//   };

//   for (let i = 0; i < 16; i++) {
//     rndNumGenerator();
//   }

//   rndNumArr.forEach((el, ind) => {
//     if (el.num === 16) {
//       el.num = null;
//     }
//   });

//   const newArr = [];
//   for (let i = 0; i < rndNumArr.length / 4; i += 1) {
//     const miniArr = rndNumArr.slice(i * 4, (i + 1) * 4);
//     newArr.push(miniArr);
//   }

//   return newArr;
// };

// console.log(generateRundomNumArray());
// generateRundomNumArray();





// let arr = [];
// for (let i = 1; i <= 16; i++) {
//   if (i < 16) {
//     arr.push({num:i});
//   } else if (i === 16) {
//     arr.push({num:null});
//   }
// }
// const newArr = [];
// for (let i = 0; i < arr.length / 4; i += 1) {
//   const miniArr = arr.slice(i * 4, (i + 1) * 4);
//   newArr.push(miniArr);

// }
// console.log(newArr);

// const fnVictory=(arr,newArr,win)=>{
//   if(arr===newArr){

//   }
  
// }