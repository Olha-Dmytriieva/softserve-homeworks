// *******task1*******//
const numbers = [2, 3, 4, 5];
let total = 1;

for(let i = 0; i < numbers.length; i += 1){
    total *= numbers[i];
    
}  alert(total)



//WHILE
let i = 0;
while(i< numbers.length) {
  
  total = total * numbers[i];
  i+=1;
  
} console.log(total)




do{
  total = total * numbers[i];
  i+=1;
 
} while(i< numbers.length);

console.log(total)



// *******task2*******//
const loop = 15;

for (let i = 0; i <= loop; i += 1) {
    if (i % 2 === 0) {
        console.log( i , 'is even')
      continue;
    } else if(i % 2 !== 0){
        console.log( i, 'is odd' )
        continue;

    }
}

// *******task3*******//

function randArray(k, length) {

    for (let i = 0; i < length; i += 1){
      console.log(Math.floor(Math.random() * Math.floor(k)))  ;
    }
     
  }

  randArray(500, 5)


// *******task4*******//

function raiseToDegree(a,b){
    console.log(Math.pow(a, b))
}

raiseToDegree(prompt(), prompt())


// *******task5*******//

function findMin(){
    let smallest = arguments[0];
    
    for(let i = 1; i < arguments.length; i+=1){
        if(arguments[i] < smallest){
            smallest = arguments[i];   
        } 
    }
    console.log(smallest)

}

findMin(12, 14, 4, -4, 0.2);

// *******task6*******//

function findUnique(arr){
   
    for(let i = 0; i < arr.length; i+=1){
        
        for(let j = 0; j < arr.length; j+=1){
            
            if(i !== j){
               
                if(arr[i] === arr[j]){
                    return false
                 } 

            }
        }
        
       

    } return true
}


console.log(findUnique([1, 2, 3, 5, 3]));  // => false
console.log(findUnique([1, 2, 3, 5, 11])); //=> true


// *******task7*******//

function lastElem(arr, x ){

    if(x===undefined){
        x = 1
    }

   console.log(arr.slice(-x))
}

lastElem([3, 4, 10, -5]);      // -5
lastElem([3, 4, 10, -5],2);   // [10, -5]
lastElem([3, 4, 10, -5],8);   // [3, 4, 10, -5]

// *******task8*******

function makeUpperCase(sentence){
    const mySentence = sentence.split(' ');

    for(let i = 0; i < mySentence.length; i+=1){
        mySentence[i] = mySentence[i][0].toUpperCase() + mySentence[i].substr(1);

        // console.log(mySentence[i].substr(1))


    }

    console.log(mySentence.join(' ')) 
}

makeUpperCase('i love java script')





///


