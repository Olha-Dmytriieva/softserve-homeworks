
//task1

// let arr = ["Tom", "Sam", "Ray", "Bob"];

// let [x, y, , ...z] = arr;
// console.log(x); 
// console.log(y); 
// console.log(z); 

//task2

// let data = {
//    names: ["Sam", "Tom", "Ray", "Bob"],
//    ages: [20, 24, 22, 26],
// };
// let {names:[name1, name2, name3, name4], ages:[age1, age2, age3, age4]} = data;


// console.log(name2); // "Tom"
// console.log(age2); // 24
// console.log(name4); // "Bob"
// console.log(age4); // 26


//task3

// Напишіть функцію mul(), яка приймає будь-яку кількість параметрів 
// різного типу і повертає добуток параметрів типу Number.
// Якщо параметри типу Number відсутні, повертає число 0.


// Не можна використовувати властивість arguments, але в функцію mul() можна додати один параметр.



function mul(...params) {
    // Ваш код

    console.log(params)


}


mul(1, "str", 2, 3, true); // 6
mul(null, "str", false, true); // 0