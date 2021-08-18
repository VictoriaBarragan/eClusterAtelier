function validaFrm(){
	var nombreUsuario = document.forms["frmRegistro"]["nombreUsuario"].value;
    var contrasena = document.forms["frmRegistro"]["contrasena"].value;
    var confContrasena = document.forms["frmRegistro"]["confContrasena"].value;
    var primerNomAli = document.forms["frmRegistro"]["primerNomAli"].value;
    var segundoNomAli = document.forms["frmRegistro"]["segundoNomAli"].value;
    var primerApelAli = document.forms["frmRegistro"]["primerApelAli"].value;
    var segundoApelAli = document.forms["frmRegistro"]["segundoApelAli"].value;
    var telFijoAli = document.forms["frmRegistro"]["telFijoAli"].value;
    var celAliado = document.forms["frmRegistro"]["celAliado"].value;
    var emailAliado = document.forms["frmRegistro"]["emailAliado"].value;
    
	if(nombreUsuario == null || nombreUsuario.length == 0 || /^\s+$/.test(nombreUsuario){
	    	alert("Validar nombre de usuario!");
	    	return false;
	    }
	elseif(contrasena!=confContrasena){
	  	    alert("Claves ingresadas deben ser iguales para validación.");
	    	return false;
	    }
    return true;
}

	/*else if(primerNomAli == null || primerNomAli.length == 0  || /^\s+$/.test(primerNomAli)){
	    	alert("Validar campo del primer nombre!");
	    	primerNomAli.style.background = 'Yellow';  
	    	return false;
	    }
	else if(segundoNomAli == null || segundoNomAli.length == 0  || /^\s+$/.test(segundoNomAli)){
	    	alert("Validar campo del segundo nombre!");
	    	segundoNomAli.style.background = 'Yellow';  
	    	return false;
	    }
	else if(primerApelAli == null || primerApelAli.length == 0  || /^\s+$/.test(primerApelAli)){
	    	alert("Validar campo del primer apellido!");
	    	primerApelAli.style.background = 'Yellow';  
	    	return false;
	    }
	else if(segundoApelAli == null || segundoApelAli.length == 0  || /^\s+$/.test(segundoApelAli)){
	    	alert("Validar campo del segundo nombre!");
	    	segundoApelAli.style.background = 'Yellow';  
	    	return false;
	    }
	else if(isNaN(telFijoAli)){
		alert("Debe ingresar números para el teléfono fijo.");
		telFijoAli.style.background = "Yellow";
		return false;
	}
	else if(isNaN(celAli) || celAli == null || celAli.length == 0 || /^\s+$/.test(celAli)){
		alert("Debe ingresar un número de celular.");
		return false;
	}
	else if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
  		alert("Cuenta de correo inválida.");
  		return false;
	}*/
    


 /* Modelo del esquema de la función validacion() es el siguiente:

	function validacion() {

 		if (condicion que debe cumplir el primer campo del formulario) {
    	// Si no se cumple la condicion...
    	alert('[ERROR] El campo debe tener un valor de...');
    	return false;
  		}
  		else if (condicion que debe cumplir el segundo campo del formulario) {
  			// Si no se cumple la condicion...
    		alert('[ERROR] El campo debe tener un valor de...');
    		return false;
  		}
  		...
  		else if (condicion que debe cumplir el último campo del formulario) {
    		// Si no se cumple la condicion...
    		alert('[ERROR] El campo debe tener un valor de...');
    		return false;
  		}

  		// Si el script ha llegado a este punto, todas las condiciones
  		// se han cumplido, por lo que se devuelve el valor true
  		return true;
	}
 
 	Fin modelo del esquema de validació 
 */ 

/*{
    var x = document.forms["frmCreaUsua"]["username"].value;
    var y = document.forms["frmCreaUsua"]["password"].value;
    var z = document.forms["frmCreaUsua"]["confPassword"].value;
	if ((x == null || x.length == 0 || /^\s+$/.test(x)) || 
		(y == null || y.length == 0 || /^\s+$/.test(y)) || 
		(z == null || z.length == 0 || /^\s+$/.test(z))){
	    	alert("Debe diligenciar todos los campos.");
	    	return false;
	    }
	else{
	    if (y!=z) {
	  	    alert("Claves ingresadas deben ser iguales para validación.")
	    	return false;
	    }
	}
	return true;
}*/


/*function validateForm() 
{
    var x = document.forms["frmCreaUsua"]["username"].value;
    var y = document.forms["frmCreaUsua"]["password"].value;
    var z = document.forms["frmCreaUsua"]["confPassword"].value;
	if ((x == "") || (y == "") || (z =="")) {
	    	alert("Debe diligenciar todos los campos.");
	    	return;
	    }
	else{
	    if (y!=z) {
	  	    alert("Claves ingresadas deben ser iguales para validación.")
	    	return;
	    }
	}
	return false;
}*/

/*function validateFormOnSubmit(theForm) {
var theForm = document.forms["frmRegistro"]["nombreUsuario"].value;
var reason = "";
	
	reason += validateUsername(theForm);
  reason += validatePassword(theForm.pwd);
  reason += validateEmail(theForm.email);
  reason += validatePhone(theForm.phone);
  reason += validateEmpty(theForm.from);
      
  if (reason != "") {
    alert("Some fields need correction:\n" + reason);
    return false;
  }
	return true;
}

function validateUserName(fld) {
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores
 
    if (fld.value == "") {
        fld.style.background = 'Yellow'; 
        error = "You didn't enter a username.\n";
    } else if ((fld.value.length < 5) || (fld.value.length > 15)) {
        fld.style.background = 'Yellow'; 
        error = "The username is the wrong length.\n";
    } else if (illegalChars.test(fld.value)) {
        fld.style.background = 'Yellow'; 
        error = "The username contains illegal characters.\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
}*/
