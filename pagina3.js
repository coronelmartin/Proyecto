let modal = document.getElementById("miModal");
let btnAbrir = document.getElementById("btnAbrirModal");
let btnCerrar = document.getElementById("btnCerrarModal");

btnAbrir.onclick = function(){
    modal.style.display = "block";
}

btnCerrar.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal) {
        modal.style.display = "none";
    }
}
