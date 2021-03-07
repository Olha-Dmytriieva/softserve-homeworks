const ajaxRequest = new XMLHttpRequest();
ajaxRequest.open('GET', 'http://127.0.0.1:5500/');



ajaxRequest.onreadystatechange = function (){
    if(ajaxRequest.readyState ===4){
        if(ajaxRequest.status === 200){
            document.getElementById('button').addEventListener('click', function(e){
                e.target.textContent =` You voted at ${ajaxRequest.getResponseHeader('date')}` 
            }) 
        }
    }
}

ajaxRequest.send()

//*************************************task2******************************************************************* */

const ajaxRequestTask2 = new XMLHttpRequest();
ajaxRequest.open('GET', 'books.json');

let textToAddOnPage = {}
ajaxRequestTask2.onreadystatechange = function (){
    if(ajaxRequestTask2.readyState ===4){
        if(ajaxRequestTask2.status === 200){
            document.getElementById('load').addEventListener('click', function(e){
                let textToAddOnPage = JSON.parse((ajaxRequestTask2.responseText))
                textToAddOnPage.forEach(element => { 
               document.getElementById('books-list').insertAdjacentHTML('afterbegin', `<p>${element.author}</p>`)
           });
            }) 
        }
    }
}

ajaxRequest.send()