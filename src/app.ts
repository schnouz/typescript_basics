    
/*################### Special Types #####################*/

/* ######## Any Type ########*/
// Any type is set when we don't know the shape of the data structure


let bracelet; // Typescript infered the type any

bracelet = 'red'; // We can then reassign it to other types
bracelet = 10;

/* ######## Void Type ########*/

let selectedPlates = 'Bolognaise';

// This is an impure function : the function depends on an external variable selectedPlates
function selectPlates(plate: string): void { // Nothing is being returned
    selectedPlates = plate; // We mutate the selectedPlates
    // implicit return undefined 
}

selectPlates("Carbonara");
//console.log(selectedPlates);


/* ######## Never Type ########*/

// Tell typescript that a value will never occured
function throwError(error: string): never {
    throw new Error(error);
    // Everything is unreachable here
}
//throwError('An error occured');


/* ######## Union and Literal Types ########*/
// If we need several types

let burgerSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
    burgerSize = size;
}

selectSize('medium'); // Try with mediium

//console.log(`Burger size ${burgerSize}`);


/*######## Function types ########*/

function sumOrder(price: number, quantity: number): number {
    return price * quantity;
}

// Other way to declare the same function
const sumOrder2 = (price: number, quantity: number): number => {
    return price * quantity;
}
// Let's add the function's types
let sumOrder3: (price: number, quantity: number) => number;
sumOrder3 = (x, y) => x * y;

const sum = sumOrder3(25, 2);


/*######## Functions and Optional Arguments ########*/

let sumOrder4: (price: number, quantity?: number) => number;

sumOrder4 = (x, y = 1) => x * y;

const sum2 = sumOrder4(25); // if quantity = 1 then we don't need to pass as an Arguments

/*######## Object Types ########*/

let music: { name: string, price: number, other?: string, getName(): string };

music = {
    name: 'Johny',
    price: 14,
    getName() { // Let's declare the method getName
        return music.name
    }
}

//console.log(music.getName());

/*######## Array Types and Generic ########*/

const sizes: string[] = ['small', 'medium', 'large']; // Stqtic Types

let sizes2: Array<string>; // Generic types Array<T> where T can be updated 
sizes2 = ['small', 'medium', 'large'];


/*######## Tuple types  ########*/

let vegetables: [string, number, boolean]; // We need to conform to the exact order

vegetables = ['carotte', 10, true];


/*######## Type Alias  ########*/

let hairColor: 'dark' | 'brown' | 'blond' = 'blond'; // blond by default

//console.log(hairColor);

const selectColor = (color: 'dark' | 'brown' | 'blond' = 'blond') => { // We need to repeat our type
    hairColor = color;
};

type Color = 'dark' | 'brown' | 'blond'; // Not compile to JS, virtual
const selectColor2 = (color: Color) => {
    hairColor = color;
}
type Callback = (color: Color) => void;
const selectColor3: Callback = (x) => hairColor = x;
selectColor3('dark');
//console.log(hairColor);


/*######## Type Assertions  ########*/

type Grade = { name: string, note: number };

const myGrade: Grade = { name: 'Bachelor', note: 17 };

const serialized = JSON.stringify(myGrade); // Convert Object to String

console.log(serialized); 

function getNameFromJson(obj: string) { 
    // return JSON.parse(obj).name // name is not know bacause typescript does not know the type of JSON.parse
    return (JSON.parse(obj) as Grade).name;
}

getNameFromJson(serialized); // We can access name and note