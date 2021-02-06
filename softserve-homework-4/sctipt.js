
// *********task1*********//

function calcRectangleArea(width, height){
    
    try{
            if(Number(width) && Number(height)){
                let square = width*height;
                alert(square)
            } else {
                throw new Error("Something went wrong");
                    }        
        } 
    catch{
        if(Number.isNaN(width) && Number.isNaN(height)){
            alert('Wrong parameter indicated')
        }else if(width === 0 && height === 0){
            alert('No data received')
        }
    }
    
}

calcRectangleArea(Number(prompt()), Number(prompt()))


// *********task2*********//

function checkAge(age){
console.log('age:' , age)

    try{
        if (age >= 14){
        alert('Please click to procees to film')
        } else {
            throw new Error("Something went wrong");
        }   
    } 

    catch {
        if (Number.isNaN(age)){
        alert('Wrong data received')
        } else if ( age === 0){
        alert('The field is empty! Please enter your age')
        }
        else if (age < 14){
        alert('You are too young')
        }
    }
}
    
checkAge(Number(prompt('What is your age?')));


// ************task3************//




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

        try{
            if(month >= 1 && month <=12 ){
                if(month === key ){
                    alert(value[`${key}`]);
                    break
                }
            } else {
                throw new Error("Something went wrong");           
            }
        }
        catch{
            month1.errorMessage()
            break
        }
    }
}


showMonthName(prompt(),  {
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

//************task4************//


function showUser(id){

    try{
        if (id > 0){
        return ('Correct ID')
        } else {
            throw new Error("Something went wrong");
        }   
    } 

    catch {
        if (Number.isNaN(id)){
            return ('Wrong data received')
        } 
        else if (id < 0){
            return ('Wrong ID')
        }
    

}

}
function showUsers(ids){
    const filteredElements = [];
    console.log(ids)

    for(let i = 0; i< ids.length; i+=1){

        if (showUser(ids[i]) === 'Wrong ID' ) {
            console.log('Error: ID must not be negative', ids[i])
            // console.log(ids[i])
        }  
        else if(showUser(ids[i]) === 'Correct ID'){
            filteredElements.push(`{id: ${ids[i]} }`)
        }  
      
    }console.log( filteredElements)  
  
}
showUser(Number(prompt()) )
showUsers([7, -12, 44, 22])




