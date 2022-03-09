function cambiaColor() {
	document.getElementById("div1").style.color = "red";
}

function regresaColor() {
	document.getElementById("div1").style.color = "black";
}
function actualiazaTotal(precio){

	var Total = document.getElementById("Total").value;

    var num = parseInt(Total);
	num+= parseInt(precio);


	document.getElementById("Total").value = num.toString();
}