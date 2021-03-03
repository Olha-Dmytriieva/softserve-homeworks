// const username = Object.values(os.userInfo());
let currentDate = new Date()


const greet = function (hours){
    if (hours >= 23 || hours <= 4 ){
        console.log('Доброї ночі')
    } else if(hours === 0){
        console.log('Доброї ночі')
    } else if(hours >= 5 && hours <= 10 ){
        console.log('Доброго ранку')
    } else if(hours >= 11 && hours <= 16 ){
        console.log('Доброго дня')
    }else if(hours >= 17 && hours <= 22 ){
        console.log('Доброго вечора')
    };
}

greet(currentDate.getHours());

// exports.username = username;
exports.currentDate = currentDate;
exports.greet = greet;