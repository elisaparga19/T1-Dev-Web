function validate(){
    let paisOrigen = document.getElementById('pais-origen').value // Solo es necesario revisar el país ya que la ciudad se selecciona automáticamente
    let paisDestino = document.getElementById('pais-destino').value
    let fechaIda = document.getElementById('fecha-ida').value
    let fechaRegreso = document.getElementById('fecha-regreso').value
    let espacio = document.getElementById('espacio-disponible').value
    let kilos = document.getElementById('kilos-disponibles').value
    let email = document.getElementById('email').value
    let celular = document.getElementById('celular').value
    let cajaErrores = document.getElementById('cajaErrores')
    let validator = true
    let error = ""
    const regexDate = /^\d{4}-\d{2}-\d{2}$/;
    const regexCelular = /^\+569\d{8}$/;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if (paisOrigen == "Elija un país...") {
        error += "<p> Debe seleccionar un país o ciudad de origen</p>"
        validator = false
    }
    if (paisDestino == "Elija un país..."){
        error += "<p> Debe seleccionar un país o ciudad de destino</p>"
        validator = false
    }
    if (paisOrigen == paisDestino){
        error += "<p>El pais de origen debe ser diferente al pais de destino</p>"
        validator = false
    }
    if (fechaIda == "" || fechaRegreso == ""){
        error += "<p>Debe ingresar fechas</p>"
        validator = false;
    } else if (!regexDate.test(fechaIda) || !regexDate.test(fechaRegreso)) {
        error += "<p>Las fechas deben estar en formato aaaa-mm-dd</p>"
        validator = false;
    } else if (!compareDates(fechaIda, fechaRegreso)) {
        error += "<p>La fecha de regreso debe ser posterior a la fecha de ida</p>"
        validator = false;
    }
    if (espacio == "Seleccione espacio"){
        error += "<p>Debe seleccionar un espacio</p>"
        validator = false;
    }
    if (kilos == "Seleccione peso"){
        error += "<p>Debe seleccionar los kilos</p>"
        validator = false;
    }
    if (celular != "") {
        if (!regexCelular.test(celular)) {
            error += '<p>Ingrese un número de celular válido </p>'
            validator = false;
        }
    }
    if (email == ""){
        error += '<p> Ingrese un email </p>'
        validator = false;
    } else if (!regexEmail.test(email)) {
        error += '<p> Ingrese un email válido </p>'
        validator = false;
    }
    cajaErrores.innerHTML = error;
    return validator
}

function compareDates(fechaIda, fechaRegreso){
    const dateIda = new Date(fechaIda);
    const dateRegreso = new Date(fechaRegreso)
    if (dateRegreso > dateIda) {
        return true
    } else {
        return false
    }
}