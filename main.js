// 1.Masala start 
function getSum(n) {
    let natija = 0;
    for (let i = 1; i <= n; i++) {
        natija += i * (n - i + 1);
    }
    return natija;
}

let n = 4;
console.log(getSum(n));
// 1.Masala end



// 2.Masala start

function getLongestWord(arr) {
    let longesWord = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longesWord.length) {
            longesWord = arr[i];
        }
    }
    return longesWord;
}

let arr = ["Abdulaziz", "Murod", "Yulduz", "Abdug'affor", "Jamila"];
console.log(getLongestWord(arr));
// 2.Masala end



// 3.Masala start
function getDividers (arr, n){
    let newMassiv = [];

    for (let i = 0; i < arr.length; i ++ ){
        if (arr[i] % n == 0)
        newMassiv.push(arr[i]);

    }
    return newMassiv;

}
console.log(getDividers([2, 5, 7, 10, 0, 18, 15], 5));
// 3.Masala end



// 4.Masala start
function checkWordCapitalize(str) {
  const words = str.split(" ");

  const uppercaseLetter = words.every((soz) => soz[0] === soz[0].toUpperCase());

  return uppercaseLetter;
}

let str = "Abdulaziz Programmer Is FullStack Developer";
console.log(checkWordCapitalize(str)); 
// 4.Masala end



// 5.Masala start
function  getCharObj(str){
    return str 
    .split("")
    .reduce((acc, char) =>{
        if(!acc.some((item) => item.char === char)){
            acc.push({char, count: 1});

        }else{
            acc.find((item) => item.char === char).count ++;

        }
        return acc;

    }, [])
    .reduce((result, item) => {
      result[item.char] = item.count;
      return result;
    }, {});
}

let res = "Abdulaziz Programmer";
console.log(getCharObj(res));
// 5.Masala end



// 6.Masala start
function changeObjToString(obj) {
  const ObjectValues = Object.entries(obj);
  let result = [];

  for (let i = 0; i < ObjectValues.length; i++) {
    result = result.concat(ObjectValues[i]);
  }

  const stringResult = result.join("");

  return stringResult;
}


let obj = { a: 1, b: 2, c: 3 };
console.log(changeObjToString(obj)); 
// 6.Masala end



// 7.Masala start
const products = [
  { id: 1, name: "Bike", price: 100 },
  { id: 2, name: "TV", price: 400 },
  { id: 3, name: "Album", price: 800 },
  { id: 4, name: "Book", price: 600 },
  { id: 5, name: "Phone", price: 500 },
  { id: 6, name: "Computer", price: 1000 },
  { id: 7, name: "Skate", price: 300 },
  { id: 8, name: "Keyboard", price: 200 },
  { id: 9, name: "Bottle", price: 700 },
];

function deleteProducts() {
  const DeletionProduct = Array.from(arguments);

  for (let i = products.length - 1; i >= 0; i--) {
    if (DeletionProduct.includes(products[i].id)) {
      products.splice(i, 1);
    }
  }

  return products;
}

console.log(deleteProducts(4, 6, 9));
// 7.Masala end



// 8.Masala start 
const Products = [
  { id: 1, name: "Bike", price: 100 },
  { id: 2, name: "TV", price: 400 },
  { id: 3, name: "Album", price: 800 },
  { id: 4, name: "Book", price: 600 },
  { id: 5, name: "Phone", price: 500 },
  { id: 6, name: "Computer", price: 1000 },
  { id: 7, name: "Skate", price: 300 },
  { id: 8, name: "Keyboard", price: 200 },
  { id: 9, name: "Bottle", price: 700 },
];

function increaseProductPrice(products, id, n) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products[i].price += (products[i].price * n) / 100;
      break; 
    }
  }
  return Products;
}

console.log(increaseProductPrice(Products, 6, 20));
// 8.Masala end



// 9.Masala start
function count(Str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (Str[i] === char) {
      count++;
    }
  }
  return count;
}

let Str = "Abdulaziz Programmer";
let char = "a";
console.log(count(Str, char));
// 9.Masala end



// 10.Masala start
let Obj = {
  a: 10,
  b: 5,
  c: 15,
};

function getInverse(obj) {
  const newObject = {};

  for (const key in obj) {
    const natija = obj[key];
    newObject[natija] = key;
  }

  return newObject;
}

console.log(getInverse(Obj));
// 10.Masala end
