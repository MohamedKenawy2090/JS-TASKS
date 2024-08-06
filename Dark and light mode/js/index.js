let dark = document.getElementById('dark') 
let light = document.getElementById('light');
let bgc = document.getElementById('bgc'); 
let color = ["black" , "white"]; 
dark.onclick = ()=>{
bgc.style.backgroundColor = color[0] ; 
dark.style.color = color[1]; 
}
light.onclick = ()=>{
    bgc.style.backgroundColor = color[1];
    dark.style.color = color[0];  
}