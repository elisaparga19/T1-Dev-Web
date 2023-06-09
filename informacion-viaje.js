const params = new URLSearchParams(window.location.search)
const id = params.get("id")

function getTrip(tripId){
    for (let i=0; i<viajes.length; i++){
        let trip = viajes[i]
        if (trip["id"] == tripId) {
            return trip
        }
    }
}

function displayPaisCiudad(trip){    
    document.getElementById("origen").innerHTML += `${trip["origen"]["ciudad"]}, ${trip["origen"]["pais"]}`
    document.getElementById("destino").innerHTML += `${trip["destino"]["ciudad"]}, ${trip["destino"]["pais"]}`
}

function formatDate(date){
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    let formatDate = new Date(date)
    return formatDate.toLocaleDateString("es-ES", options)
}

function displayDates(trip){
    document.getElementById("fecha-ida").innerHTML += `${formatDate(trip["fechaIda"])}`
    document.getElementById("fecha-regreso").innerHTML += `${formatDate(trip["fechaRegreso"])}`
    
}

function displayOthers(trip, key){
    document.getElementById(key).innerHTML += `${trip[key]}`
}

const trip = getTrip(id)
displayPaisCiudad(trip)
displayDates(trip)
displayOthers(trip, "espacio")
displayOthers(trip, "kilos")
displayOthers(trip, "email")
displayOthers(trip, "celular")
