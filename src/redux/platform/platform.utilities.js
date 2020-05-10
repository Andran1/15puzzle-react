const generateRundomNumArray = () => {
  const rndNumArr = [];

  const rndNumGenerator = () => {
    const rndNum = Math.floor(Math.random() * 16 + 1);
    const clback = (elm) => elm.num === rndNum;
    const doesExist = rndNumArr.find(clback);

    if (doesExist === undefined) {
      rndNumArr.push({ num: rndNum });
    } else {
      return rndNumGenerator();
    }
  };

  for (let i = 0; i < 16; i++) {
    rndNumGenerator();
  }

  rndNumArr.forEach((el, ind) => {
    if (el.num === 16) {
      el.num = null;
    }
  });

  const newArr = [];
  for (let i = 0; i < rndNumArr.length / 4; i += 1) {
    const miniArr = rndNumArr.slice(i * 4, (i + 1) * 4);
    newArr.push(miniArr);
  }

  return newArr;
};



export { generateRundomNumArray };



// const arr1 = [
//   {id:1,
//    name: 'age',
//    loading:false} ,

//    {id:2,
//     name: 'gev',
//     loading:true} ,

//     {id:3,
//       name: 'and',
//       loading:true} 
  
// ];
// const ar=arr1.findIndex(({id}) => id ===3)
// // const ar=arr1.find((elm) => elm.id===3)
// console.log(ar);

// const fnFind = (arr, fn) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i])) {
//       return arr[i];
//     } else {
//       continue;
//     }
//   }
//   return undefined;
// };

// const num = fnFind(arr1, 5);

// console.log(num);

// const obj1 = {
//   bardz: "Papuk",
//   doshak: "Dzig",
// };

// const obj2 = {
//   ...obj1,
// };

// console.log(obj1.bardz === obj2.bardz);

// const obj1String = JSON.stringify(obj1);
// const obj2String = JSON.stringify(obj2);


// console.log(obj1String);
// console.log(obj2String);


// console.log(obj1String === obj2String);