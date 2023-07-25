// Parameters destructuring is the most useful method in the react.

// For example

const person = {
    name: 'John',
    age: 30,
    job: 'Developer'
}

const output = ({name,job}) =>{
    console.log("\nName is "+name);
    console.log('Job is '+job, "\n");
}

output(person);