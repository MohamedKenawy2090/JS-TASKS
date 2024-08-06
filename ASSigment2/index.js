 function numa(x){
    let sum=0 ; 
    for(let i=0; i<=x; i++)
    {
        if(i %2 == 0){
            sum=sum+i; 
        }
    }
    console.log(sum); 
}
numa(window.Number(prompt('Enter Number!'))); 