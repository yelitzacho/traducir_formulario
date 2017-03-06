// Función que traducirá el formulario al idioma español
function traducirEspañol(){
  var title = document.getElementById('form-signin-heading');
  var email = document.getElementById('inputEmail');
  var password = document.getElementById('inputPassword');
  var recordar = document.getElementsByTagName('span')[0];
  var signin = document.getElementsByClassName('btn')[0];

  title.innerHTML = "Por favor, inicia sesión";
  email.placeholder = "Por favor ingrese su email";
  password.placeholder= "Contraseña";
  recordar.innerHTML= "Recordar datos";
  signin.innerHTML="Inicia sesión";
};
traducirEspañol();

//Función que imprimirá los datos ingresados
function mostrar (){
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;
  document.getElementById("imprimir").innerHTML = "<h3>" + "Datos ingresados"+ "</h3>" +
                                                  "Correo electrónico: " + email + "</br>" +
                                                  "Clave: " + password;
}
