// let iterableObj = {
//     from: -1,
//     to: 4,
//     [Symbol.iterator]: function(){
//         if(typeof this.from !== 'number' || typeof this.to !== 'number'){
//             throw new Error('"From" and "to" must be numbers.');
//         }

//         if(this.from > this.to){
//             throw new Error('"From" must be less than "To".');
//         }
//         let current = this.from;

//         return {
//             next: () => {

//                 if(current <= this.to) {
//                     return {
//                         value: current++,
//                         done: false
//                     }
//                 } else {
//                     return {
//                         done: true
//                     }
//                 }  
//             }
//         }
//     }
// }

// for (let item of iterableObj) {
//     console.log(item);
// }



function getPerson(name, age){
    let people = [];

    let person1 = Object.assign({}, {name, age});

    let person2 = Object.create({}, {
                name: { 
                    value: name,
                }, 
                age: {
                    value: age,
                }
            });

    function Person(name, age){
        this.name = name;
        this.age = age;
    }

    let person3 = new Person(name, age);

    let person4 = {name, age};

    let person5 = JSON.parse(JSON.stringify(person4));

    let person6 = new Map();
    person6.set('name', name).set('age', age);
        
    people.push(person1, person2, person3, person4, person5, person6);

    return people;
}
console.log(getPerson('Kate', 10))