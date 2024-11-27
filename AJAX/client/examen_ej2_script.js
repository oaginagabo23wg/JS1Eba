// inicialización (1 punto)
function inicio() {
    const xhr = new XMLHttpRequest;
    cargaForecast(xhr);
}

// carga de datos desde servidor local (1 puntos)
function cargaForecast(xhr) {
    xhr.open('GET', '../server/sea_forecast.xml');
    xhr.send();
    let dataDiv = document.getElementById('label_fecha');
    let idiomaDiv = document.getElementById('idioma');
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            const request = xhr.responseXML;
            let forecast = request.getElementsByTagName('forecast');
            let datak = '';
            for (let i = 0; i < 3; i++){
                let fetxa = forecast[i].getElementsByTagName('fecha')[0].textContent;
                let defi = forecast[i].getElementsByTagName('forecastDescription')[0];
                console.log(defi.textContent);
                let weather = forecast[i].getElementsByTagName('fechweatherIcon')[0].textContent;
                let wind = forecast[i].getElementsByTagName('windIcon')[0].textContent;
                datak += `<button onclick="muestraForecast(${idiomaDiv.value},${defi} , ${weather}, ${wind} )">${fetxa}</button>`;
            }
            dataDiv.innerHTML = datak;
        }
    }
    
}
// explotación de datos recibidos (1,5 punto)
function muestraForecast(hizkuntza, defi, weather, wind) {
    let mostrar = document.getElementById('mostrar');
    mostrar.addEventListener('click', muestra_esconde(weather, wind))
    infoForecast(hizkuntza ,defi);
}

// explotación de datos recibidos (1,5 punto)
function infoForecast (hizkuntza, defi) {
    let div = document.getElementById('prevision_meteo');
    let defies = defi.getElementsByTagName('es')[0].textContent;
    let defieu = defi.getElementsByTagName('eu')[0].textContent;
    console.log(defi);
    if (hizkuntza === 'es'){
        div.innerHTML = defies;
    }else{
        div.innerHTML = defieu;
    }
}

// visibilidad apartado información (0,5 punto)
function muestra_esconde(weather, wind) {
    let div = document.getElementById('adicional');
    div.class('visible');
    let weaIcon = createElement('img');
    weaIcon.src(weather);
    let widIcon = createElement('img');
    weaIcon.src(wind);
    div.appendChild(weaIcon);
    div.appendChild(widIcon);
}