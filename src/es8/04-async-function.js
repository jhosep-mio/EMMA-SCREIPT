const fnAsync = () => {
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(() => resolve('Async!!'), 1000)
        :reject(new Error ('Error'));
    })
}

const AnFn = async () =>{
    const something = await fnAsync();
    console.log(something);
    console.log('hello');
}

console.log('Antes');
AnFn();
console.log('Despues');