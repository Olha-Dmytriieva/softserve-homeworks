
const buttonCreationRef = document.getElementById('create');
const mainContainerRef = document.querySelector('.main');
const inputForm = document.querySelector('.js-item');



buttonCreationRef.addEventListener('click', 
    function (){

    inputForm.setAttribute('value', `f${(~~(Math.random()*1e8)).toString(16)}` )
    const newNode = inputForm.cloneNode(true) ;
      
    mainContainerRef.appendChild(newNode)
    let html = mainContainerRef.innerHTML

    
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
    newpass: document.querySelectorAll('.js-form input[name=new-password]'),
    copybutton: document.querySelectorAll('.copy')
}

console.log(item.copybutton)


item.form.forEach((element => element.addEventListener('submit', handleFormSubmit)));

item.name.forEach((element => element.addEventListener('input', handleInputName)));


item.username.forEach((element => element.addEventListener('input', handleInputUsername)));
item.username.forEach((element => element.addEventListener('click', returnTextContent)));

item.password.forEach((element => element.addEventListener('input', handlePasswordUsername)));
item.password.forEach((element => element.addEventListener('click', returnPasswordTextContent)));

item.newpass.forEach((element => element.addEventListener('input', handleNewPasswordUsername)));

item.copybutton.forEach((element => element.addEventListener('click', handleCopyFunction)));


function handleFormSubmit(event){
    // event.preventDefault()
    // console.log(event)
}





function handleInputName(event){
    const uniqueIDRef = (event.currentTarget.parentNode.parentNode.parentNode).getAttribute('value');
    localStorage.setItem(`name-${uniqueIDRef}`, event.currentTarget.value);
 
}



document.addEventListener('DOMContentLoaded', function getTextForNameField (){
   
    item.name.forEach((input) =>{

        const inputValue = ((input.parentNode.parentNode.parentNode).getAttribute('value'));

        // console.log((input.parentNode.parentNode))

        const nameFromLocalStorage = localStorage.getItem(`name-${inputValue}`);

                if (nameFromLocalStorage){
                
                    input.value = nameFromLocalStorage;
                   
                    
                }
        }
    
    )

} )


// $("body").on("mousedown", '.input', function (e) {
//     e.preventDefault();
// });


function handleInputUsername(event){
    const uniqueIDRef = (event.currentTarget.parentNode.parentNode.parentNode).getAttribute('value');
      
    localStorage.setItem(`username-${uniqueIDRef}`, event.currentTarget.value);
    
   
}

function returnTextContent(event){
    const uniqueIDRef = (event.currentTarget.parentNode.parentNode.parentNode).getAttribute('value');
    const usernameFromLocalStorage = localStorage.getItem(`username-${uniqueIDRef}`);
  
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


function handleCopyFunction(event){
    event.preventDefault()
    // console.log((event.currentTarget).previousElementSibling)
    const textToCopy = (event.currentTarget).previousElementSibling;

    textToCopy.select();
      
    document.execCommand("copy");
  
  
    alert("Copied the text: " + textToCopy.value)


}


