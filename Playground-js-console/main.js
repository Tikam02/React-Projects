
// Primitive Date Types: Strings, Boolean, Null, undefined, symbol, numbers


// const name = 'John';
// const age = 30;


//concatenation
//console.log('My name is ' + name + 'and age is' + age)

//template string
//const hello = `My name is ${name} and I am ${age}`;

// console.log(hello);


// Arrays

// const fruits = ['apples','oranges','grapes',10, true];


// fruits.push('mangos');


// console.log(fruits.indexOf('grapes'));

// console.log(fruits[2])




// Object literals

// const Person = {
//     fistname : ' john',
//     lastName : 'doe',
//     age: 30,
//     hobbies: ['music','movies','sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         State: 'MA'
//     }
// }

// console.log(Person.address.State);

// Destructuring 

// const {fistname, lastName, hobbies} = Person;

// console.log(hobbies[1]);



const todos = [ 
    {
        id:1,
        text: 'Take out the trash',
        isCompleted: true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted : true
    },
    {
        id:3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

// const todoJson = JSON.stringify(todos);
// console.log(todoJson);


//Loop

// for (let i=0; i<10; i++){
//     console.log(i);
// }

// while loop

// let i =0;
// while(i<10){
//     console.log(`while loop number : ${i}`)
// }

// for(let todo of todos){
//     console.log(todo)
// }


//forEach, map, filter


// todos.forEach(function(todo){
//     console.log(todo.text)
// });

// const todoText = todos.map(function(todo){
//     return todo.text;
// });


// const todoText = todos.map(function(todo){
//     console.log(todo.text);
// });

// const todoID = todos.map(  (todo) => {
//     console.log(todo.id);
// });


// const todoComp = todos.filter( (todo) => {
//     return todo.isCompleted === true;
// });

// console.log(todoComp);


// const x =100;

// const color = x > 10? 'red' : 'blue';
// console.log(color);

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break
//     default:
//         console.log('Color is not blue not red');
//         break;
// }

// const sum = (num1, num2) => {
//    return num1+num2;
// };
// console.log(sum(2,4));


// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"), 500);
// const baz = () => console.log("Third");

// bar();
// foo();
// baz();


// creating a class
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   // creating an object
// //   const person1 = new Person('John');
// //   const person2 = new Person('Jack');

//   const Persons = {person1:'John', person2:'Jack'}
  
// //   console.log(person1.name); // John
// //   console.log(person2.name); // Jack
//   console.log(Persons);


// class Person {
//     constructor(name) {
//         this.name = name;
//         this.age = 30;
//     }

//     // getter
//     get personName() {
//         return this.name;
//     }

//     // setter
//     set personName(x) {
//         this.name = x;
//     }
// }

// let person1 = new Person('Jack',30);
// console.log(person1.age); // Jack

// // changing the value of name property
// person1.personName = 'Sarah';
// console.log(person1.name); // Sarah


// class Temperature {
//     constructor(celsius) {
//       this.celsius = celsius;
//     }
//     get fahrenheit() {
//       return this.celsius * 1.8 + 32;
//     }
//     set fahrenheit(value) {
//       this.celsius = (value - 32) / 1.8;
//     }
  
//     static fromFahrenheit(value) {
//       return new Temperature((value - 32) / 1.8);
//     }
//   }
  
//   let temp = new Temperature(22);
//   console.log(temp.fahrenheit);
//   // → 71.6
//   temp.fahrenheit = 86;
//   console.log(temp.celsius);
//   // → 30


// class Person{
//     constructor(name){
//         this.name=name;
       
//     }

//     greet = () =>{
//         console.log(`Hello ${this.name}`);
//     }

// }

// class Student extends Person{
//     constructor(name){
//         console.log("Creating student class");
//         super(name);
//     }
// }

// let student1 = new Student("jack");
// student1.greet();

//----------------------------------_Array Functions





//---------------------------------------Map Functions------------------


let todoList = [ 

    {item_name:"Apple", price:"$5", quantity:1, brand_details: {name:"Golden Delicious", location:"San Francisco"}, isChecked:true},
    
    {item_name:"Bannana", price:"$3", quantity:2, brand_details: {name:"Fuji", location:"San Diego"}, isChecked:false},
    
    {item_name:"Pears", price:"$7", quantity:4, brand_details: {name:"Golden Delicious", location:"San Francisco"}, isChecked:true},
                             
    {item_name:"Milk", price:"$4", quantity:3, brand_details: {name:"Mother Dairy", location:"California"}, isChecked:false},
                           
    ];



let arr = [1,2,3,4,5,6,7,8,9,10];


// let users = [
//     {firstName : "Susan", lastName: "Steward"},
//     {firstName : "Daniel", lastName: "Longbottom"},
//     {firstName : "Jacob", lastName: "Black"}
//   ];

  



//   const modUsers = users.map( ({firstName,lastName}) => {
//       return (`${firstName} ${lastName}`)
//   })

// console.log(modUsers);

// let modArr = arr.map( (tempArr) => tempArr*3)
// console.log(modArr);


// const plusArr = arr.map( (element, index) => {
//     console.log("index"+index);
//     return element*10;

// })

//  let modifiedArr = arr.filter((element,index,array) => {
//      return element % 2 == 0;
//  });
//  console.log(modifiedArr);


//  let modifiedAarr = arr.filter((element, index) => element%2 == 0)



// todoList.map( ({item_name,price, quantity}) => {
//     console.log(`${item_name} with quantity ${quantity} with price ${price}`)
// });


// todoList.map( ({item_name,isChecked,brand_details:{name}}) => {
//     if(isChecked){
//         console.log(`${item_name} from ${name} is selected`)
//     }
// })


// Transform into nested array of item_name with isChecked value 
// todoList.map(({item_name,isChecked}) => {
//     console.log([item_name,isChecked]);
// })

// // Transform into array of objects with item_name and price 
// todoList.map( ({item_name, price}) => {
//     console.log([item_name,price])
// });


// Print all item_name values from array of objects
// const itemList = todoList.map( ({item_name}) => item_name);
// console.log(itemList);


// Print unique brand location values from array of objects
// let productLocations = todoList.map(({brand_details: {location}}) => location);

// // productLocations = new Set(productLocations)

// console.log(productLocations)


//##-------------Add Property to Array of Object
// todoList = todoList.map( (item) => {
//     const price = Number(item.price.replace("$",""))
//     return {...item,  total:`\$${price*item.quantity}`}
// });
// console.log(todoList)


//##----------------Delete Property from Array of Object

// todoList = todoList.map( ({item_name,price,quantity,isChecked}) => {
//     return { item_name, price, isChecked }
// });
// console.log(todoList)

//##---------------Delete price property for every object entry in todoList


// todoList = todoList.map( (item) => {
//     delete item.price
//     return item;
// })

// console.log(todoList)


//##-------------------------------Accessing each Key/Value Pair in Array of Objects

// Getting key/value pair of object entries in todoList array

// todoList.map((item)=>{ 

//     return Object.entries(item).map( 
    
//     (todoList_entry)=>{
    
//     // Getting key/value pair of brand_details object
    
//       if(todoList_entry[0]=="brand_details"){ 
    
//         return Object.entries(todoList_entry[1]).map( 
    
//         (brand_details_entry)=> brand_details_entry);
//       }
//       else{
    
//         return todoList_entry;
    
//       }
//     })
    
//     });



//------------------------------------CallBack Function---------------
// CallBack Function
// In JavaScript, you can also pass a function as an argument to a function. This function that is passed as an argument inside of another function is called a callback function.


// function greet(name, callback){
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// //callback function 
// const callMe = () => {
//     console.log('I am callback function');
// }

// //Passing function as an argument
// greet('Peter',callMe)


//----------------------------------------
// Callback Program with setTimeout()
// function greet(){
//     console.log('Hello World');
// }

// const sayName = (name) => {
//     console.log('Hello' + ' '+name);
// }
// //calling the function
// setTimeout(greet,2000);
// sayName('John');

//------------------------Using Callback function

// const greet = (name, myFunction) => {
//     console.log('Hello World');

//     // Callback function
//     // Executed only after the greet() is executed
//     myFunction(name);
// }

// // Callback Function
// function sayName(name){
//     console.log('Hello' + ' '+name);
// }

// //calling the function after 2 seconds
// setTimeout(greet,2000,'John',sayName);


//------------------------------Promise Function----------------------------


// const count = 10;

// let countValue = new Promise(function(resolve, reject){
//     if(count > 5){
//         resolve("Condition Is True");
//     }else {
//         reject("Condition is False");
//     }
// });

// console.log(countValue);

//----------------------------Promise Chanining Using then---------------


// const count = 10;

// let countValue = new Promise(function(resolve, reject){
//     resolve("Promise Resolved");

// });

// countValue
//     .then(function successValue(result){
//     console.log(result)
// })
//     .then(function successValue1() {
//     console.log("You can call multiple functions this way.");
//   });




//---------------------------------------Promise With Catch

// returns a promise
// let countValue = new Promise(function (resolve, reject) {
//     reject('Promise rejected'); 
//  });
 
//  // executes when promise is resolved successfully
//  countValue.then(
//      function successValue(result) {
//          console.log(result);
//      },
//   )
 
//  // executes if there is an error
//  .catch(
//      function errorValue(result) {
//          console.log(result);
//      }
//  );



// function callDogApi(url){
//     const promise = fetch(url);
//     promise.then((response)=> {
//       if(response.status === 200){
//         console.log('Api call successful');
//         console.log(response);	
//       }else{
//         throw new Error(response.status);
//       }
//     }).catch((error)=> {
//       console.log(error);
//     });
//   }
  
//   callDogApi("https://api2.binance.com/api/v3/ticker/24hr");


 //-----------------------

// new Promise((resolve, reject) => {
//     console.log('Initial');
//     resolve();
// })
// .then(() => {
//     throw new Error('something has failed');
//     console.log('Do this');
// })
// .catch( () => {
//     console.error('Do that');
// })
// .then( () => {
//     console.log('Do this, no matter what happened before');
// });



//------------------------------Async Functions---------------------------------

// async function logFetch(url) {
//     try {
//       const response = await fetch(url);
//       console.log(await response.text());
//     } catch (err) {
//       console.log('fetch failed', err);
//     }
//   }


// ## Arrow functions

// // map some URLs to json-promises
// const jsonPromises = urls.map(async url => {
//   const response = await fetch(url);
//   return response.json();
// });





// ## Object methods

// const storage = {
//   async getAvatar(name) {
//     const cache = await caches.open('avatars');
//     return cache.match(`/avatars/${name}.jpg`);
//   }
// };

// storage.getAvatar('jaffathecake').then(…);


// ## Class methods 

// class Storage {
//   constructor() {
//     this.cachePromise = caches.open('avatars');
//   }

//   async getAvatar(name) {
//     const cache = await this.cachePromise;
//     return cache.match(`/avatars/${name}.jpg`);
//   }
// }

// const storage = new Storage();
// storage.getAvatar('jaffathecake').then(…);



/// ### Using Async and Promise functions----------------------------


// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout( () => {
//             resolve('Resolved Promise');
//         },2000);
//     });
// }

// const AysncCall = async() => {
//     console.log('calling...');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
// }

// AysncCall();



//### Live API Example

// function callDogApi(url){
//     const promise = fetch(url);
//     promise.then((response)=> {
//       if(response.status === 200){
//         console.log('Api call successful');
//         console.log(response);	
//       }else{
//         throw new Error(response.status);
//       }
//     }).catch((error)=> {
//       console.log(error);
//     });
//   }
  
//   callDogApi("https://api2.binance.com/api/v3/ticker/24hr");



// const binance = async(url) => {
//     try{
//         const response = await fetch(url);
//         if(response.status === 200){
//          console.log('Api call successful');
//          console.log(response);    
//         }else{
//             throw new Error(response.status);
//         }
//     }catch(err){
//         console.log('fetch failed',err)
//     }
// }

// binance("https://api2.binance.com/api/v3/ticker/24hr");





//##--------------------Javascript State----------

//Functional Programming State


// let stoveTemp = 500;

// function Pot(){  
//     this.boilStatus = '';  
//     this.startBoiling = function(){    
//         if( stoveTemp > 400)     
//         this.boilStatus = "boiling";
//         else if (stoveTemp < 400 )
//         this.boilStatus = "not boiling"
        
//     }
// }

// let pastaPot = new Pot();
// pastaPot.startBoiling();
// console.log(pastaPot);// Pot { boilStatus = 'boiling'; }



// function Pasta (){  
//     this.cookedStatus = false;  
//     this.addToPot = function (boilStatus){    
//         if(boilStatus == "boiling")      
//         this.cookedStatus = true;  
//     }
// }

// let myMeal = new Pasta();
// myMeal.addToPot(pastaPot.boilStatus);
// console.log(myMeal.cookedStatus);// true



//##--------------------------Functional State change------------

// const stoveTemp = 500;
// const cookPasta = (temp) => {  
//     if(temp > 400)    
//     return 'cooked';
// }

// console.log(cookPasta(stoveTemp));// 'cooked'




// function createCount(){
//     let state = 0;
//     return function count(){
//        state += 1;
//        return state;
//     }
//  }
 
//  let count = createCount();
//  console.log(count()); //1
//  console.log(count()); //2


// function getFee(isMember) {
//     return (isMember ? '$2.00' : '$10.00');
//   }
  
//   console.log(getFee(true));
//   // expected output: "$2.00"
  
//   console.log(getFee(false));
//   // expected output: "$10.00"
  
//   console.log(getFee(null));
//   // expected output: "$10.00"
  



//condition ? exprIfTrue : exprIfFalse


// const person = {
//     name: "Tikam",
//     age: 28,
//     vehicle: {
//         year: 2021,
//         warranty: {
//             expiryDate: 2022
//         }
//     }
// }

// const vehicleYear = person.vehicle ? person.vehicle.year : undefined;
// const vehicleYear = person.vehicle?.year ?? 3033;
// const warrantyYear = person.vehicle?.warranty?.expiryDate;

// console.log(warrantyYear);
// console.log(vehicleYear);


// const Org = {
//     ws : {
//         user: {
//             name : "Timon"
//         }
//     }
// }

// const workSpace = Org.ws.user?.name ?? "No name";
// console.log(workSpace);


// ------------------------------Array.map-----------------------------------

const peaks = ["Tallac", "Ralston", "Rose"];
// const [last] = peaks.reverse();
// console.log(last); // Rose
// console.log(peaks.join(", ")); // Rose, Ralston, Tallac

// const [last] = [...peaks].reverse();
// console.log(last); // Rose

const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
const [first, ...others] = lakes;
// console.log(others);
// console.log(first);
// console.log(others.join(", ")); // Marlette, Fallen Leaf, Cascade

// function directions(...args) {
//   let [start, ...remaining] = args;
//   let [finish, ...stops] = remaining.reverse();
//   console.log(`drive through ${args.length} towns`);
//   console.log(`start in ${start}`);
//   console.log(`the destination is ${finish}`);
//   console.log(`stopping ${stops.length} times in between`);
// }
// directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");

const morning = {
  breakfast: "oatmeal",
  lunch: "peanut butter and jelly"
};
const dinner = "mac and cheese";
const backpackingMeals = {
  ...morning,
  dinner
};
// console.log(backpackingMeals);

const getFakePerson = async () => {
  let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
  let { results } = res.json();
  console.log(results);
};
getFakePerson();

// Array.filter

// const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];

// const wSchools = schools.filter((school) => school[0] === "W");
// console.log(wSchools);

// const cutSchool = (cut, list) => list.filter((school) => school !== cut);

// console.log(cutSchool("Washington & Liberty", schools));

// Array.map

// const highSchools = schools.map((school) => `${school} High School`);
// const highSchools = schools.map(school => ({ name: school }));
// console.log(highSchools);

const schools = {
  Yorktown: 10,
  "Washington & Liberty": 2,
  Wakefield: 5
};

const schoolArray = Object.keys(schools).map((key) => ({
  name: key,
  wins: schools[key]
}));

// console.log(schoolArray);


// -------------------Array.reduce-------------

const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max,age) => {
    console.log(`${age}>${max} = ${age>max}`);
    if (age > max) {
        return age;
        } else {
        return max;
        }
    }, 0);

    console.log("maxAge", maxAge);


    