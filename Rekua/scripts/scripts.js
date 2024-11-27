window.onload = function(){
    let botoia = document.getElementsByClassName('submit');
    botoia.addEventListener('click', iniciar());
}
// inicializa la aplicacion y manjeadores de eventos
function iniciar(){
    let kontaktuak = [];
    let form = document.getElementsByClassName('formulario');
    let izenaDiv = document.getElementsByClassName('nombre');
    let abizenaDiv = document.getElementsByClassName('abizena').value;
    let aliasDiv = document.getElementsByClassName('alias');
    let emailDiv = document.getElementsByClassName('email');
    let postuaDiv = document.getElementsByClassName('usuario');
    let tlfButton = document.getElementsByClassName('opcion_tlf');
    tlfButton.addEventListener('click', mostrarBotonera());
    let kontaktua = new Kontaktua(izenaDiv.value, abizenaDiv.value, aliasDiv.value, emailDiv.value, postuaDiv.value,);
    validar(kontaktua, kontaktuak)
    console.log('asdsad');
}

// inicializa la ventana nueva con los botones, selector de prefijo e inicializa los manejadores de eventos asociados
function mostrarBotonera() {
    let lehioa = new Window;
    lehioa.contentText = '<label>Pais:</label><select onchange="mostrarNumero(this.value)"><option value="01">EH</option><div id="bandera"></div></select><button>0</button><button>1</button><button>2</button><button>3</button><button>4</button><button>5</button><button>6</button><button>7</button><button>8</button><button>9</button><button>0</button>';
}

// carga la lista de paises y banderas en el selector de prefijo
function cargaPaisesBandera() {

}

// carga las imagenes de las banderas según la selección realizada
function cargaBandera() {

}

// muestra el numero + prefijo en el formulario principal
function mostrarNumero(prefix){
    let banderDiv = document.getElementById('bandera');
    banderDiv.innerHTML = `<img src="./flags/${prefix}"/>`;
}

// borra el numero del formulario principal
function borrarNumero(kontaktuak, kontaktua) {
    let index = kontaktuak.indexOf(kontaktua);
    kontaktuak.splice(index, 1);
    cargaContacto(kontaktuak);
}

// garda nuevo contacto, si el formulario es correcto y si no existe un 'alias'similar
function guardarContacto(kontaktuak, kontaktua){
    kontaktuak.push(kontaktua);
    cargaContacto(kontaktuak);
}

// comprueba si el formulario está rellenado correctamente
function validar(kontaktuak, kontaktua){
    if (empty(kontaktua.izena) || empty(kontaktua.abizena) || empty(kontaktua.alias) || empty(kontaktua.email) || empty(kontaktua.postua)){
        alert('Incompleted form');
    }
    else {
        guardarContacto(kontaktuak, kontaktua)
    }
}

// carga la información en los campos del formulario segun el contacto seleccionado
function cargaContacto(kontaktuak) {
    let select = document.getElementsByName('contactos');
    kontaktuak.forEach(kontaktua => {
        let option = createElement("option");
        option.contentText(kontaktua.izena);
        select.appendChild(option);
    });
}

class Kontaktua{
    constructor (izena, abizena, alias, email, postua){
        this.izena = izena;
        this.abizena = abizena;
        this.alias = alias;
        this.email = email;
        this.postua = postua;
    }

}