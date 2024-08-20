const like = document.querySelector("i")
const box = document.querySelector(".box");

box.addEventListener("dblclick",()=>{
    like.style.transform =  "translate(-50%,-50%) scale(1)";
    // like.style.color = "red";
    setTimeout(()=>{
        like.style.opacity =  0;
    },2000)
    
    setTimeout(()=>{
        like.style.transform =  "translate(-50%,-50%) scale(0)";
    },2000)
})