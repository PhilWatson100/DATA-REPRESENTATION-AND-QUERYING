//Question 2 (a)

//creating the arrow function
//const moduleName = (name) => "Data Representation and Querying";

// Call the function and output the result to the console
//console.log(moduleName());


//(b)
//const moduleName = (name) => name;

// Call the function and output the result to the console
//console.log(moduleName("Data Representation and Querying"));

//(c)
//const add = (a, b) => a + b;

// Call the function and output the result to the console
//console.log(add(5, 7));

//(d)
//const ages = [25, 31, 42, 77];

//creating the .map function
// const newAge = ages.map(age => {
//     if (age < 70) {
//         return age * 2
//     }
//     else {
//         return age
//     }
// });

// //output the result to the console
// console.log(newAge);

//Question 3 (a)
const names = ["John", "Paul", "Mary", "Jack", "Jill"];

//(b)
//console.log("there is currently "+names.length+" names on the array... \n" + names+ "\n \n");

//creating the function and adding the parameter called task
//const addTask = (task) => {
//    names.push(task);
//}   
//addign "Peter" to the names array
//addTask("Peter");

//output the result to the console
//console.log("there is "+ names.length +" names on the array... \n" + names);

//(c)
//new funtion
const listAllTasks = () => {for (var i = 0; i < names.length; i++) {console.log(names[i]);}};

listAllTasks(); //calling the function
    


