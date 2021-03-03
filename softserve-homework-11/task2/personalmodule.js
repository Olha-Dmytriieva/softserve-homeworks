
const os = require("os");
const username = os.userInfo().username;
let currentDate = new Date();
let time = currentDate.getHours();


module.exports.greet = function (hours){
    if (hours >= 23 || hours <= 4 ){
        return('Good night')
    } else if(hours === 0){
        return('Good night')
    } else if(hours >= 5 && hours <= 10 ){
        return('Good morning')
    } else if(hours >= 11 && hours <= 16 ){
        return('Good afternoon')
    }else if(hours >= 17 && hours <= 22 ){
        return('Good evening')
    };
}

// greet(time);

exports.username = username;
exports.currentDate = currentDate;
// exports.greet = greet;
exports.time = time;