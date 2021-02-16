
const item = {
    form: document.querySelectorAll('.js-form'),
    username: document.querySelectorAll('.js-form textarea[name=username]'),
    password: document.querySelectorAll('.js-form textarea[name=password]'),
    newpass: document.querySelectorAll('.js-form textarea[name=new-password]')
}



item.form.forEach((element => element.addEventListener('submit', handleFormSubmit)))
item.username.forEach((element => element.addEventListener('input', handleInputUsername)));
item.password.forEach((element => element.addEventListener('input', handleInputPassword)));
item.newpass.forEach((element => element.addEventListener('input', handleInputNewPassword)));


function handleFormSubmit(event){
    // event.preventDefault()
    // console.log(event)
}



function handleInputUsername(event){
    const value = event.currentTarget.value;
    localStorage.setItem('username', value);
 
}

const usernameFromLocalStorage = localStorage.getItem('username');
        if (usernameFromLocalStorage){
            item.username.forEach(i => i.textContent = usernameFromLocalStorage)

    } 

//==========current password============//

function handleInputPassword(event){
        const value = event.currentTarget.value;
        localStorage.setItem('password', value);
     
} 


const passwordFromLocalStorage = localStorage.getItem('password');
        if (passwordFromLocalStorage){
            item.password.forEach(i => i.textContent = passwordFromLocalStorage)
    
} 

//===================update password==============//


function handleInputNewPassword(event){
    
    const value = event.currentTarget.value;
    localStorage.setItem('password', value);
   
}


// ==================================================================================================//


