var formulario = document.getElementById('form-login')
var pass = document.getElementById('pass-login')
var nombre = document.getElementById('nombre-login')
var email = document.getElementById('email-login')
var error1 = document.getElementById('span-error1')
var error2 = document.getElementById('span-error2')
var error3 = document.getElementById('span-error3')
var error4 = document.getElementById('span-error4')

formulario.addEventListener('submit',function(evento){
    evento.preventDefault()

    var err1 = "";
    var err2 = "";
    var err3 = "";
    var err4 = "";

    var expMay = RegExp("[A-Z]")
    var expMin = RegExp("[a-z]")
    var expNum = RegExp("[0-9]")
    var expEmail = RegExp("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}")

    if(!email.value.match(expEmail)){
        err4 = "Formato de correo invalido"
    }

    if(!nombre.value.match(expMay)){
        err1 = "Debe tener mayuscula"
    }if(!nombre.value.match(expMin)){
        err2 = "Debe tener minuscula"
    }if(!nombre.value.match(expNum)){
        err3 = "Debe tener numero"
    }

    if(err1 != ""){
        error1.style.display=""
        error1.innerHTML=err1
    }else{
        error1.style.display="none"
        error1.innerHTML=""
    }
    
    if(err2 != ""){
        error2.style.display=""
        error2.innerHTML=err2
    }else{
        error2.style.display="none"
        error2.innerHTML=""
    }
    
    if(err3 != ""){
        error3.style.display=""
        error3.innerHTML=err3
    }else{
        error3.style.display="none"
        error3.innerHTML=""
    }
    
    if(err4 != ""){
        error4.style.display=""
        error4.innerHTML=err4
    }else{
        error4.style.display="none"
        error4.innerHTML=""
    }
    
    if(err1 == "" && err2 == "" && err3 == "" && err4 == ""){
        error1.style.display="none"
        error2.style.display="none"
        error3.style.display="none"
        error4.style.display="none"
        window.comunicacion.registroValido([nombre.value,pass.value]);
    }

/*
    if(err1 == "" && err2 == "" && err3 == "" && err4 == ""){
        window.comunicacion.registroValido([nombre.value,pass.value]);
    }else{
        errores.style.display=""
        errores.innerHTML=error
    }*/
    
    
})