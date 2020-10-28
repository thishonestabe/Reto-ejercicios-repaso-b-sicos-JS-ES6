// 1 - Haz una función capaz de revertir el orden de los caracteres de un string dado por un usuario.

let reverseString = (s) => {
    let arr = [...s];
    let lenght = arr.length;
    let topIndex = (lenght - 1)
    let middle = Math.floor((lenght/2))
    for(let x = 0; x < middle; x ++) {
        let start = arr[x];
        let end = arr[(topIndex - x)];
        arr[x] = end;
        arr[(topIndex - x)] = start;
    }
    console.log(arr.join(""));
    return arr.join("")
}

reverseString("I love to reverse strings!!");

// 2 - Construye una función que sea capaz de comprobar si una variable es un array o no lo es.

let checkIfArr = (arr) => {
    let type = Array.isArray(arr);
    console.log("Is the parameter an array? ", type);
    return type
}

checkIfArr("2");
checkIfArr([4,7,9,4,2,6]);

//3 - Construye una función capaz de clonar un array.

let cloneArray = (arr) => {
    // Using JSON.parse && stringify to perform a deep copy instead of a shallow one
    if(!checkIfArr(arr)) {
        console.log("NOT AN ARRAY");
        return
    }
    let clonedArray = JSON.parse(JSON.stringify(arr));
    console.log(clonedArray)
    return clonedArray
}

cloneArray([5,6,7,89,3]);

//4 - Escribe una función capaz de borrar elementos duplicados del siguiente array.
// let array1 = ["Lunes","Martes","Miércoles","Lunes","Jueves","Viernes","Viernes","Sabado","Domingo"];

let deleteDuplicates = (arr) => {
    let momoizedObj = {}
    let newArr = []
    for (let item of arr) {
        momoizedObj[item] = item;
    }
    console.log(Object.keys(momoizedObj))
    return Object.keys(momoizedObj)

}

deleteDuplicates(["Lunes","Martes","Miércoles","Lunes","Jueves","Viernes","Viernes","Sabado","Domingo"]);

//5 - Escribe una función capaz de concatenar dos arrays.
// let array2 = [1,2,3,4,5,6,7,8,9]; let array3 = [10,11,2,3,4,12,13,14,15];

let concatArrays = (...arrays) => {
    let arr = []
    for(let item of arrays) {
        arr = [...arr, ...item];
    }
    console.log("Concatenated Arrays: ", arr);
    return arr
}

concatArrays([1,2,3,4,5,6,7,8,9],[10,11,2,3,4,12,13,14,15]);

//6 - Modifica la función anterior para excluir aquellos elementos que se repitan en el array concatenado.

let concatArraysUnique = (...arrays) => {
    let arr = []
    for(let item of arrays) {
        arr = [...arr, ...item];
    }
    let uniqueAssetasSet = [...new Set(arr)]
    console.log("Concatenated Arrays and unique using set: ",uniqueAssetasSet);
    let uniqueAssetWithFilter = arr.filter((item, index) => arr.indexOf(item) === index)
    console.log("Concatenated Arrays and unique using filter: ",uniqueAssetWithFilter);
    return uniqueAssetasSet
}

concatArraysUnique([1,2,3,4,5,6,7,8,9],[10,11,2,3,4,12,13,14,15]);

//7 - Diseña una función en Javascript que acepte un número como parámetro y compruebe si este número
// es primo o no.

let checkPrime = (n) => {
    if (n <= 3) {
        return true
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false
    }
    let i = 5;
    while(i*i <=n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false
        } else {
            i += 6;
        }
    }
    return true
}

console.log("el numero es primo? ", checkPrime(112));

//8 - Diseña una función en Javascript de tipo promesa que genere un array con 5 números aleatorios, una vez hecho esto, pedirá un número al usuario
// mediante prompt y comprobará si el número introducido coincide con uno de los 5 generados aleatoriamente por el array. en caso de coincidir devolverá un
// resolve, caso contrario reject. El espectro de los números tanto aleatorios como el introducido por el usuario será del 1 al 10.


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let promise = new Promise((resolve, reject) => {
    let arr = [];

    while(arr.length < 5) {
        arr.push(Math.floor((Math.random() * 10)) + 1)
    }
    rl.question("Input a number ? ", function(number) {
        number = +number;
        console.log("Array: ", arr, " User Input: ", number)
        if (arr.indexOf(number) === -1) {

            reject("Numero incorrecto")
        }else {
            resolve("Numero Encontrado")
        }
        rl.close();

    });

})

promise.then(val => console.log(val)).catch(e => console.log(e))
