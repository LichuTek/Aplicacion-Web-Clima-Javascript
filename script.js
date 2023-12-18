let api_key = '2138df72473a5bfa14b47288f310e22c'
let difKelvin = 273.15



document.getElementById('botonBusqueda').addEventListener('click', () => {
    const lugar = document.getElementById('ciudadEntrada').value
    if(lugar){
        fetchDatosClima(lugar)
    }
})


function fetchDatosClima(lugar){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${lugar}&appid=${api_key}`)
        .then(response => response.json())
        .then(response => mostrarDatosClima(response)) 
}



function mostrarDatosClima(response){

    console.log(response)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ""


    const ciudadNombre = response.name
    const temp = response.main.temp
    const description = response.weather[0].description
    const country = response.sys.country


    const ciudadTitulo = document.createElement('h2')

    ciudadTitulo.textContent = `${ciudadNombre}, ${country}`

    const tempinfo = document.createElement('p')
    tempinfo.textContent = `La temperatura es de: ${Math.floor(temp - difKelvin)}`

    const descripcion = document.createElement('p')

    descripcion.textContent = `La descripcion meteorologica es: ${description}`


    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(tempinfo)
    divDatosClima.appendChild(descripcion)


}

