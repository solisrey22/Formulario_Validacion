function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
  
    if (name === "" || email === "" || password === "") {
      error.innerHTML = "Todos los campos son obligatorios";
      return false;
    }
  
    // Validar el formato del correo electrónico
    var emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
      error.innerHTML = "Correo electrónico inválido";
      return false;
    }
  
    // Validar la longitud de la contraseña
    if (password.length < 6) {
      error.innerHTML = "La contraseña debe tener al menos 6 carácteres";
      return false;
    }
  
    // Si todas las validaciones pasan, se puede enviar el formulario
    return true;
  }
  