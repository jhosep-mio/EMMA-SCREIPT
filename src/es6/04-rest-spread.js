
// spread operator

let person = {name: 'jhosep', age:20};
let country= 'Peru';

let data= {id:1, ...person,country};

console.log(data);

// rest

function sum(num, ...values){
    console.log(values);
    console.log(num+values[0]);
    return num+values[0];
}

sum(1,1,2,3);