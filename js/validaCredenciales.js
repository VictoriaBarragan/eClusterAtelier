function validaCredenciales(){
	var nombreUsuario = document.forms["frmAcceso"]["nombreUsuario"].value;
    var contrasena = document.forms["frmAcceso"]["contrasena"].value;
    
	if((nombreUsuario <> "Victoria") && (contrasena<>"123")){
	    	alert("Validar nombre de usuario y contraseña!")
            return false;
	    }
    return true;
}


/*if(nombreUsuario <> "Victoria" || nombreUsuario.length < 8 || /^\s+$/.test(nombreUsuario)){
            alert("Nombre de usuario inválido!");
            nombreUsuario.style.background = 'Yellow';  
            return false;
        }
    else if(contrasena <> 123){
            alert("Clave inválida!");
            nombreUsuario.style.background = 'Yellow';  
            return false;
        }
    return true;
}*/
 