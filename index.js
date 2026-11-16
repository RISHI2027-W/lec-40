let btn = document.querySelector("#myButton");
btn.addEventListener('click',()=>{
    console.log("Button clicked");
    
})

let para = document.querySelector("#message");

btn.addEventListener('click',()=>{
    para.textContent="Thanks for visiting!!"
})

let heading = document.querySelector("#heading");
heading.addEventListener('mouseover',(e)=>{
    heading.textContent = "Go on Learning JS"
})

let btn1 = document.querySelector("#Myself");

btn1.addEventListener('click',(e)=>{
    console.log(e.target.tagName);
    
})

let box = document.querySelector("#box");
let coordinates = document.querySelector("#coordinates");

box.addEventListener('mousemove',(e)=>{
    coordinates.textContent = `X:${e.clientX},Y:${e.clientY}`
}
)

let input = document.querySelector("#inputBox");

let result = document.querySelector("#result");

input.addEventListener('input',(e)=>{
    result.textContent = 
    `You typed:${e.target.value}`
})

let btn2 = document.querySelector("#myButton");
let remove = document.querySelector("#remove button");

function showMessage(){
    console.log("button clicked");
    
}

btn2.addEventListener('click',showMessage);

remove.addEventListener('click',function(){
    btn2.removeEventListener('click',showMessage);
})

let mybtn = document.querySelector("#mybtn");
let parent = document.querySelector("#parent");

parent.addEventListener('click',()=>{
    console.log("Parent Clicked");
    
})

mybtn.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("Button Clicked");
    
})

let divs = document.querySelector("#parent1");
let btns = document.querySelector("#mybtn1");

divs.addEventListener('click',(e)=>{
    console.log("button done");
    
},true)

btns.addEventListener('click',(e)=>{
    console.log("parent clicked");
    
},true)

let buttons = document.querySelector("#buttons");

buttons.addEventListener('click',(e)=>{
    if(e.target.tagName === "BUTTON"){
        console.log(`${e.target.textContent} button clicked`);
        
    }
})

let lists = document.querySelector("#list");

lists.addEventListener('click',(e)=>{
    if(e.target.tagName === "li"){
        console.log(`${e.target.textContent} is clicked`);
        
    }
})