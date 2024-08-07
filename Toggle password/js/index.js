let pssword = document.getElementById('pssword')
let btn = document.getElementById('btn')
btn.onclick = ()=>{
    if(btn.getAttribute('data-text') == "show"){
        pssword.setAttribute('type' , 'text');
        btn.setAttribute('data-text' , "hide"); 
        btn.innerHTML = "Hide"; 
    }
    else {
        pssword.setAttribute('type' , 'password');
        btn.setAttribute('data-text', 'show'); 
        btn.innerHTML = "Show"; 
    }
}