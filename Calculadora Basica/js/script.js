var numpantalla="0";
var pantallaconnumero="si"; //Si o No
var usarpunto="no"; //Si o No
var numespera=0;
var operapendiente="";
var solucion="";

function ingresarnumero(x)
{
if(x!=".")
{

	if(numpantalla=="0" || pantallaconnumero=="si")
		{
			document.Calculadora.txtboxnros.value=x;
			numpantalla=x;
		}
	else if(x!=".")
		{
			document.Calculadora.txtboxnros.value+=x;
			numpantalla+=x;
		}
}

if(x=="." && usarpunto=="no" && numpantalla=="0")
	{
		document.Calculadora.txtboxnros.value="0.";
		numpantalla=x;
		usarpunto="si";
	}	
else if(x=="." && usarpunto=="no")
	{

		document.Calculadora.txtboxnros.value +=x;
		numpantalla +=x;
		usarpunto="si";
	}
else if(x=="." && usarpunto=="si")
{

}
	pantallaconnumero="no";
}

function ingresaoperacion(y)
{
if(operapendiente =="")
{

numespera=document.Calculadora.txtboxnros.value;
document.Calculadora.txtboxnros.value +=y;
operapendiente = y;
pantallaconnumero = "no";
numpantalla = "";
usarpunto = "no";
_
}

}

function resultado()
{

if(operapendiente != "") 
{
solucion=numespera+operapendiente+numpantalla;
document.Calculadora.txtboxnros.value=eval(solucion);
numpantalla=eval(solucion);
pantallaconnumero="si";
operapendiente = "";
usarpunto = "no";

}

}

function raiz()
{

if(operapendiente == "")
{
document.Calculadora.txtboxnros.value=Math.sqrt(numpantalla);
pantallaconnumero = "no";
operapendiente = "";
usarpunto = "no";
}
}

function limpiar()
{

 numpantalla="0";
 pantallaconnumero="si";
 usarpunto="no"; 
 numespera=0;
 operapendiente="";
 solucion="";
document.Calculadora.txtboxnros.value="0";
}


document.getElementById("n1").addEventListener("click",n1);
document.getElementById("n2").addEventListener("click",n2);
document.getElementById("n3").addEventListener("click",n3);
document.getElementById("n4").addEventListener("click",n4);
document.getElementById("n5").addEventListener("click",n5);
document.getElementById("n6").addEventListener("click",n6);
document.getElementById("n7").addEventListener("click",n7);
document.getElementById("n8").addEventListener("click",n8);
document.getElementById("n9").addEventListener("click",n9);
document.getElementById("n0").addEventListener("click",n0);
document.getElementById("n00").addEventListener("click",n00);
document.getElementById("s").addEventListener("click",o1);
document.getElementById("r").addEventListener("click",o2);
document.getElementById("d").addEventListener("click",o3);
document.getElementById("m").addEventListener("click",o4);
document.getElementById("sr").addEventListener("click",showResult);
document.getElementById("c").addEventListener("click",clean);

function n1() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n1").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n2() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n2").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n3() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n3").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n4() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n4").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n5() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n5").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n6() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n6").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n7() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n7").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n8() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n8").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n9() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n9").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n0() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n0").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n00() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n00").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function o1() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("s").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function o2() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("r").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function o3() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("d").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function o4() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("m").innerHTML;
	document.getElementById('resultado').innerHTML = actual +  sumado
}

function showResult() {
	let actual = document.getElementById('resultado').innerHTML;
	let suma = actual.indexOf("+");
	let resta = actual.indexOf("-");
	let div = actual.indexOf("÷");
	let mult = actual.indexOf("x");
	if (suma !== -1) {
		arr = actual.split("+",2);
		res = parseInt(arr[0]) + parseInt(arr[1]);
		document.getElementById("resultado").innerHTML = res;
	} else if (resta !== -1) {
		arr = actual.split("-",2);
		res = arr[0] - arr[1];
		document.getElementById("resultado").innerHTML = res;
		
	} else if (div !== -1) {
		arr = actual.split("÷",2);
		res = arr[0] / arr[1];
		document.getElementById("resultado").innerHTML = res;
		
	} else if (mult !== -1) {
		arr = actual.split("x",2);
		res = arr[0] * arr[1];
		document.getElementById("resultado").innerHTML = res;
		
	}
}
