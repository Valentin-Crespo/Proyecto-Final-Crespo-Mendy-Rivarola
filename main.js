function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let entrega = document.getElementById("entrega").value;
    let dni = document.getElementById("dni").value;
    let domicilio = document.getElementById("domicilio").value;
    let producto = document.getElementById("producto").value;
    
    document.getElementById("nombrei").innerHTML =nombre;
    document.getElementById("entregai").innerHTML = entrega;
    document.getElementById("dnii").innerHTML = dni;
    document.getElementById("domicilioi").innerHTML = domicilio;
    document.getElementById("productoi").innerHTML = producto;

    if (nombre === "" || entrega === "" || dni === "" || domicilio === "" || producto === "") {
      document.getElementById("resultado").innerHTML = "Por favor, complete todos los campos.";
    } else {
      document.getElementById("resultado").innerHTML = "Formulario enviado"; 
      console.log(nombre);
      console.log(entrega);
      console.log(dni);
      console.log(domicilio);
      console.log(producto);
  }
    
}
function EnviarConsulta() {
  let usuario = document.getElementById("usuario").value;
  let mensaje = document.getElementById("mensaje").value;



  if (usuario === "" || mensaje === "") {
    document.getElementById("enviado").innerHTML = "Por favor, complete todos los campos.";
  } else {
    document.getElementById("enviado").innerHTML = "Consulta Enviada"; 
    console.log(usuario);
    console.log(mensaje);
  
  }
}