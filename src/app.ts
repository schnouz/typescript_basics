    
//console.log('Hello TypeScript!!!');
// ********************************************* ES6/7 ********************************************/
//***** ARROW FUNCTION ********/
const plates = [
    { name: 'Bolognaise', ingredients: ['Pasta'], price: 10 }
];

// Let's iterate through the plates es5
const namePlates = plates.map(function (plate) {
    return plate.name.toUpperCase();
});

//console.log('namePlates', namePlates);

// Arrow function es6
const namePlatesArrowFunction = plates.map((plate, index) => {
    return plate.name.toUpperCase();
});

// Arrow function es6 one line with implicit return
const namePlatesArrowFunctionOneLine = plates.map(plate => plate.name.toUpperCase());

// Arrow Functions lexically bind their context so this actually refers to the originating context
// So arrow function does not create a new scope. it doesn't bind any this value

const plate = {
    name: 'Pizza',
    getName: function () {
        console.log(this)
    }
}

//console.log('plate', plate.getName()); /* This is pointing to our function */

const plate_2 = {
    name: 'Pizza',
    getName: function () {
        setTimeout(function () {
            console.log(this)
        }, 0);
    }
}
//console.log('plate2', plate_2.getName()); /* this is pointing to the setTimeout but not to our project */

// Before es6 we would do :

const plate_3 = {
  name: "Pizza",
    getName: function () {
        const self = this;
        setTimeout(function() {
        console.log(self);
        }, 0);
    }
};
//console.log('plate3', plate_3.getName());

// With arrow function 
const plate_4 = {
    name: "Pizza",
    getName: function () {
        setTimeout( () => {
            console.log(this, this.name);
        }, 0);
    }
};
//console.log('plate4', plate_4.getName());

//***** Default Function parameters ********/

function add(a, b = 1) {
    return a + b;
}
// console.log(add(1));

//***** Object literal improvements ********/

const menu = {
    name: 'pizza',
    price: 10
};
const ingredients = ['Tomatto'];

const order = {
    menu: menu,
    ingredients: ingredients
};

const order_2 = { menu, ingredients };
//console.log(order_2);
// order_1 and order_2 are similar

//***** Rest parameters : Pass any numbers of argument to a function ********/

function sum(message, ...arr) {
    //console.log(message);
    return arr.reduce((prev, next) => prev + next);
}
const res = sum('hello', 1, 2, 3, 4);
//console.log(res);

//***** Spread Operators ********/

const currency = ['euro', 'dollars'];

const newCurrency = ['pesos', 'dinar'];

const allCurrency = [...currency, ...newCurrency];  // Immutable Pattern
//console.log(allCurrency); // It's does not keep the reference of currency and newCurrency 

//***** Destructuring Arrays and Objects ********/

const drinks = {
    drinkName: 'Mojito',
    ingredients: ['menth', 'rhum']
};

function orderDrink({ drinkName, ingredients: drinkIngredients }) {
  // It creates my params at variables names
  console.log(name, drinkIngredients);
    return { drinkName, drinkIngredients }; // Only return the name
}

orderDrink(drinks);
const { drinkName } = orderDrink(drinks); 
console.log(drinkName); 

// Same things with toppings
const toppings = ['bacon', 'chilli', 'pepperoni'];
const [first, second, third] = toppings;