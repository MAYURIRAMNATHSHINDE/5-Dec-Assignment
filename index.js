// let age=21;
// function displayAge(){
//     console.log(age)
// }
// function changeAge(newage){
//     age=newage;
//     console.log(age)

// }
// displayAge();
// changeAge(32);
// displayAge();


// ***********************************  Q. no 2 *******************************//

function createCounter(){
    let counter=0;

    return {
        increment:function(){
            counter++;
            console.log(counter)
    },
    decrement:function (){
        counter--;
        console.log(counter)
    }
        }
}
const counter = createCounter();
counter.increment(); // Output: Current count: 1
counter.increment(); // Output: Current count: 2
counter.increment();
counter.decrement(); // Output: Current count: 1
counter.increment();
console.log("New Counter ")
const counter2 = createCounter();
counter2.increment(); // Output: Current count: 1
counter2.increment();