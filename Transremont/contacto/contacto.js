function validateForm() {
    const nombre = document.forms["myForm"]["name"].value;
    const apellido = document.forms["myForm"]["last-name"].value;
    const correo = document.forms["myForm"]["email"].value;
    const mensaje = document.forms["myForm"]["message"].value;

    if (nombre === "" || apellido === "" || correo === "" || mensaje === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    // Validar formato de correo
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(correo)) {
        alert("Formato de correo electrónico no válido.");
        return false;
    }

    // Si todo es válido, enviar el formulario
    document.getElementById("myForm").submit();
}