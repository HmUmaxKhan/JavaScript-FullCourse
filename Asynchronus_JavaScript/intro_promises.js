// Promises are used in the curd operations and restfulapis


const ingeridients = ['Salt','Rice','Vegetables'];

// Make a promise

function func()
{
    return new Promise((resolve,reject)=>{
    if(ingeridients.includes("Rice")){
    resolve(ingeridients)
    }else{
        reject("Not found");
    }
    })
}


// Consume a promise We will consume a promises more than making a new promise


func().then((arr)=>{
    console.log(arr);
})
.catch(()=>{
    console.log("Failed to consume");
})