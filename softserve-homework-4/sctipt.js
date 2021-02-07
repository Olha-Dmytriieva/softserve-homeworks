
// *********task1*********//


function calcRectangleArea(width, height){
    let square = width*height;
    if(Number.isNaN(width) || Number.isNaN(height)){
        throw 'is NaN'
    }
    console.log(square)

    
}

    try{
        calcRectangleArea(Number(prompt()), Number(prompt()));
    } catch (exeption){
        console.error(exeption);
    }


// // *********task2*********//

function checkAge(age){
console.log('age:' , age)

    if (age >= 14){
        alert('Please click to procees to film')
        } 
    else  if (Number.isNaN(age)){
        throw ('Wrong data received');
        }
    else if ( age === 0){
        throw ('The field is empty! Please enter your age');
        }
    else if (age < 14){
        throw ('You are too young');
    } else {
        throw "Something went wrong";
    }
}   

    

    try{
        checkAge(Number(prompt('What is your age?')))
    } catch (exeption){
       console.error(exeption)
    }

    



// // ************task3************//




class MonthException {
    
    constructor(message) {
        this.message = message.name;
    }

    errorMessage(){
        alert(`${this.message}`+ ' ' + 'Incorrect month number')
    }
}
    


let month1 = new MonthException({name: 'MonthException'})

function showMonthName(month, value){

    for(const key in value){
        if(month >= 1 && month <=12 ){
            if(month === key ){
                alert(value[`${key}`]);
                    break
                }
            } else {
                throw month1.errorMessage()
            }
        
        }
    } 
    try { showMonthName(prompt(),  {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
        }
    )
            
        }
        catch (exeption){
            console.error()
            
}




//************task4************//


let wrongNumError = RangeError('Wrong data received');
let belowZeroError = RangeError('Wrong ID below zero');

function showUser(id){
   

    if (id > 0){
        return ('Correct ID')
    }
       else  if (Number.isNaN(id)){

       return  wrongNumError;
    }  
        else if (id < 0){

        return belowZeroError;
    }

}

function showUsers(ids){
    const filteredElements = [];
    console.log(ids);

    for(let i = 0; i< ids.length; i+=1){

        if (showUser(ids[i]) === belowZeroError ) {
            console.log('Error: ID must not be negative', ids[i]);
            
        }  
        else if(showUser(ids[i]) === 'Correct ID'){
            filteredElements.push(`{id: ${ids[i]} }`);
        }  
      
    }
    console.log( filteredElements);
  
}

showUsers([7, -12, 44, 22])




