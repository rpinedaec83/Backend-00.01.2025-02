// console.log("Inicio de la Aplicacion");
// if (typeof Storage !== "undefined") {
//   console.log("Si se puede usar el storage");
// } else {
//   console.log("No se peude usar el storage");
// }

// let arrPersonasEnMemoria = JSON.parse(localStorage.getItem("propietarios"))

// arrPersonasEnMemoria.forEach(element => {
//     console.log(element.nombres)
// });

// localStorage.setItem("nombre","Roberto")
// swal.fire({
//     title: "Ingresa tus datos",
//     icon: "info",
//     text: localStorage.getItem("nombre")
// })
// localStorage.removeItem("nombre")

// class Persona{
//     constructor(nombres, apellidos){
//         this.nombres = nombres;
//         this.apellidos = apellidos
//     }
// }

// let arrPersonas = [];
// let objPersona1 =new Persona("Roberto", "Pineda");
// let objPersona2 =new Persona("David", "Lopez");
// let objPersona3 =new Persona("Juan", "Perez");

// arrPersonas.push(objPersona1);
// arrPersonas.push(objPersona2);
// arrPersonas.push(objPersona3);

// console.log(arrPersonas)

// //localStorage.setItem("propietarios", JSON.stringify(arrPersonas))

// console.log(JSON.stringify(objPersona1));

// let strClima = `
// {
//     "ubicacion": "Lima",
//     "temp":{
//         "celcius": 25,
//         "farengieftrter": 50
//     }
// }
// `;

// let objClima = JSON.parse(strClima);

// console.log(objClima)

// let objClima2 = {ubicacion: "Lima", temp: {celcius: 25, farengieftrter: 50}};

// console.log(objClima2.temp.celcius)

// //sessionStorage.setItem("clima", JSON.stringify(objClima2))

class Gundam {
    #isCompleted = false;
  constructor(nombre, descripcion, escala, imagen, isCustom, custom) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.escala = escala;
    this.imagen = imagen;
    this.isCustom = isCustom;
    this.custom = custom;
  }
  getIsCompleted(){
    return this.#isCompleted;
  }

  setIsCompleted(value){
    this.#isCompleted = value;
  }
}

function IsCustomCheck(event){

    if(event.checked){
        $("#custom").toggle(1000);
       // document.getElementById("custom").style.display = "block"
    }
    else{
        $("#custom").toggle(1000);
       // document.getElementById("custom").style.display = "none"
    }
   
}

let arrGundams = [];
document.getElementById("btnIniciar").addEventListener("click",async (e)=>{
    console.log("Hizo Click")
    const {value: formValues}= await Swal.fire({
        title: "Ingresa tus datos",
        icon: "info",
        showCloseButton:true,
        showCancelButton:true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        html: `<!-- Text input-->
<div class="form-group">
<div >
<input id="nombre" name="nombre" type="text" placeholder="Escribe el nombre del Kit" class="form-control input-md">

</div>
</div>

<!-- Text input-->
<div class="form-group">
<div >
<input id="descripcion" name="descripcion" type="text" placeholder="Escribe la descripcion de tu kit " class="form-control input-md">

</div>
</div>

<!-- Text input-->
<div class="form-group">
<div >
<input id="escala" name="escala" type="text" placeholder="Escribe la escala de tu kit" class="form-control input-md">

</div>
</div>

<!-- Text input-->
<div class="form-group">
<div >
<input id="imagen" name="imagen" type="text" placeholder="Escribe la imagen de tu kit" class="form-control input-md">

</div>
</div>

<div class="form-group">

<label class="checkbox-inline" for="checkboxes-0">
    <input type="checkbox" name="checkboxes" id="chkIsCustom" onchange="IsCustomCheck(this)" value="SI">
    SI es custom
  </label>


</div>

<!-- Text input-->
<div class="form-group" id="custom" style="display: none;">
<div >
<input id="escala" name="escala" type="text" placeholder="Escribe el custom que le hiciste a tu kit" class="form-control input-md">

</div>
</div>

</div>`,
        preConfirm:()=>{
            return {
                //nombre, descripcion, escala, imagen, isCustom, custom
                nombre: $("#nombre").val(),
                descripcion: $("#descripcion").val(),
                escala: $("#escala").val(),
                imagen: $("#imagen").val(),
                isCustom: $("#isCustom").val(),
                custom: $("#custom").val()
            }
        }
    });

    if(formValues){
        let objGundam = new Gundam(
            formValues.nombre,
            formValues.descripcion,
            formValues.escala,
            formValues.imagen,
            formValues.isCustom,
            formValues.custom
        );
       arrGundams.push(objGundam);
        
    }
    console.log(arrGundams)
})