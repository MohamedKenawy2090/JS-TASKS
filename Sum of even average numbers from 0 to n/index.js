function averageEven(n)
{
	let sum = 0 ;
    let count = 0;
	while (n >= 2) {
		count++;
		sum += n;
		n = n - 2;
	}
	return sum / count;
}
let n = window.Number(prompt("Enter Number"));
	document.write( averageEven(n));
	



