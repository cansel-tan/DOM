//Single Elements
//document.getElementById

let val;
val=document.getElementById('header');
//val=document.getElementById('header').id;
val.style.color='red';
val.style.fontWeight='bold';
document.getElementById('header').innerHTML='<b>MY TO DO APP</b';
console.log(val);

document.querySelector
console.log(document.querySelector('#header'));
console.log(document.querySelector('.card-header'));
document.querySelector('li').style.color='blue';
document.querySelector('li:last-child').style.color='green';
document.querySelector('li:nth-child(3)').textContent='task item';  
document.querySelector('li').className='list-group-item list-group-item-primary';
document.querySelector('li').classList.add('active');

//Multiple Elements
//class name ---> document.getElementsByClassName()

let vall;
vall=document.getElementsByClassName('list-group-item');
//vall=document.getElementsByClassName('list-group-item')[2];
vall[1].style.fontSize='20px';
console.log(vall); 

//getElementsByTagName();   

let val1;
val1=document.getElementsByTagName('li');
console.log(val1); 

//querySelectorAll();

let val2,val3,list;
val3=list;
val2=document.querySelectorAll('li');

val2.forEach(function (item,index) {
    item.textContent=`${index}-task`;
    console.log(item)
    
});

val2=document.querySelectorAll('li:nth-child(even)');

val2.forEach(function (item) {
    
    item.style.background='#bbb';
    
});
console.log(val2); 
list=document.querySelector('.list-group');
val3=list.childNodes[0].nodeType;
val3=list.childNodes[1].nodeType;


//create element
const li=document.createElement('li');

//add class
li.className='list-group-item list-group-item-secondary';

//attribute

li.setAttribute('title','new item');
li.setAttribute('data-id','5');

//next node
const text=document.createTextNode('new item');
li.appendChild(text);

const a=document.createElement('a');
a.setAttribute('href','#');
a.className='delete-item float-right';
a.innerHTML='<i class="fas fa-times"></i>';

li.appendChild(a);

document.querySelector('#task-list').appendChild(li);

console.log(li);    

// Element silme güncelleme

const taskList=document.querySelector('#task-list');
//taskList.children[3].remove();
//taskList.children[0].removeAttribute('class');
let vl;
link=taskList.children[0].children[0];
vl=link.className;  
vl=link.classList;
link.classList.add('new');
link.classList.remove('new');

//vl = link.getAttribute('data-id');
//Attribute


console.log(vl);
for(let i=0;i<taskList.children.length;i++){
    taskList.children[i].removeAttribute('class');

}

const cardHeader=document.querySelector('.card-header');
console.log(cardHeader);

const h2=document.createElement('h2');
h2.setAttribute('class','card-header');
h2.appendChild(document.createTextNode('My List'));

const parent=document.querySelector('.card');
parent.replaceChild(h2,cardHeader);

console.log(cardHeader);

//Event Listeners

const btn=document.querySelector('#btnDeleteAll');
const ul=document.querySelector('#task-list');
btn.addEventListener('click',function (e) {
   // console.log("buton clicked");

        e.preventDefault(); 
        let val;
        val=e;
        val=e.target; 
        console.log(val);
    
});

const btn1=document.querySelector('#btnDeleteAll');
const ul=document.querySelector('#task-list');
const h5=document.querySelector('h5');
//click
//btn1.addEventListener('click',eventHandler);
ul.addEventListener('click',eventHandler);
//double click
//btn1.addEventListener('dblclick',eventHandler); 
btn1.addEventListener('mouseup',eventHandler); 
btn1.addEventListener('mousedown',eventHandler); 

ul.addEventListener('mouseenter',eventHandler);
ul.addEventListener('mouseleave',eventHandler);
ul.addEventListener('mouseover',eventHandler);
ul.addEventListener('mouseout',eventHandler);

//mousemove -> koordinat alma işlemleri için kullanılır.

ul.addEventListener('mousemove',eventHandler);

//keyboards events
const txt=document.querySelector('#txtTaskName');
const form=document.querySelector('form');
const select=document.querySelector('#select');
/*txt.addEventListener('keydown', eventHandler);
txt.addEventListener('keyup', eventHandler);
txt.addEventListener('focus', eventHandler);
txt.addEventListener('blur', eventHandler);
txt.addEventListener('keypress', eventHandler);
txt.addEventListener('cut', eventHandler);
txt.addEventListener('paste', eventHandler);*/
form.addEventListener('submit',eventHandler);
select.addEventListener('change',eventHandler);




function eventHandler(event) {
    console.log(`event type:${event.type}`);
    event.preventDefault();
    //h5.textContent=`Mouse X: ${event.offsetX}
    //Mouse Y: ${event.offsetY}`;

    //event.target.style.backgroundColor="yellow";
}


    //LOCAL STORAGE
    //set item
    let getir;
    const firstName=localStorage.setItem('firstName','Cansel');
    const lastName=localStorage.setItem('lastName','Tan');
    let hobies=['yoga','music','cinema'];
    //get item
    getir=localStorage.getItem('firstName');
    getir=localStorage.getItem('lastName');
    //remove
    localStorage.removeItem('lastName');
    //localStorage.clear();

    //set array to stroge
    localStorage.setItem('hobies',JSON.stringify(hobies));
    getir=JSON.parse(localStorage.getItem('hobies'));

    console.log(getir);
    console.log(localStorage);
    //SESSION STORAGE
    const city=sessionStorage.setItem('city','Muğla');
    const country=sessionStorage.setItem('country','Turkey');
    console.log(sessionStorage);









