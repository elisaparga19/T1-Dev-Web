function displayOrders(orders_list){
    let orders = document.getElementById("orders")
    let columns = document.getElementById("columns").children
    let rowsToDisplay = orders.innerHTML
    for (let i=0; i<orders_list.length; i++){
        let order = orders_list[i]
        rowsToDisplay += `<tr id=${order["id"]} onclick="addClick(${order["id"]})">`
        for (let j=0; j<columns.length; j++){
            let column = columns[j]
            let columnHeader = column.id
            if (columnHeader == "origen" || columnHeader == "destino"){
                let ciudad = order[columnHeader]["ciudad"]
                let pais = order[columnHeader]["pais"]
                rowsToDisplay += `<td>${ciudad}, ${pais}</td>`
            } else if (columnHeader == "foto") {
                rowsToDisplay += `<td><img src="img/${order[columnHeader]}" width="120" height="120"></td>`
            }
            else {
                rowsToDisplay += `<td>${order[columnHeader]}</td>`
            }        
        }
        rowsToDisplay += "</tr>"
    }
    orders.innerHTML = rowsToDisplay
}

displayOrders(encargos)

function addClick(id){
    window.location.href=`informacion-encargo.html?id=${id}`
}