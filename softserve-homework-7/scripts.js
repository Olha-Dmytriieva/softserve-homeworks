//task1//


let openTab = window.open(("about:blank"), 2000, "width=300,height=300");
openTab.onload = function() {
    let html = `<div style="font-size:30px">Task 1</div>`;
    openTab.document.body.insertAdjacentHTML('afterbegin', html);
  }

setTimeout(() => openTab.resizeTo( "500", "500"), 2000);

setTimeout(() => openTab.moveTo("200", "200"), 4000);

setTimeout(() => openTab.close(), 6000);



// task 2//

const task2PRef = document.getElementById('text');
const task2ButtonRef = task2PRef.nextElementSibling.firstElementChild;

task2ButtonRef.addEventListener('click', changeCSS)

function changeCSS(){

    task2PRef.classList.add("clicked-text")
}



// task3//


const task3IdRef = document.getElementById('task3');
const firstButtonREf = task3IdRef.firstElementChild;
const secondButtonREf = task3IdRef.firstElementChild.nextElementSibling;
const pLineRef = task3IdRef.lastElementChild;
const thirdButtonRef = pLineRef.previousElementSibling;

firstButtonREf.addEventListener('click', firstButton);
secondButtonREf.addEventListener('dblclick', secondButton);
thirdButtonRef.addEventListener('mousedown', thirdButtonMousedown);
thirdButtonRef.addEventListener('mouseup', thirdButtonMouseup);
pLineRef.addEventListener('mouseover', hoverInElement);
pLineRef.addEventListener('mouseout', hoverOutElement);


function firstButton(){
    
    task3IdRef.classList.add('first-clicked-button')
    // task3IdRef.classList.remove('first-clicked-button')
}

function secondButton(){
    task3IdRef.classList.add('second-clicked-button')
}

function thirdButtonMousedown(){
    task3IdRef.classList.add('third-clicked-button')
}

function thirdButtonMouseup(){
    task3IdRef.classList.remove('third-clicked-button');
    // task3IdRef.classList.add('third-clicked-button-mouseup');
}

function hoverInElement(){
    task3IdRef.classList.add('hovered-item');
}
function hoverOutElement(){
    task3IdRef.classList.remove('hovered-item');
    // task3IdRef.classList.add('third-clicked-button-mouseup');
}




//task4//


const task4ContainerRef = document.getElementById('task4');
console.log(task4ContainerRef.value)

const childrenElementsRef = document.querySelectorAll('#task4  option');
const task4ButtonRef = task4ContainerRef.nextElementSibling;


task4ButtonRef.addEventListener('click', (event) => {   
    childrenElementsRef.forEach(function(item){
        if(task4ContainerRef.value === item.value){
            item.remove()
        }  
    })
})


//task5//


const task5ButtonRef = document.getElementById('task5');

task5ButtonRef.addEventListener('click', clickAction);
task5ButtonRef.addEventListener('mouseenter', mouseoverAction);
task5ButtonRef.addEventListener('mouseleave', mouseoutAction);


function clickAction(){

    task5ButtonRef.insertAdjacentHTML('afterend','<p class="text">I was pressed!</p>')
}

function mouseoverAction(){
    task5ButtonRef.insertAdjacentHTML('afterend','<p class="text">Mouse on me!</p>')
}

function mouseoutAction(){
    task5ButtonRef.insertAdjacentHTML('afterend','<p class="text">Mouse is not on me!</p>')
}


//task6//


const task6Ref = document.getElementById('task6');
task6Ref.insertAdjacentHTML('afterend', `<p class="text"> witdth: ${window.innerWidth}, height: ${window.innerHeight}</p>`)


//task7//

const task7Ref = document.getElementById('task7');
task7Ref.insertAdjacentHTML('afterend','<select name="country" id="country"> <option value="ger">Germany</option> <option value="usa">USA</option><option value="ukr">Ukraine</option></select>')
task7Ref.insertAdjacentHTML('afterend', '<select name="cities" id="cities"><option value="ger">Baden-Baden</option><option value="usa">Albuquerque</option><option value="ukr">Mariupol</option></select><p></p>')  

const task7CountryrRef = document.getElementById('country');
const task7CitiesRef = document.querySelectorAll('#cities option');

task7CountryrRef.addEventListener('change', (event) =>{
task7CitiesRef.forEach(function(item, i){
    
   
    if((event.target.value === item.value)){
            item.setAttribute("selected", "true")
    
            task7Ref.nextElementSibling.nextElementSibling.textContent = `${item.textContent}` + ', ' + `${event.target[i].textContent}`
            
        }
    })
    
})

