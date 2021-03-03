
const os = require("os");
const username = os.userInfo().username;
let currentDate = new Date();
let time = currentDate.getHours();


module.exports.greet = function (hours){
    if (hours >= 23 || hours <= 4 ){
        return('Доброї ночі')
    } else if(hours === 0){
        return('Доброї ночі')
    } else if(hours >= 5 && hours <= 10 ){
        return('Доброго ранку')
    } else if(hours >= 11 && hours <= 16 ){
        return('Доброго дня')
    }else if(hours >= 17 && hours <= 22 ){
        return('Доброго вечора')
    };
}

// greet(time);

exports.username = username;
exports.currentDate = currentDate;
// exports.greet = greet;
exports.time = time;