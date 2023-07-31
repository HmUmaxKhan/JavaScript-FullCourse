// Those functions which call a function are called callback functions


// 1. Callback function

function func1(num1, num2, callback) {
    console.log(num1+" "+num2);
    return callback(num1+num2);
}

func1(1, 2, function(result) {
    console.log(result);
});