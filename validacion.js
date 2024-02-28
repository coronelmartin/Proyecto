function validarFormulrio(e){
    debugger;
    console.log(e);
    let Nombre = document.getElementById("Nombre").value.trim();
    if(!Nombre){
        alert("El usuario no ha escrito un Nombre");
        return;
    }
    let Apellido= document.getElementById("Apellido").value.trim();
    if(!Apellido){
        alert("El usurio no ha escrito un Apellido");
        return;
    }
    let Correo_electronico= document.getElementById("Correo_electronico").value.trim();
    if(!Correo_electronico){
        alert("El usuario no ha escrito un Correo");
        return;
    }
    let Contraseña= document.getElementById("Contraseña").value.trim();
    if(!Contraseña){
        alert("El usuario no ha escrito una Contraseña");
        return;
    }

    let repetir_Contraseña= document.getElementById("repetir-contraseña").value.trim();
    if(!repetir_Contraseña){
        alert("El usuario no ha escrito ha repetido su contraseña");
        return;
    }

    //e.preventDeFault();
    e.stopInmediatePropagation();
}
document.addEventListener("DOMContentLoaded", function(){   
    document.getElementById("frmRegistro").addEventListener("submit", validarFormulrio);
});

