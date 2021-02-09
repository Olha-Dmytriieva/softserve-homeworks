
//task1//

let mentor = { 
            course: "JS fundamental", 
            duration: 3,
            direction: "web-development" 
        };


function propsCount(currentObject){
    
console.log(Object.keys(currentObject).length)
    
}

propsCount(mentor);


//task2//


const hotel = {
    name:'Resort Hotel', 
    capacity:500,
    hasFreeRooms: true,
    hasPool: false,
    stars: 5
}



function showProps(obj){
console.log(Object.values(obj))
console.log(Object.keys(obj))
}

showProps(hotel);




//task3//




class Person{
    constructor(parameter){
        this.name = parameter.name;
        this.surname = parameter.surname;
    }

    showFullName(){
        console.log(`${this.name}`+ ' ' +`${this.surname}`)
    }
}



class Student extends Person{
    constructor(parameter){
        super(parameter)
        this.year = parameter.year;

    }

    showFullName(midleName){
        
        this.midleName = midleName.midleName
        console.log(`${this.name}`+ ' ' +`${this.midleName}`+ ' ' +`${this.surname}`)

    }

    showCourse(){
        let now = new Date();
        console.log("Current course: ", now.getFullYear() - this.year)

    }
}

let stud1 = new Student({name:"Petro", surname: "Petrenko", year: 2015});
stud1.showFullName({midleName: "Petrovych"})
stud1.showCourse()





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
        salaryComparison[this.fullName] = totalSalary;
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
        
    const entries = Object.entries(salaryComparison);
    
    console.log('Sorted by salary:', entries.sort((a,b) => a[1]-b[1]));
   
}



comparison(salaryComparison)

console.log(salaryComparison)




//task5//




let totalAreas = [];



class GeometricFigure {
    constructor(side1, side2){
        this.side1 = side1;
        this.side2 = side2;
    }

    getArea() {
        return 0;
    }
    toString() {
     return Object.getPrototypeOf(this).constructor.name;
    }
     }



class Triangle extends GeometricFigure{
    getArea() {
        
        let square = (0.5*this.side1)*this.side2;
        totalAreas.push(square)
        console.log(square)
    }
}


class Square extends GeometricFigure{
        
    getArea() {
        
        let square = Math.pow(this.side1, 2)
        totalAreas.push(square)
        console.log(square)
    }
}


class Circle extends GeometricFigure{
    getArea() {
        let square = (2 * Math.PI ) * this.side1;
        totalAreas.push(square)
        console.log(square)
    }
}



let triangle1 = new Triangle(4,  5);

let square1 = new Square(7);

let circle1 =  new Circle(5);


const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];




function handleFigures(figures){
// console.log(totalAreas.length)


    for(const key in figures){

        if(figures[key] instanceof GeometricFigure){
            
            console.log(triangle1.toString());
            triangle1.getArea();
            
            console.log(square1.toString());
            square1.getArea();
            
            console.log(circle1.toString());
            circle1.getArea();
            return 
               
        } 
       
    }

  

}

handleFigures(figures); 

// console.dir(totalAreas)

console.log('total of squares', totalAreas.reduce((ttl, amnt)  => ttl + amnt))





