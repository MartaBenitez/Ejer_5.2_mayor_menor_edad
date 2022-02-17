function sacarMensaje()
{
	let edad=document.getElementById("edad").value;
	let nombre=document.getElementById("nombre").value;
	if(edad>17){
		let frase=nombre+" eres mayor de edad";
		alert(frase);
	}
	else{
		let frase=nombre+" eres menor de edad";
		alert(frase);
	}
}