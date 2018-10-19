	
function jour (){
	document.getElementById("2").href="test.css"
}

function nuit (){
	document.getElementById("2").href="propos.css"
}

function tictac(){
var d = new Date();
var n = d.getMinutes();
console.log(n);
if (n %2){
	nuit();
	console.log("nuit");
}
else
{
	jour();
	console.log("jour");
}
}


setInterval("tictac()",3600000);
