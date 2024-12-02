let kontaktuak = [];
let zenbakia = '';
window.onload = function(){
    let botoia = document.getElementsByName('submit')[0];
    botoia.addEventListener('click', iniciar);
    let ezabatu = document.getElementsByName('ezabatu')[0];
    ezabatu.addEventListener('click', borrarNumero);
    let tlfButton = document.getElementsByName('opcion_tlf')[0];
    tlfButton.addEventListener('click', mostrarBotonera);
}
// inicializa la aplicacion y manjeadores de eventos
function iniciar(){
    let form = document.getElementsByName('formulario')[0];
    let izenaDiv = document.getElementsByName('nombre')[0];
    let abizenaDiv = document.getElementsByName('apellido')[0];
    let aliasDiv = document.getElementsByName('alias')[0];
    let emailDiv = document.getElementsByName('email')[0];
    let postuaDiv = document.getElementsByName('usuario');
    let postuaValue = null;
    for (let i = 0; i < postuaDiv.length;i++){
        if (postuaDiv[i].checked){
            postuaValue=postuaDiv[i].value;
            break;
        }
    }
    let kontaktua = new Kontaktua(izenaDiv.value, abizenaDiv.value, aliasDiv.value, emailDiv.value, postuaValue, zenbakia);
    validar(kontaktua);
}

// inicializa la ventana nueva con los botones, selector de prefijo e inicializa los manejadores de eventos asociados
function mostrarBotonera() {
    zenbakia ='';
    let lehioa = window.open("", "lehioa", "width=200,height=400");
    lehioa.document.write('<label>Pais:</label><select onchange="mostrarNumero(this.value)"><option value="01">EH</option><option value="02">ES</option><option value="03">FR</option><option value="04">EH</option></select><div id="bandera"></div><br><input type="button" onclick="klikZenb(this.value)" value="1"/><input type="button" onclick="klikZenb(this.value)" value="2"/><input type="button" onclick="klikZenb(this.value)" value="3"/><br><input type="button" onclick="klikZenb(this.value)" value="4"/><input type="button" onclick="klikZenb(this.value)" value="5"/><input type="button" onclick="klikZenb(this.value)" value="6"/><br><input type="button" onclick="klikZenb(this.value)" value="7"/><input type="button" onclick="klikZenb(this.value)" value="8"/><input type="button" onclick="klikZenb(this.value)" value="9"/><br><input type="button" onclick="klikZenb(this.value)" value="0"/>');
    console.log('asdas');
}
function klikZenb(zenbaki){
    zenbakia += zenbaki;
    console.log(zenbakia);
    console.log('aqwezxcs');

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
function borrarNumero() {
    let kontaktua = document.getElementsByName('contactos')[0].value;
    let index = kontaktuak.indexOf(kontaktua);
    kontaktuak.splice(index, 1);
    cargaContacto(kontaktuak);
}

// garda nuevo contacto, si el formulario es correcto y si no existe un 'alias'similar
function guardarContacto(kontaktua){
    kontaktuak.push(kontaktua);
    cargaContacto(kontaktuak);
}

// comprueba si el formulario está rellenado correctamente
function validar(kontaktua){
    if (!kontaktua.izena || !kontaktua.abizena || !kontaktua.alias || !kontaktua.email || !kontaktua.postua){
        alert('Incompleted form');
    }
    else {
        guardarContacto(kontaktua);
    }
}

// carga la información en los campos del formulario segun el contacto seleccionado
function cargaContacto(kontaktuak) {
    let select = document.getElementsByName('contactos')[0];
    let contactos = document.createElement('option');
    select.innerHTML = '';
    contactos.textContent = 'Contactos';
    select.appendChild(contactos);
    kontaktuak.forEach(kontaktua => {
        let option = document.createElement("option");
        option.textContent = kontaktua.izena;
        select.appendChild(option);
    });
}

class Kontaktua{
    constructor (izena, abizena, alias, email, postua, zenbakia){
        this.izena = izena;
        this.abizena = abizena;
        this.alias = alias;
        this.email = email;
        this.postua = postua;
        this.zenbakia = zenbakia;
    }

}