
// let mentor = { 
//             course: "JS fundamental", 
//             duration: 3,
//             direction: "web-development" 
//         };
// Результат має бути 3.
// propsCount(mentor);  // 3

// let mentor = { 
//                 course: "JS fundamental", 
//                 duration: 3,
//                 direction: "web-development" 
//             };

// function propsCount(currentObject){
    
// console.log(Object.keys(currentObject).length)
    
// }

// propsCount(mentor);


//task2//


// const hotel = {
//     name:'Resort Hotel', 
//     capacity:500,
//     hasFreeRooms: true,
//     hasPool: false,
//     stars: 5
// }



// function showProps(obj){
// console.log(Object.values(obj))
// console.log(Object.keys(obj))
// }

// showProps(hotel)

//task3//




// class Person{
//     constructor(parameter){
//         this.name = parameter.name;
//         this.surname = parameter.surname;
//     }

//     showFullName(){
//         console.log(`${this.name}`+ ' ' +`${this.surname}`)
//     }
// }



// class Student extends Person{
//     constructor(parameter){
//         super(parameter)
//         this.year = parameter.year;

//     }

//     showFullName(midleName){
        
//         this.midleName = midleName.midleName
//         console.log(`${this.name}`+ ' ' +`${this.midleName}`+ ' ' +`${this.surname}`)

//     }

//     showCourse(){
//         let now = new Date();
//         console.log("Current course: ", now.getFullYear() - this.year)

//     }
// }

// let stud1 = new Student({name:"Petro", surname: "Petrenko", year: 2015});
// stud1.showFullName({midleName: "Petrovych"})
// stud1.showCourse()





//task4//


let salaryComparison = {};


class Worker{

   #experience = 1.2; 
   
    constructor(options){

        this.fullName = options.fullName;
        this.dayRate = options.dayRate;
        this.workingDays = options.workingDays;

    }

    showSalary(){
        console.log(`${this.fullName} salary `, this.dayRate*this.workingDays);
    }
    
    showSalaryWithExperience(){
        let totalSalary = this.dayRate*this.workingDays*this.#experience;
        console.log(`${this.fullName} salary `, totalSalary);
    }

    showSalaryWithNewExperience(){
        let totalSalary = this.dayRate*this.workingDays*this.#experience;
        salaryComparison[totalSalary] = this.fullName;
        console.log(`${this.fullName} new salary `, totalSalary);
    }

    get showExp(){
        return this.#experience;
     }

    set showExp(newExp){

       return this.#experience =  newExp;
    }

    
}



// Example usage:
let worker1 = new Worker({fullName: 'John Johnson', dayRate: 20, workingDays: 23});
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showExp
worker1.showSalaryWithExperience();
worker1.showExp = 1.5 ;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithNewExperience();



let worker2 = new Worker({fullName: "Tom Tomson", dayRate: 48, workingDays:22});
console.log(worker2.fullName);                 
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showExp
worker2.showSalaryWithExperience();
worker2.showExp = 1.5 ;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithNewExperience();


let worker3 = new Worker({fullName: "Andy Ander", dayRate: 29, workingDays: 23});
console.log(worker3.fullName);                 
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showExp
worker3.showSalaryWithExperience();
worker3.showExp = 1.5 ;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithNewExperience();



function comparison(){
    // const values = Object.values(salaryComparison);
    const keys = Object.keys(salaryComparison);
        
    console.log(`${ keys.concat(keys.splice(keys.indexOf(keys.reduce((prev, cur) => prev < cur ? cur : prev)), 1))}` );

   
}
console.log(comparison(salaryComparison))



console.log(salaryComparison)





