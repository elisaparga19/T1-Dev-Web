function displayTrips(trips_list){
    let trips = document.getElementById("trips")
    let columns = document.getElementById("columns").children
    let rowsToDisplay = trips.innerHTML
    for (let i=0; i<trips_list.length; i++){
        let trip = trips_list[i]
        rowsToDisplay += `<tr id=${trip["id"]} onclick="addClick(${trip["id"]})">`
        for (let j=0; j<columns.length; j++){
            let column = columns[j]
            let columnHeader = column.id
            if (columnHeader == "origen" || columnHeader == "destino"){
                let ciudad = trip[columnHeader]["ciudad"]
                let pais = trip[columnHeader]["pais"]
                rowsToDisplay += `<td>${ciudad}, ${pais}</td>`
            }
            else {
                rowsToDisplay += `<td>${trip[columnHeader]}</td>`
            }          
        }
        rowsToDisplay += "</tr>"
    }
    trips.innerHTML = rowsToDisplay
}

function addClick(id){
    window.location.href=`informacion-viaje.html?id=${id}`
}

displayTrips(viajes)
