let sideA = Number(prompt('Please type size of the side A'));
let sideB = Number(prompt('Please type size of the side B'));
let sideC = Number(prompt('Please type size of the side C'));

//checking if the value indicated is  a number

if(sideA || sideB || sideC === NaN){
    alert('Incorrect data')
}


//finging semiperimeter and square as per Geron formula

let semiperimeter = 0.5*(sideA+sideB+sideC);
console.log(semiperimeter)

let square = ((semiperimeter*(semiperimeter-sideA)*(semiperimeter-sideB)*(semiperimeter-sideC))**(1/2))
console.log((square.toFixed(3)))



//checking if tha triangle is rectangular

if(sideA > sideB && sideA > sideC){
    if ((sideA ** 2) === (sideB ** 2) + (sideC **2)){
          alert('Прямокутний!')}
    else{ 
          alert('Непрямокутний!')
    }

} else if(sideB > sideA && sideB > sideC){
    if((sideB ** 2) === (sideA ** 2) + (sideC **2)){ 
            alert('Прямокутний!')}
      else{ 
            alert('Непрямокутний!')
    }

} else if(sideC > sideA && sideC > sideB){
    if((sideC ** 2) === (sideA ** 2) + (sideB **2)){
          alert('Прямокутний!')}
    else{ 
          alert('Непрямокутний!')
    }
} 