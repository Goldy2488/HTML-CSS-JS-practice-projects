// Method : change the status by two buttons

// let friendStatus = document.querySelector(".status")
// let addBtn = document.querySelector("#AddFriend")
// let removeBtn = document.querySelector("#RemoveBtn")

// addBtn.addEventListener("click",()=>{
//     friendStatus.innerHTML = "Friends";
//     friendStatus.style.color = "green";
// })

// RemoveBtn.addEventListener("click",()=>{
//     friendStatus.innerHTML = "Stranger";
//     friendStatus.style.color = "Red";
    
// })



/*Method: change the status by the one button*/
let friendStatus = document.querySelector(".status");
let addBtn = document.querySelector(".AddFriend");

let flag = 0 ;


addBtn.addEventListener("click",()=>{
        if(flag ==0 ){
        friendStatus.innerHTML = "Friends";
        friendStatus.style.color = "Green";
        addBtn.innerHTML = "Remove Friend";
        addBtn.classList.remove("AddFriend")
        addBtn.classList.add("RemoveBtn")
        flag =1

    }else{
   
        friendStatus.innerHTML = "Stranger";
        friendStatus.style.color = "Red";
        addBtn.innerHTML = "Add Friend";
        addBtn.classList.remove("RemoveBtn")
        addBtn.classList.add("AddFriend")
        flag =0
        
    }
})
