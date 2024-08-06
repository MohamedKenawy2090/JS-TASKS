function prime(number){
    if(number<=1) 
        return false ;
    for(let i=2 ; i<number; i++){
        if(number % i == 0){ 
            console.log(`${number}=>number is not prime`) ;
            return false ; 
        } }
        
        console.log(`${number}=>Number Is Prime`) ; 
         return true ;
}
prime(window.Number(prompt("Enter Number"))) ; 
