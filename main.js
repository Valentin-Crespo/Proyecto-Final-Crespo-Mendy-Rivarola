function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let mensaje = document.getElementById("mensaje").value;


    if (nombre === "" || mensaje === "") {
      document.getElementById("resultado").innerHTML = "Por favor, complete todos los campos.";
    } else {
      document.getElementById("resultado").innerHTML = "Formulario enviado " 
      console.log(nombre);
      console.log(mensaje);
  }
}