function generateCityCountryList() {
    let paisOrigen = document.getElementById('pais-origen')
    let ciudadOrigen = document.getElementById('ciudad-origen')
    let paisDestino = document.getElementById('pais-destino')
    let ciudadDestino = document.getElementById('ciudad-destino')
    let optionsPais = "<option>Elija un país...</option><br>";
    let optionCiudad = "<option>Elija una ciudad...</option><br>";
    for (let [key, value] of paisCapital) {
        optionsPais += `<option>${key}</option><br>`;
        optionCiudad += `<option>${value}</option><br>`;
    }
    paisOrigen.innerHTML = optionsPais
    ciudadOrigen.innerHTML = optionCiudad
    paisDestino.innerHTML = optionsPais
    ciudadDestino.innerHTML = optionCiudad
}

function automaticCitySelection(id) {
    let pais = document.getElementById(id)
    let selectedPais = pais.value
    if (id == 'pais-origen'){
        let ciudadOrigen = document.getElementById('ciudad-origen')
        ciudadOrigen.value = paisCapital.get(selectedPais) 
    } else {
        let ciudadDestino = document.getElementById('ciudad-destino')
        ciudadDestino.value = paisCapital.get(selectedPais) 
    }   
}

function automaticCountrySelection(id) {
    let ciudad = document.getElementById(id)
    let selectedCiudad = ciudad.value
    for (let [key, value] of paisCapital) {
        if (value == selectedCiudad) {
            if (id == 'ciudad-origen'){
                let paisOrigen = document.getElementById('pais-origen')
                paisOrigen.value = key 
            } else {
                let paisDestino = document.getElementById('pais-destino')
                paisDestino.value = key  
            }
        }
    }
}

generateCityCountryList()