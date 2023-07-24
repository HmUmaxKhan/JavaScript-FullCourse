// Rest Parameters for functions is following.

// Creating a function

// It only takes first three parameters and ignores rest of them
const func = (n1,n2,n3) =>{
    return n1+n2+n3;
}

console.log(func(1,2,3,5,6,7,8));


// In order to get other parameters and we  don't know how many parameters we have


const func1 = (n1,n2,...n3) => {
    console.log(n1);
    console.log(n2);
    console.log(n3);
}

func1(1,2,3,5,6,7,8);


// In order to get specific number from the function using rest parameters


const func2 = (n1,...n3) => {
    for (let i of n3){
        if (n1 === i) return true;
    }
    return false;
}

console.log(func2(1,2,3,5,6,7,8));

// Because n1 stores value of 1 and n3 stores value of 2,3,4,5,6,7,8

