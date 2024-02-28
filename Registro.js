import {Registro} from "Registro.html";
class formularRegistroFormulario {
    #Nombre = null;
    #Apellido=null;
    #correo_electronico = null;
    #contraseña = null;
    #confirmar_contraseña = null;
    #arrayRadioSexo=null;
    #enviar =null;


    constructor(){
        this.#Nombre = document.getElementById("nombre");
        this.#Apellido = document.getElementById("apellido");
        this.#correo_electronico = document.getElementById("correo electronico");
        this.#contraseña= document.getElementById("contraseña");
        this.#confirmar_contraseña = document.getElementById("confirmar contraseña");
        this.#arrayRadioSexo = document.getElementByname("sexo");
        this.#enviar = document.getElementById("enviar");
    }
    
    #obtenerSexoValue() {
        let valor = null;
        for(let item of this.#arrayRadioSexo){
            if(item.checket && item.value === "M"){
                valor = "masculino";
            }
            if(item.checket && item.value === "f"){
                valor = "femenino";
            }
        }
        return valor;
    }

    eventos() {
        const t = this;
        t.#Enviar.addEventListener("click", function(){
        t.#guardar();
        });

    }
        #guradar() {
            try {
                const nombre = this.#Nombre.value.trim();
                const apellido = this.#Apellido.value.trim();
                const correo_electronico = this.#correo_electronico.value.trim();
                const contraseña = this.#contraseña.value.trim();
                const confirmar_contraseña = this.#confirmar_contraseña.value.trim();
                const Sexo = this.#obtenerSexoValue();
                const usuario = new UsuarioDTO(nombre, apellido,correo_electronico,contraseña,confirmar_contraseña,Sexo);
                localStorage.setItem("usuario_guardado", usuario.obtenerJson());
                alert("se registro un usuario");
            } catch(error){
                this.#gestionarException(error);
                throw new Error(error);
            }

        }
    }
export{formularRegistroFormulario};
    
