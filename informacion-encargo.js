const params = new URLSearchParams(window.location.search)
const id = params.get("id")

function getOrder(orderId){
    for (let i=0; i<encargos.length; i++){
        let order = encargos[i]
        if (order["id"] == orderId) {
            return order
        }
    }
}

function displayPaisCiudad(order){    
    document.getElementById("origen").innerHTML += `${order["origen"]["ciudad"]}, ${order["origen"]["pais"]}`
    document.getElementById("destino").innerHTML += `${order["destino"]["ciudad"]}, ${order["destino"]["pais"]}`
}

function displayImage(order){
    let img = `<img src="img/${order["foto"]}" id="img" onclick="changeSize()" width="640" height="480"></img>`
    document.getElementById("foto").innerHTML += img
}

function changeSize(){
    image = document.getElementById("img")
    if (image.width == "640") {
        image.width = "1280"
        image.height = "1024"
    } else {
        image.width = "640"
        image.height = "480"
    }
}

function displayOthers(order, key){
    document.getElementById(key).innerHTML += `${order[key]}`
}

const order = getOrder(id)
displayOthers(order, "descripcion")
displayPaisCiudad(order)
displayOthers(order, "espacio")
displayOthers(order, "kilos")
displayOthers(order, "email")
displayOthers(order, "celular")
displayImage(order)
