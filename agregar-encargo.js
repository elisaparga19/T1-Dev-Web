function addInputFile(){
    let fotoEncargo = document.getElementById("foto-encargo");
    let content = fotoEncargo.innerHTML
    let countFiles = fotoEncargo.children.length
    if (countFiles < 4){
        content += `<input class="form-control-file" type='file' id='foto-encargo-${countFiles}'>`
    } else {
        document.getElementById("errorFoto").innerText = "No puede agregar más fotos"
    }
    fotoEncargo.innerHTML = content;
}

function validate(){
    let descripcion = document.getElementById('descripcion').value;
    let paisOrigen = document.getElementById('pais-origen').value; // Solo es necesario revisar el país ya que la ciudad se selecciona automáticamente
    let paisDestino = document.getElementById('pais-destino').value;
    let fotoEncargo = document.getElementById('foto-encargo-1').value;
    let espacio = document.getElementById('espacio-solicitado').value;
    let kilos = document.getElementById('kilos-solicitados').value;
    let email = document.getElementById('email').value;
    let celular = document.getElementById('celular').value;
    let cajaErrores = document.getElementById('cajaErrores');
    let validator = true;
    let error = "";
    const regexCelular = /^\+569\d{8}$/;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (descripcion == ""){
        error += "<p>Debe ingresar una descripción</p>"
        validator = false
    } else if (descripcion.length > 250){
        error += "<p>Descripción muy larga</p>"
        validator = false
    }
    if (espacio == "Seleccione espacio"){
        error += "<p>Debe seleccionar un espacio</p>"
        validator = false;
    }
    if (kilos == "Seleccione peso"){
        error += "<p>Debe seleccionar los kilos</p>"
        validator = false;
    }
    if (paisOrigen == "Elija un país...") {
        error += "<p>Debe seleccionar un país o ciudad de origen</p>"
        validator = false
    }
    if (paisDestino == "Elija un país..."){
        error += "<p>Debe seleccionar un país o ciudad de destino</p>"
        validator = false
    }
    if (paisOrigen == paisDestino){
        error += "<p>El pais de origen debe ser diferente al pais de destino</p>"
        validator = false
    }
    if (fotoEncargo == ""){
        error += "<p>Debe subir una foto</p>"
        validator = false
    }
    if (email == ""){
        error += '<p>Ingrese un email</p>'
        validator = false;
    } else if (!regexEmail.test(email)) {
        error += '<p>Ingrese un email válido</p>'
        validator = false;
    }
    if (celular != "") {
        if (!regexCelular.test(celular)) {
            error += '<p>Ingrese un número de celular válido </p>'
            validator = false;
        }
    }
    cajaErrores.innerHTML = error;
    return validator
}