function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;


    if (nombre === "" || email === "") {
      document.getElementById("resultado").innerHTML = "Por favor, complete todos los campos.";
    } else {
      document.getElementById("resultado").innerHTML = "Formulario enviado " 
      console.log(nombre);
      console.log(email);
  }
}