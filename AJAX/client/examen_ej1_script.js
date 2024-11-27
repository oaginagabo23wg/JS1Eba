window.onload = function (){
    inicio();
}
// inicialización (1 punto)
function inicio() {
    cargaDatos();
}

// carga de datos desde servidor local (1 puntos)
function cargaDatos() {
    const xhr = new XMLHttpRequest;
    xhr.open('GET', '../server/restaurantes.json');
    xhr.send();
    let restDiv = document.getElementById('restaurantes');
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            const json = JSON.parse(xhr.responseText);
            
            for (let item in json){
                let rango = json[item];

                for (let restaurantes in rango){
                    let restaurante = rango[restaurantes];
                    
                    // cargaRetaurantes(restaurante);
                    let optionak ='';
                    for (let i = 0; i < restaurante.lenght; i++){
                        let izena = restaurante.documentName;
                        optionak += `<option>${izena}</option>`;
                        // let option =  createElement('option');
                        // option.contentText(izena);
                        // option.value(izena);
                        // restDiv.appendChild(option);
                    }
                    restDiv.innerHTML = optionak;
                    
                    console.log(restaurantes);
                }
            }
        }
    }
    
}

// explotación de datos recibidos (1 punto)
function cargaMunicipios() {

}

// explotación de datos recibidos (1 punto)
function cargaRetaurantes(restaurante) {
}

// explotación de datos recibidos (1 punto)
function cargaInformacion() {

}