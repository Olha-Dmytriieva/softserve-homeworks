
const buttonCreationRef = document.getElementById('create');

const mainContainerRef = document.querySelector('.main');
const j = document.querySelector('.js-item');

buttonCreationRef.addEventListener('click', 
    function (){

    j.setAttribute('value', `f${(~~(Math.random()*1e8)).toString(16)}` )
    const newNode = j.cloneNode(true) ;
        console.log(newNode)

    mainContainerRef.appendChild(newNode)

    // j.append(newNode)

    // let html = newNode.outerHTML

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

    const formToRemove = (event.target.parentNode.parentNode);
    formToRemove.remove()

    let html = mainContainerRef.outerHTML
    localStorage.setItem('html', html);

}




const item = {
    form: document.querySelectorAll('.js-form'),
    name:document.querySelectorAll('.js-form input[name=name]'),
    username: document.querySelectorAll('.js-form input[name=username]'),
    password: document.querySelectorAll('.js-form input[name=password]'),
    newpass: document.querySelectorAll('.js-form input[name=new-password]')
}


item.form.forEach((element => element.addEventListener('submit', handleFormSubmit)));

item.name.forEach((element => element.addEventListener('input', handleInputName)));
// item.name.forEach((element => element.addEventListener('onload', returnNameTextContent)));

// window.addEventListener('click', function lala (e){
// console.log(e.target)
// } )

item.username.forEach((element => element.addEventListener('input', handleInputUsername)));
item.username.forEach((element => element.addEventListener('click', returnTextContent)));

item.password.forEach((element => element.addEventListener('input', handlePasswordUsername)));
item.password.forEach((element => element.addEventListener('click', returnPasswordTextContent)));

item.newpass.forEach((element => element.addEventListener('input', handleNewPasswordUsername)));



function handleFormSubmit(event){
    // event.preventDefault()
    // console.log(event)
}





function handleInputName(event){
    const uniqueIDRef = (event.currentTarget.parentNode.parentNode.parentNode).getAttribute('value');
      
    localStorage.setItem(`name-${uniqueIDRef}`, event.currentTarget.value);
    
   
}

function returnNameTextContent(event){
    const uniqueIDRef = (event.currentTarget.parentNode.parentNode.parentNode).getAttribute('value');
    const nameFromLocalStorage = localStorage.getItem(`name-${uniqueIDRef}`);
  
        if (nameFromLocalStorage){
  
            event.currentTarget.placeholder = nameFromLocalStorage;


}

    }


window.addEventListener('onload', function lala (e){

    const nameFromLocalStorage = localStorage.getItem(`name-${uniqueIDRef}`);

    if (nameFromLocalStorage){
  
        e.target.value = nameFromLocalStorage;
}

    // console.log(e.target)
    } 
    
    )



function handleInputUsername(event){
    const uniqueIDRef = (event.currentTarget.parentNode.parentNode.parentNode).getAttribute('value');
      
    localStorage.setItem(`name1-${uniqueIDRef}`, event.currentTarget.value);
    
   
}

function returnTextContent(event){
    const uniqueIDRef = (event.currentTarget.parentNode.parentNode.parentNode).getAttribute('value');
    const usernameFromLocalStorage = localStorage.getItem(`name1-${uniqueIDRef}`);
  
        if (usernameFromLocalStorage){
  
        this.value = usernameFromLocalStorage;
    }
}




function handlePasswordUsername(event){
    const uniqueIDRef = (event.currentTarget.parentNode.parentNode.parentNode).getAttribute('value');
      
    localStorage.setItem(`password-${uniqueIDRef}`, event.currentTarget.value);
    
   
}


function returnPasswordTextContent(event){
    const uniqueIDRef = (event.currentTarget.parentNode.parentNode.parentNode).getAttribute('value');
    const passwordFromLocalStorage = localStorage.getItem(`password-${uniqueIDRef}`);
  
        if (passwordFromLocalStorage){
  
        this.value = passwordFromLocalStorage;
    }
}





function handleNewPasswordUsername(event){
    const uniqueIDRef = (event.currentTarget.parentNode.parentNode.parentNode).getAttribute('value');
      
    localStorage.setItem(`password-${uniqueIDRef}`, event.currentTarget.value);
    
   
}




