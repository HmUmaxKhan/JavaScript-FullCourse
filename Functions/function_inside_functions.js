// Functions inside functions

const App = () =>{
    function myName() {
        console.log("Umar");
    }

    function sum(n1,n2) {
        return n1+n2;
    }

    console.log("Main function");

    // Calliing functions inside function

    myName();
    console.log(sum(4,6));
}

App();