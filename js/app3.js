// variables
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const usuario = document.getElementById('ccusuario');
const fecha = document.getElementById('f_nac');
const password = document.getElementById('ccpaswd');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-formulario');
const resetBtn = document.getElementById('resetBtn');
const verpassword = document.getElementById('ccpaswd2');



// event Listener

eventListeners();

function eventListeners() {
     // Inicio de la aplicación y deshabilitar submit
     document.addEventListener('DOMContentLoaded', inicioApp);

     // Campos del formulario
     nombre.addEventListener('blur', validarCampo);
     apellido.addEventListener('blur', validarCampo);
     usuario.addEventListener('blur', validarCampo);
     fecha.addEventListener('blur', validarCampo);
     password.addEventListener('blur', validarCampo);
     verpassword.addEventListener('blur', validarCampo);
     telefono.addEventListener('blur', validarCampo); 
     email.addEventListener('blur', validarCampo); 

     // Boton de enviar en el submit
     formularioEnviar.addEventListener('submit', enviarFormulario);

     // Boton de reset
     resetBtn.addEventListener('click', resetFormulario);
}



// funciones
function inicioApp() {
     // deshabilitar el envio del formulario
     btnEnviar.disabled = true;
}

// Validación de los campos del formulario
function validarCampo() {

    // Validar nombre
     if(this.id === 'nombre') {
          validarNombre(this);
     }
    
    // Validar apellido
     if(this.id === 'apellido') {
          validarApellido(this);
     }

     // Validar fecha_nac
     if(this.id === 'f_nac') {
          validarFecha(this);
     }

      // Validar email
     if(this.id === 'email') {
          validarEmail(this);
     }
    
     // Validar usuario
     if(this.id === 'ccusuario') {
          validarUsuario(this);
     }
    
    // Validar la seguridad de la contraseña
     if(this.id === 'ccpaswd') {
          validarContraseña(this);
     } 
    
    // Validar que la contraseña sea la que se ingresó
     if(this.id === 'ccpaswd2') {
          validarVerContraseña(this);
     }
    
     // Validar numero telefónico
     if(this.id === 'telefono') {
          validarTelefono(this);
     }
    
     let errores = document.querySelectorAll('.error');

     if(nombre.value !== '' && apellido.value !== '' && usuario.value !== '' && fecha.value !== '' && password.value !== '' && verpassword.value !== '' && telefono.value !== '' && email.value !== '') {
          if(errores.length === 0) {
               btnEnviar.disabled = false;
          }
     }
}

// Resetear el formulario 
function resetFormulario(e) {
     formularioEnviar.reset();
     e.preventDefault();
}

// Cuando se envia el correo
function enviarFormulario(e) {
     // Spinner al presionar Enviar
     const spinnerGif = document.querySelector('#spinner');
     spinnerGif.style.display = 'block';

     // Gif de check que envia el formulario
     const enviado = document.createElement('img');
     enviado.src = '../Imagenes/mail.gif';
     enviado.style.display = 'block';

     // Ocultar Spinner y mostrar gif de enviado
     setTimeout(function() {
          spinnerGif.style.display = 'none';

          document.querySelector('#loaders').appendChild( enviado );

          setTimeout(function() {
               enviado.remove();
               formularioEnviar.reset();
          }, 5000);
     }, 3000);

     e.preventDefault();
}



// Validaciones y restricciones con respecto a los requerimientos de cada campo


function validarNombre(campo) {

     if(nombre.value.length > 0 && nombre.value.length < 26 ) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
          alert('Campo incorrecto, por favor asegúrese de ingresar un nombre que contenga máximo 25 caracteres');
     }
}

function validarApellido(campo) {

     if(apellido.value.length > 0 && apellido.value.length < 26 ) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
          alert('Campo incorrecto, por favor asegúrese de ingresar un apellido que contenga un máximo de 25 caracteres');
     }
}

function validarUsuario(campo) {
     if(usuario.value.length > 9 && usuario.value.length < 21 
        && usuario.value.indexOf('@')===-1 && usuario.value.indexOf('+')===-1 
        && usuario.value.indexOf('*')===-1 && usuario.value.indexOf('-')===-1 
        && usuario.value.indexOf('!')===-1 && usuario.value.indexOf('"')===-1 
        && usuario.value.indexOf('·')===-1 && usuario.value.indexOf('¡')===-1 
        && usuario.value.indexOf('$')===-1 && usuario.value.indexOf('^')===-1 
        && usuario.value.indexOf('%')===-1 && usuario.value.indexOf('`')===-1 
        && usuario.value.indexOf('&')===-1 && usuario.value.indexOf(',')===-1 
        && usuario.value.indexOf('/')===-1 && usuario.value.indexOf(';')===-1 
        && usuario.value.indexOf('(')===-1 && usuario.value.indexOf(':')===-1 
        && usuario.value.indexOf(')')===-1 && usuario.value.indexOf('<')===-1 
        && usuario.value.indexOf('?')===-1 && usuario.value.indexOf('>')===-1 
        && usuario.value.indexOf('[')===-1 && usuario.value.indexOf('{')===-1 
        && usuario.value.indexOf(']')===-1 && usuario.value.indexOf('}')===-1 
        && usuario.value.indexOf('÷')===-1 && usuario.value.indexOf('º')===-1 
        && usuario.value.indexOf('“')===-1 && usuario.value.indexOf('ª')===-1 
        && usuario.value.indexOf('”')===-1 && usuario.value.indexOf('¬')===-1 
        && usuario.value.indexOf('≠')===-1 && usuario.value.indexOf('|')===-1 
        && usuario.value.indexOf(' ')===-1) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
          alert('Campo incorrecto, por favor asegúrese de ingresar un usuario con almenos 10 caracteres de longitud y máximo 25 caracteres.\nRecuerde que solo se permite usar caracteres alfanuméricos en su nickname');
     }
}

