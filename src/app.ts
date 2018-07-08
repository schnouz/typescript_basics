    
/*################### Primitive Types #####################*/

/* ######## Number Type ########*/

// new Number() | new String() | new Boolean() are Javascript Types So be careful to use lowercase

let plateCost = 12; // Typescripst is infering the types
//plateCost = '25'; // Throw an error 

const numberOfPlates: number = 5;

function calculateTotal(cost: number, number: number): number {
    return cost * numberOfPlates;
}


const cost: number = calculateTotal(plateCost, numberOfPlates); // try to add .toString()


console.log(`this is our Cost: ${cost}`); // es6 features which allow multiline string and string interpolation


/* ######## String Type ########*/

const animal: string = 'cat';

function normalizeAnimal(code: string): string {
    return code.toUpperCase();
}

const message: string = `
    animal name is ${normalizeAnimal(animal)}
`;
//console.log(message);



/* ######## Boolean Type ########*/

const orders: number = 5;

function discount(orders: number): boolean {
    return orders >= 4;
}

console.log(discount(orders));
if (discount(orders)) {
  console.log("you can have a discount");
} else {
  console.log("You need 3 for a discount!");
}