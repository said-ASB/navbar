
function openbtn(){
    let x = document.getElementById("closex");
    // if(x.classList.contains("hidesidebar")){
    //     x.classList.remove("hidesidebar")
    // }else{
    //     x.classList.add("hidesidebar")
    // }
    if(x.style.display==="none"){
        x.style.display=""
        
        
    }else{
        x.style.display="none"
    }
}

function closebtn(){
//   let close =   document.getElementById("closex").classList.add("hidesidebar")

let close =   document.getElementById("closex").style.display="none"



}
