
// const item = {
//     form: document.querySelector('.js-form'),
//     username: document.querySelector('.js-form input[name=username]'),
//     password: document.querySelector('.js-form input[name=password]'),
//     newpass: document.querySelector('.js-form input[name=new-password]')
// }

// // console.dir(item.username)

// item.form.addEventListener('submit', handleFormSubmit)
// item.username.addEventListener('input', handleInputUsername);
// item.password.addEventListener('input', handleInputPassword);
// item.newpass.addEventListener('input', handleInputNewPassword);


// function handleFormSubmit(event){
//     event.preventDefault()
//     // console.log(event)
// }

// const id = `f${(~~(Math.random()*1e8)).toString(16)}`

// function handleInputUsername(event){
//     const value = event.currentTarget.value;
//     localStorage.setItem(`username-${id}`, value);
 
// }

// const usernameFromLocalStorage = localStorage.getItem('username');
    
//         if (usernameFromLocalStorage){
    
//          item.username.value = usernameFromLocalStorage   

//     } 

// //==========current password============//

// function handleInputPassword(event){
//         const value = event.currentTarget.value;
//         localStorage.setItem(`password-${id}`, value);
     
// } 


// const passwordFromLocalStorage = localStorage.getItem('password');

//         if (passwordFromLocalStorage){

//             item.password.value = passwordFromLocalStorage
    
// } 

// //===================update password==============//


// function handleInputNewPassword(event){
    
//     const value = event.currentTarget.value;
//     localStorage.setItem('password', value);
   
// }




// // const item = {
// //     form: document.querySelectorAll('.js-form'),
// //     username: document.querySelectorAll('.js-form input[name=username]'),
// //     password: document.querySelectorAll('.js-form textarea[name=password]'),
// //     newpass: document.querySelectorAll('.js-form textarea[name=new-password]')
// // }

// // item.form.forEach((element => element.addEventListener('submit', handleFormSubmit)))
// // item.username.forEach((element => element.addEventListener('input', handleInputUsername)));


// // function handleFormSubmit(event){
// //     // event.preventDefault()
// //     // console.log(event)
// // }

// // // const id = `f${(~~(Math.random()*1e8)).toString(16)}`;

// // function handleInputUsername(event){
    
// //     const value1 = event.currentTarget.value;
// //     console.log(this)   
// //     localStorage.setItem(`name1`, event.currentTarget.value);
    
// //     const usernameFromLocalStorage = localStorage.getItem(`name1`);
// //     console.log(usernameFromLocalStorage) 

// //     if (usernameFromLocalStorage){
// //         console.log(this.textContent)
// //     this.innerText += usernameFromLocalStorage;

    

// //         }
// //     }


// //========================
// // const item = {
// //     form: document.querySelector('.js-form'),
// //     username: document.querySelector('.js-form input[name=username]'),
// //     password: document.querySelector('.js-form input[name=password]'),
// //     newpass: document.querySelector('.js-form input[name=new-password]')
// // }



const buttonCreationRef = document.getElementById('create');
// console.log(buttonCreationRef)
const mainContainerRef = document.querySelector('.main');
const j = document.querySelector('.js-item');

buttonCreationRef.addEventListener('click', 
    function (){

    const newNode = j.cloneNode(true) ;
        console.log(newNode)

    mainContainerRef.prepend(newNode)

    let html = mainContainerRef.outerHTML
    localStorage.setItem('html', html);

})


function getElement() {
    mainContainerRef.innerHTML = localStorage.getItem('html');
}

getElement()




const removeBtnRef = document.getElementById('remove');
removeBtnRef.addEventListener('click', removeBtnFunction);

function removeBtnFunction(event){
    // console.dir(event.target.parentNode.parentNode.outerHTML)
    const domElementsFromStorage = localStorage.getItem('html'); 

    const formToRemove = (event.target.parentNode.parentNode.outerHTML);
    console.log(domFromStorage.indexOf(formToRemove)) 

    // const html = domFromStorage.substring(0, domFromStorage.indexOf(`${formToRemove}`))

    console.log(domElementsFromStorage.substring(0, domElementsFromStorage.indexOf(formToRemove)))
    
//    localStorage.setItem('html', (domFromStorage.substring(0, domFromStorage.indexOf(formToRemove)) ) )


}






















// console.log(mainContainerRef)

// определение кнопки добавления
// const button_add = document.querySelector( '.dynamic_fields .js-add' );
// //  console.log(button_add)
// // ожидание клика на кнопку .add
// button_add.addEventListener( "click", function () {
//  // какие-то действия
// })

// // определение кнопки добавления
// var button_add = document.querySelector( '.dynamic_fields .js-add' );

// // ожидание клика на кнопку .add
// button_add.addEventListener( 'click', function () {

//     // определение блока, содержащего элементы
//     var students = document.querySelector( '.dynamic_fields .students' );

//     // клонирование образцового элемента
//     var element = document.querySelector( '.example_student' ).cloneNode( true );

//     // добавление класса к клонированному элементу
//     element.classList.add( 'student' );

//     // удаление класса из клонированного элемента
//     element.classList.remove( 'example_student' );

//     // добавление нового элемента к списку
//     students.appendChild( element );
// } );

// // ожидание клика по документу
// document.addEventListener( 'click', function ( el ) {

//     // если клик был по элементу, который содержит класс remove
//     if ( el.target && el.target.classList.contains( 'js-remove' ) ) {

//         // определение прародительского блока, содержащего кнопку
//         var child = el.target.closest( '.table' );

//         // удаление элемента списка
//         child.parentNode.removeChild( child );
//     }
// } );
