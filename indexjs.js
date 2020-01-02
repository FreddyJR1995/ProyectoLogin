var n=1;
function validar(){
	var user=document.getElementById("usuario").value
	var psw=document.getElementById("password1").value
	var resp;
	if(n!=3){
			if((user=="Estudiante"&& psw=="12345")||(user=="Docente"&&psw=="123")||(user=="Administrativo"&&psw=="1234")){
			window.location="Principal.html";
				n=1;
	}else{
		resp="Error al inicar sesion";
		n++;
		document.getElementById("password1").value=null;
		document.getElementById("usuario").value=null;
		alert(resp);
		}
	}else{
		document.getElementById("password1").disabled=true;
		document.getElementById("usuario").disabled=true;
		alert("Error al iniciar sesión Intentos terminados");	
		n=1;
	}
}