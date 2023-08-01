// Promise resolve we can directly used it

const al = Promise.resolve(6);

al.then((e)=>{
    console.log(e);
})


// If a then is returned a something so that something becomes a function and we can call it using another then and make a new chain


Promise.resolve(4).then((e)=>{
    console.log(e);
    return e+5;
}).then((r)=>{
    console.log(r);
    return r+6;
})
.then((r)=>{
    console.log(r);
})

// then can take only one argument