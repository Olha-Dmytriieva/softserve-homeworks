
// const item = {
//     form: document.querySelector('.js-form'),
//     username: document.querySelector('.js-form input[name=username]'),
//     password: document.querySelector('.js-form input[name=password]'),
//     newpass: document.querySelector('.js-form input[name=new-password]')
// }

// console.log(item.username)

// item.form.addEventListener('submit', handleFormSubmit)
// item.username.addEventListener('input', handleInputUsername);
// item.password.addEventListener('input', handleInputPassword);
// item.newpass.addEventListener('input', handleInputNewPassword);


// function handleFormSubmit(event){
//     // event.preventDefault()
//     console.log(event)
// }

// // const id = `f${(~~(Math.random()*1e8)).toString(16)}`

// function handleInputUsername(event){
//     console.log('event')
//     const value = event.currentTarget.value;
//    console.log(event)


//     localStorage.setItem(`username`, value);

//     // event.currentTarget.textContent = value

 
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




// const item = {
//     form: document.querySelectorAll('.js-form'),
//     username: document.querySelectorAll('.js-form input[name=username]'),
//     password: document.querySelectorAll('.js-form input[name=password]'),
//     newpass: document.querySelectorAll('.js-form input[name=new-password]')
// }

// console.log(item.username)

// item.form.forEach((element => element.addEventListener('submit', handleFormSubmit)))
// item.username.forEach((element => element.addEventListener('input', handleInputUsername)));


// function handleFormSubmit(event){
//     // event.preventDefault()
//     // console.log(event)
// }

// // const id = `f${(~~(Math.random()*1e8)).toString(16)}`;

// function handleInputUsername(event){
//     console.log(event)
//     const value1 = event.currentTarget.value;
//     console.log(this)   
//     localStorage.setItem(`name1`, event.currentTarget.value);
    
//     const usernameFromLocalStorage = localStorage.getItem(`name1`);
//     console.log(usernameFromLocalStorage) 

//     if (usernameFromLocalStorage){
//         console.log(this.textContent)
//     this.innerText += usernameFromLocalStorage;

    

//         }
//     }


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

    j.setAttribute('value', `f${(~~(Math.random()*1e8)).toString(16)}` )
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

    // const domElementsFromStorage = localStorage.getItem('html'); 
    
    const formToRemove = (event.target.parentNode.parentNode);
    formToRemove.remove()

    let html = mainContainerRef.outerHTML
    localStorage.setItem('html', html);
// 
}






const item = {
    form: document.querySelectorAll('.js-form'),
    username: document.querySelectorAll('.js-form input[name=username]'),
    password: document.querySelectorAll('.js-form input[name=password]'),
    newpass: document.querySelectorAll('.js-form input[name=new-password]')
}

console.log(item.username)

item.form.forEach((element => element.addEventListener('submit', handleFormSubmit)))
item.username.forEach((element => element.addEventListener('input', handleInputUsername)));


function handleFormSubmit(event){
    // event.preventDefault()
    // console.log(event)
}

// const id = `f${(~~(Math.random()*1e8)).toString(16)}`;

function handleInputUsername(event){
    console.log(event)
    const value1 = event.currentTarget.value;
    console.log(this)   
    localStorage.setItem(`name1`, event.currentTarget.value);
    
    const usernameFromLocalStorage = localStorage.getItem(`name1`);
    console.log(usernameFromLocalStorage) 

    if (usernameFromLocalStorage){
        console.log(this.textContent)
    this.innerText += usernameFromLocalStorage;

    

        }
    }













