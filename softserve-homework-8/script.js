//task1//


function upperCase(expression){

    if(expression.match(/[A-Z]/)){
        console.log("String's starts with uppercase character")
    } else if(expression.match(/[A-Z]/) === null){
         console.log("String's not start with uppercase character")
    }

    

}

upperCase('regexp');
upperCase('RegExp');



//task2//

function checkEmail(mail){

    const checkExp = mail.match((/\@/ig))

    if(mail.match((/[\!\&\^\%\$\*\(\)\+\>\<\[\]\{\}\?\:\;\,\`\~\#\"\'\/\|]/ig))){
        console.log('false')
    } else if (checkExp.length === 1 && mail.match((/[\.\-\_]/ig))){
        console.log('true')
    }
   
        
}

checkEmail("Qmail2@gmail.com")
checkEmail("lalala18181@mail.com")


//task3//


console.log("cdbBdbsbz".match(/d(b{1,})(d{1,})/i))

console.log((/d(b{1,})(d{1,})/i).exec("cdbBdbsbz"))




//task4//

const string = "Java Script";
let pattern = /\s/;
let arr = []

arr.push(string.split(pattern).reverse([0,1]))
console.table(arr)

 

//task5//

function ccValidation(cc){
  
    if((/^\d{4}\-\d{4}\-\d{4}\-\d{4}$/).exec(cc)){
        console.log('true');
    } else(console.log('false'));
}

ccValidation("1234-5678-9012-3456");



//task6//


function checkEmail(mail){

    const checkExp = mail.match((/\@/g));
    const emailBody = mail.split(checkExp)[0];
    const emailEnd =  mail.split(checkExp)[1];

    // console.log((/^\w+\-{0,1}/i).test(emailBody))
    // console.log((/\w\./i).test(emailEnd))

    if((/^\w+\-{0,1}/i).test(emailBody) && (/\w\./i).test(emailEnd) && checkExp.length === 1){
        console.log('true')
    }   else console.log('false')
}

checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');


//task7//


function checkLogin(login){

    // console.log((/^[A-Za-z]/ig).exec(login))
    // console.log(login.match(/\d/g))
    // console.log(login.length)


    if(login.match((/[\!\&\^\%\$\*\(\)\+\>\<\[\]\{\}\?\:\;\,\`\~\#\"\'\/\|]/g)) || login.length > 10){
        console.log('false');
        console.log(login.match(/\d/g))
    } else if ((/^[A-Za-z]/i).test(login) && login.match(/\d/g) && login.length <= 10){
        console.log('true');
        console.log(login.match(/\d/g))
    }

}

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');