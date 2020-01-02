var input = myForm.myInput;
var reader = new FileReader;
var n="";
var c=0;
input.addEventListener('change', onChange,false);
function onChange(event) {
  var file = event.target.files[0];
  reader.readAsText(file);
  reader.addEventListener('load',onLoad,false);
}

function onLoad() {
  var user=document.getElementById("usuario").value;
  var result = reader.result; 
  var lineas = result.split('\n');
  //lineas.forEach(function(linea){ 
  //lineas.find(function(linea){ alert(linea) })
  for (var i = lineas.length - 1; i >= 0; i--) {
  	if(lineas[i]==user.toString()){
  		console.log("Excelente");
  	}
  }

	console.log(user);
}
