//task1//

variant1
const byId = document.getElementById("test");
 byId.textContent = "Last";

 variant2
 const id = document.querySelector('div');
 id.innerHTML = '<div id="test">Last</div>';



//task2//

const pictureRef = document.querySelector('.image');
 pictureRef.src ='cat.jpg'; // or ==>  pictureRef.setAttribute('src', 'cat.jpg');
 alert(pictureRef.src)

//task3//

      
      const divRef = document.querySelector('#text');
      const pRef = divRef.querySelectorAll('p');

      pRef.forEach(el => console.log(el.innerHTML));


//task4//

const ulListRef = document.getElementById('list');
const firstElementChildRef = ulListRef.firstElementChild
console.log(firstElementChildRef.textContent); //1
const lastElementChildRef = ulListRef.lastElementChild
console.log(lastElementChildRef.textContent); //5
console.log(firstElementChildRef.nextElementSibling.textContent) //2
console.log(lastElementChildRef.previousElementSibling.textContent) //4
console.log(lastElementChildRef.previousElementSibling.previousElementSibling.textContent)//3



//task5//

const firstHeaderRef = document.querySelector('h1');
firstHeaderRef.style.backgroundColor = 'palegreen';

const divContainerRef = document.getElementById('myDiv');
divContainerRef.firstElementChild.style.fontWeight = "bold";
divContainerRef.firstElementChild.nextElementSibling.style.color = "red";
divContainerRef.lastElementChild.style.fontStyle = "italic";
divContainerRef.lastElementChild.previousElementSibling.style.textDecoration = "underline";



const secondDivContainerRef = document.getElementById('myList');
secondDivContainerRef.style.display = 'flex';
secondDivContainerRef.style.listStyleType = 'none';

const spanRef = document.querySelector('span');
spanRef.style.display = 'none'



//task6//

const firstInputRef = document.getElementById('input1');
const newValue1 = firstInputRef.value = prompt()

const secondInputRef = document.getElementById('input2');
const newValue2 = secondInputRef.value = prompt();


alert('Let`s switch it');

firstInputRef.value = newValue2;
secondInputRef.value = newValue1;


//task7//
const lastTaskContainerREf = document.querySelector('main');
lastTaskContainerREf.classList.add('mainClass', 'check', 'item')

const lastTaskDivRef = document.createElement('div');
lastTaskDivRef.setAttribute('id', 'myDiv');




const lastTaskPRef = document.createElement('p');
lastTaskPRef.textContent = 'First paragraph';



lastTaskDivRef.appendChild(lastTaskPRef)

lastTaskContainerREf.appendChild(lastTaskDivRef)