function validarFecha(campo) {

     if(fecha.value.length >= 0) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
          alert('Campo incorrecto, por favor asegúrese de ingresar una fecha de nacimiento');
     }
}


function validarEmail(campo) {
     if(email.value.indexOf('@') !== -1 && email.value.length > 0 && email.value.length < 121 && email.value.indexOf('.') !== -1) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
          alert('Email incorrecto, por favor asegúrese de ingresar una direccion de correo con máximo 120 caracteres.\nRecuerde colocar @ => Ejemplo@correo.com');
     }
}
function validarContraseña(campo){    
    if(password.value.length > 14 && password.value.length < 21 
      && (password.value.indexOf('A') !==-1 || password.value.indexOf('B') !==-1 
      || password.value.indexOf('C') !==-1 || password.value.indexOf('D') !==-1 
      || password.value.indexOf('E') !==-1 || password.value.indexOf('F') !==-1 
      || password.value.indexOf('G') !==-1 || password.value.indexOf('H') !==-1 
      || password.value.indexOf('I') !==-1 || password.value.indexOf('J') !==-1 
      || password.value.indexOf('K') !==-1 || password.value.indexOf('L') !==-1 
      || password.value.indexOf('M') !==-1 || password.value.indexOf('N') !==-1 
      || password.value.indexOf('O') !==-1 || password.value.indexOf('P') !==-1 
      || password.value.indexOf('Q') !==-1 || password.value.indexOf('R') !==-1 
      || password.value.indexOf('S') !==-1 || password.value.indexOf('T') !==-1 
      || password.value.indexOf('U') !==-1 || password.value.indexOf('V') !==-1 
      || password.value.indexOf('W') !==-1 || password.value.indexOf('X') !==-1 
      || password.value.indexOf('Y') !==-1 || password.value.indexOf('Z') !==-1) 
      && (password.value.indexOf('0') !==-1 || password.value.indexOf('1') !==-1
      || password.value.indexOf('2') !==-1 || password.value.indexOf('3') !==-1 
      || password.value.indexOf('4') !==-1 || password.value.indexOf('5') !==-1
      || password.value.indexOf('6') !==-1 || password.value.indexOf('7') !==-1
      || password.value.indexOf('8') !==-1 || password.value.indexOf('9') !==-1)
      && (password.value.indexOf('#') !==-1 || password.value.indexOf('%') !==-1
      || password.value.indexOf('/') !==-1 || password.value.indexOf('&') !==-1)) {
         campo.style.borderBottomColor = 'green';
         campo.classList.remove('error');
    } else {
         campo.style.borderBottomColor = 'red';
         campo.classList.add('error');
         alert('Campo incorrecto, por favor asegúrese de ingresar una contraseña con al menos 15 caracteres alfanuméricos y no sobrepasarse de 20 caracteres de longitud.\nRecuerde que para cumplir con los parámetros de seguridad su contraseña debe contener mayúsculas, numeros, letras y/o los siguientes caracteres [#,%,/,&].'); 
    }
}

function validarVerContraseña(campo){
    if(password.value === verpassword.value) {
         campo.style.borderBottomColor = 'green';
         campo.classList.remove('error');
    } else {
         campo.style.borderBottomColor = 'red';
         campo.classList.add('error');
         alert('Campo incorrecto, por favor asegúrese de que la contraseña sea la misma que ingresó anteriormente');
    }
}


function validarTelefono(campo) {

     if(telefono.value.length > 0 && telefono.value.length < 21 ) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
          alert('Campo incorrecto, por favor asegúrese de ingresar un número telefónico que contenga máximo 20 caracteres numéricos.');
     }
}

function getDepartamentos(elSelect){
    
     console.log(elSelect.value)
     let url = 'https://www.datos.gov.co/resource/xdk5-pm3f.json?region='
     fetch(url+elSelect.value)
     .then(function(response) {
       return response.json();
     })
     .then(function(myJson) {
     
     var departamentos = [];
     myJson.forEach(item => {
        var deptOption = document.createElement("option");
        deptOption.className = 'dept_option'
        deptOption.value = item.departamento
        deptOption.text = item.departamento
        for (var i = -1; i < departamentos.length; i++) {
             if (departamentos.includes(deptOption.value) == false) {
               console.log('No Incluido');
               departamentos.push(deptOption.value)
               console.log(deptOption.value)
               departamento.prepend(deptOption)
             }
           }
         
        
     })
   });
   }
   /*        
     */
   function getDepartment(eSelect){
     console.log(eSelect.value)
     let url = 'https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento='+eSelect.value
   }
   
   function getMunicipios(elmSelect){
   
   console.log(elmSelect.value)
   let url = 'https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento='
   fetch(url+elmSelect.value)
   .then(function(response) {
     return response.json();
   })
   .then(function(myJson) {
   
   var municipios = [];
   myJson.forEach(item => {
      var munOption = document.createElement("option");
      munOption.className = 'municipio_option'
      munOption.value = item.municipio
      munOption.text = item.municipio
      for (var i = -1; i < municipios.length; i++) {
           if (municipios.includes(munOption.value) == false) {
             console.log('No Incluido');
             municipios.push(munOption.value)
             console.log(munOption.value)
             municipio.prepend(munOption)
           }
         }
   })
   });
   }
   
   function getmuni(emSelect){
     console.log(emSelect.value)
     let url = 'https://www.datos.gov.co/resource/xdk5-pm3f.json?municipio='+emSelect.value
   }
   
   $(document).ready(function(){
   $('.datepicker').datepicker();
 });




















