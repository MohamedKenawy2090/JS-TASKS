let product = [{
    prodctImg : "images/lap.jpg", 
    prodctName : "DELL" , 
    prodctDetails : "CPU Core I7 G-9 Storage 1TB  SSD 500GB Ram : 32GB" , 
} , 
{
prodctImg : "images/mobile.jpg" , 
prodctName : "REDMI" , 
prodctDetails : "CPU Helio G-9 Storage 128GB   Ram : 6GB" , 
} , 
{
    prodctImg : "images/play.jpg" , 
    prodctName : "SONY" , 
    prodctDetails : " Storage 1TB   Ram : 6GB" , 
   } 
]    
function img(){
    let x = Math.floor(Math.random() * product.length) ; 
    let y = product[x] ; 
    document.getElementById('showProduct') .src = y.prodctImg ; 
    document.getElementById('desc') . innerHTML =y.prodctName ; 
    document.getElementById('desk') .innerHTML = y.prodctDetails ; 
}