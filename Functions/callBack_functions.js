// Call Back function are those functions that takes functions as an argument and then call that function inside the main function.

// For example,

const func = (a) =>{
    console.log("\nmain function");
    console.log("\n",a,"\n");
    a();
}

const func1 = (b) =>{
    console.log("Callback function");
}

func(func1);