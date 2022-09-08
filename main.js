const myvar1 = "string";
let myvar2 = false;
let myvar3 = 3;
let myvar4 = undefined;
let myvar5 = null;

//arrays
const number = 1;
const myArr = [1, false, "Knäckebrot", null];

console.log(myArr[2 - number]);
myArr[2] = "Peter";

console.log(myArr[2]);

//object
const myObj = {
  id: 1,
  isInStore: false,
  article: "Knäckebrot",
  price: null,
};

console.log(myObj.isInStore);
console.log(myObj["price"]);

console.dir(console);

//nested Arrays

const users = [
  {
    id: 1,
    firstName: "Jenny",
    email: "jenny@web.de",
    password: "123456",
    hobbies: ["coding", "sport", "eating"],
  },
  {
    id: 2,
    firstName: "Bernd",
    email: "bernd@web.de",
    password: "123456",
    hobbies: ["coding", "sport", "eating"],
  },
  {
    id: 3,
    firstName: "Klaus",
    email: "klaus@web.de",
    password: "123456",
    hobbies: ["coding", "sport", "eating"],
  },
];

console.log(users[1].hobbies[1]);

//name from DB
const dbName = "Klaus";

//Calculator
function add(nummer1, nummer2) {    
  console.log("hallo aus add");  
  return nummer1 + nummer2;
}

function substract(nummer1, nummer2){
    return nummer1 - nummer2;
    console.log("hallo aus substract");  
}



function renderToScreen(result = 0) {
  const div = document.querySelector("div");
  const createdElement = document.createElement("h1");
  createdElement.innerText = `Das Ergebnis ist ${result}`;

  div.append(createdElement);
}

const result1 = add(6, 4);
const result2 = substract(10, 4)

renderToScreen(result1);
renderToScreen(result2);
