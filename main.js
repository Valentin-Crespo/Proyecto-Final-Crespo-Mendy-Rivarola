function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let dni = document.getElementById("dni").value;
    let domicilio = document.getElementById("domicilio").value;
    
    document.getElementById("nombrei").innerHTML =nombre;
    document.getElementById("edadi").innerHTML = edad;
    document.getElementById("dnii").innerHTML = dni;
    document.getElementById("domicilioi").innerHTML = domicilio;

    if (nombre === "" || edad === "" || dni === "" || domicilio === "") {
      document.getElementById("resultado").innerHTML = "Por favor, complete todos los campos.";
    } else {
      document.getElementById("resultado").innerHTML = "Formulario enviado " 
      console.log(nombre);
      console.log(edad);
      console.log(dni)
      console.log(domicilio)
  }
    
}