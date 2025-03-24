class Phone{
    diagnostic = "";
    status = "";
    constructor(imei, brand, serie, serieNumber, sufix, reported, operativeSystem, diagnostic, status){
        this.imei = imei;
        this.brand = brand;
        this.serie = serie;
        this.serieNumber = serieNumber;
        this.sufix = sufix;
        this.reported = reported;
        this.operativeSystem = operativeSystem;
        this.diagnostic = diagnostic;
        this.status = status;
    }

    setStatus(status){
        this.status = status;
    }

    getStatus(){
        return this.status;
    }

    setDiagnostic(diagnostic){
        this.diagnostic = diagnostic;
    }

    getDiagnostic(){
        return this.diagnostic;
    }
}

class Human{
    constructor(dni, name, lastname, phoneNumber){
        this.dni = dni;
        this.name = name;
        this.lastname = lastname;
        this.phoneNumber = phoneNumber;
    }
}

class Customer extends Human{
    constructor(dni, name, lastname, phoneNumber){
        super(dni,name,lastname,phoneNumber);
    }
}

class Service{
    constructor(id, customer, phone, arrayOfPrices, arrayOfThingsToRepair, arrayOfSpareParts){
        this.id = id;
        this.customer = customer;
        this.phone = phone;
        this.arrayOfPrices = arrayOfPrices;
        this.arrayOfThingsToRepair = arrayOfThingsToRepair;
        this.arrayOfSpareParts = arrayOfSpareParts;
    }

    totalPrice(){
        let sum = 0;

        for(let i = 0; i < this.arrayOfPrices.length; i++ ){
            sum += this.arrayOfPrices[i];
        }

        return sum;
    }

    listOfThingsToRepairDOM(){
        let allText = "";

        if(this.arrayOfThingsToRepair.length > 0){
            for(let i = 0; i < this.arrayOfThingsToRepair.length; i++){
                allText += (`${i+1} - ${this.arrayOfThingsToRepair[i]}<br>`)
            }
        } else{
            allText = "No se registro nada que se deba reparar"
        }

        return allText;
    }

    listOfThingsToRepairAndPricesDOM(){
        let allText = "";

        if(this.arrayOfThingsToRepair.length > 0){
            for(let i = 0; i < this.arrayOfThingsToRepair.length; i++){
                allText += (`${i+1} - ${this.arrayOfThingsToRepair[i]} -> S/. ${this.arrayOfPrices[i]}<br>`);
            }
        } else{
            allText = "No se registro nada que se deba reparar ni cobrar";
        }

        return allText;
    }

    listOfSparePartsDOM(){
        let allText = "";

        for(let i = 0; i < this.arrayOfSpareParts.length; i++){
            allText += (`${i+1} - ${this.arrayOfSpareParts[i]}<br>`)
        }

        return allText;
    }
}

class Central {
    branches = [];

    constructor(name) {
        this.name = name;
    }

    guardarEnLocalStorage() {
        let savedCenters = JSON.parse(localStorage.getItem("Centrales")) || [];
        if (!savedCenters.some(central => central.name === this.name)) {
            savedCenters.push({ name: this.name });
            localStorage.setItem("Centrales", JSON.stringify(savedCenters));
        }
    }

    agregarSucursal(branch) {
        this.branches.push(branch);

        // Obtener las sucursales guardadas o inicializar un arreglo vacío
        let savedBranches = JSON.parse(localStorage.getItem("Sucursales")) || [];

        // Crear un nuevo objeto con los datos de la sucursal
        let newBranch = {
            nombre: branch.name,
            direccion: branch.direction,
            contacto: branch.contact,
            central: this.name
        };

        // Verificar si la sucursal ya existe en el localStorage
        let branchExists = savedBranches.some(sucursal => 
            sucursal.nombre === newBranch.nombre && sucursal.central === newBranch.central
        );

        // Si no existe, agregarla al arreglo
        if (!branchExists) {
            savedBranches.push(newBranch);
            localStorage.setItem("Sucursales", JSON.stringify(savedBranches));
        }
    }
}

class Tecnico {
  constructor(name, skills = []) {
    this.name = name;
    this.skills = skills;
  }

  tieneHabilidad(sistema) {
    return this.skills.includes(sistema);
  }
}

class Sucursal {
    technicians = [];
    tickets = [];
    contact = "";
    name = "";
    direction = "";
    central;
  
    constructor(name, direction, contact, central) {
      this.name = name;
      this.direction = direction;
      this.contact = contact;
      this.central = central;
    }
  
    addTechnical(technical) {
      this.technicians.push(technical);
    }

    buscarTecnicoPorHabilidad(sistema) {
      return this.technicians.find(tecnico => tecnico.tieneHabilidad(sistema));
    }

    agregarTicket(ticket) {
      this.tickets.push(ticket);
    }
}

//Inicializar los datos para hacerlos globales
let customersPhone = null;
let theCustomer = null;
let theService = null;
let selectedCentral = null;
let selectedBranch = null;

let LimaCentral = new Central("Lima Central");
LimaCentral.guardarEnLocalStorage();

let sucursalAte = new Sucursal("GuruTech - Ate", "Gloria Grande", "943-391-168", LimaCentral);
let sucursalSantaAnita = new Sucursal ("GuruTech - Santa Anita", "Santa Anita", "943-564-663", LimaCentral);
let sucursalVitarte = new Sucursal("GuruTech - Vitarte", "Vitarte", "943-564-168", LimaCentral);

LimaCentral.agregarSucursal(sucursalAte);
LimaCentral.agregarSucursal(sucursalSantaAnita);
LimaCentral.agregarSucursal(sucursalVitarte);

let tecnico1Ate = new Tecnico("Carlos Pérez", ["ios", "android"]);
let tecnico2Ate = new Tecnico("María López", ["android"]);
let tecnico3Ate = new Tecnico("Javier Ríos", ["ios"]);

let tecnico1SantaAnita = new Tecnico("Ana Torres", ["ios", "android"]);
let tecnico2SantaAnita = new Tecnico("Pedro Martínez", ["ios"]);
let tecnico3SantaAnita = new Tecnico("Luisa Gómez", ["android"]);

let tecnico1Vitarte = new Tecnico("Jorge Salas", ["ios", "android"]);
let tecnico2Vitarte = new Tecnico("Sofía Mendoza", ["android"]);
let tecnico3Vitarte = new Tecnico("Diego Castro", ["ios"]);

sucursalAte.addTechnical(tecnico1Ate);
sucursalAte.addTechnical(tecnico2Ate);
sucursalAte.addTechnical(tecnico3Ate);

sucursalSantaAnita.addTechnical(tecnico1SantaAnita);
sucursalSantaAnita.addTechnical(tecnico2SantaAnita);
sucursalSantaAnita.addTechnical(tecnico3SantaAnita);

sucursalVitarte.addTechnical(tecnico1Vitarte);
sucursalVitarte.addTechnical(tecnico2Vitarte);
sucursalVitarte.addTechnical(tecnico3Vitarte);

let TrujilloCentral = new Central("Trujillo Central");
TrujilloCentral.guardarEnLocalStorage();

let sucursalCayma = new Sucursal("GuruTech - Cayma", "Cayma", "943-391-663", TrujilloCentral);
let sucursalYanahuara = new Sucursal("GuruTech - Yanahuara", "Yanahuara", "953-301-168", TrujilloCentral);
let sucursalHunter = new Sucursal("GuruTech - Hunter", "Hunter", "953-564-663", TrujilloCentral);

TrujilloCentral.agregarSucursal(sucursalCayma);
TrujilloCentral.agregarSucursal(sucursalYanahuara);
TrujilloCentral.agregarSucursal(sucursalHunter);

let tecnico1Cayma = new Tecnico("Ricardo Flores", ["ios", "android"]);
let tecnico2Cayma = new Tecnico("Valeria Quispe", ["android"]);
let tecnico3Cayma = new Tecnico("Eduardo Chávez", ["ios"]);

let tecnico1Yanahuara = new Tecnico("Gabriela Ríos", ["ios", "android"]);
let tecnico2Yanahuara = new Tecnico("Fernando Aguilar", ["ios"]);
let tecnico3Yanahuara = new Tecnico("Mónica Torres", ["android"]);

let tecnico1Hunter = new Tecnico("Sebastián Paredes", ["ios", "android"]);
let tecnico2Hunter = new Tecnico("Andrea Huamaní", ["android"]);
let tecnico3Hunter = new Tecnico("Lucas Ramírez", ["ios"]);

sucursalCayma.addTechnical(tecnico1Cayma);
sucursalCayma.addTechnical(tecnico2Cayma);
sucursalCayma.addTechnical(tecnico3Cayma);

sucursalYanahuara.addTechnical(tecnico1Yanahuara);
sucursalYanahuara.addTechnical(tecnico2Yanahuara);
sucursalYanahuara.addTechnical(tecnico3Yanahuara);

sucursalHunter.addTechnical(tecnico1Hunter);
sucursalHunter.addTechnical(tecnico2Hunter);
sucursalHunter.addTechnical(tecnico3Hunter);


//Revisar si esta reportado el equipo
const checkReport = () => {
    if(customersPhone.reported) {
        Swal.fire({
            title: "Telefono reportado!",
            icon: "question",
            text: `El equipo ${customersPhone.brand} ${customersPhone.serie} ${customersPhone.serieNumber} ${customersPhone.sufix} del cliente ${theCustomer.name} ${theCustomer.lastname} ha sido reportado, por ende, no se puede proceder con la revisión ni reparación`,
            showCloseButton: true
        });
    } else{
        Swal.fire({
            title: "Telefono limpio!",
            icon: "success",
            text: `El equipo ${customersPhone.brand} ${customersPhone.serie} ${customersPhone.serieNumber} ${customersPhone.sufix} del cliente ${theCustomer.name} ${theCustomer.lastname} no ha sido reportado`,
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonText: `Cancelar la reparación`,
            confirmButtonText: `Proceder con el diagnostico`
        }).then((result) => {
            if(result.isConfirmed){
                customersPhone.setStatus("Ingresado");
                $("#stateLabel").text(`Estado del equipo: ${customersPhone.getStatus()}`);

                $("#phoneData, #customerData").toggle("slow");
                $("#fixDetails").toggle("slow");
                $("#secondSomeSpace").hide();
                $("#centralAndBranchDiv").toggle("slow");
                
                $("#diagnosticButton").prop("disabled", false);
                $("#saveButton").prop("disabled", true);
                const diagnosticDesc = document.getElementById("diagnosticDesc");
                diagnosticDesc.innerHTML = `Diagnóstico de - <strong>${customersPhone.brand} ${customersPhone.serie} ${customersPhone.serieNumber} ${customersPhone.sufix}</strong>`;



            }else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: 'Acción cancelada',
                    text: 'No se realizó ninguna acción.',
                    icon : 'error'
                });
            }
        })
    }
}

//Revisar si se han rellenado los espacios necesarios " * "
const verifyEverythingFilled = () => {
    let values = ["#imei", "#brand", "#serie", "#serieNumber", "#customerDNI", "#customerName", "#customerLastname", "#customerPhoneNumber", "#operativeSystem"];
        if ( values.some(id => $(id).val().trim() === "") || centralSelect.value == "" || branchSelect.value == "") {
            
            Swal.fire({ title: "Falta información", text: "Completa todos los campos.", icon: "warning" });
            return false;
        }
    return true;
};

const saveButton = () => {
    if (!verifyEverythingFilled()) return;

    customersPhone = new Phone($("#imei").val(), $("#brand").val(), $("#serie").val(), $("#serieNumber").val(), $("#sufix").val(), $("#reportedCheckbox").prop("checked"), $("#operativeSystem").val());
    theCustomer = new Customer($("#customerDNI").val(), $("#customerName").val(), $("#customerLastname").val(), $("#customerPhoneNumber").val());

    checkReport();

    console.log(customersPhone);
    console.log(theCustomer);

    console.log("Datos guardados correctamente.");
};

function diagnosticButton() {
    if (!customersPhone || !theCustomer) {
        Swal.fire({
            title: "Error",
            text: "Debes guardar los datos antes de describir.",
            icon: "error"
        });
        return;
    }
    
    customersPhone.setDiagnostic( $("#diagnosticInput").val() );
    let detailsInput = $("#detailsInput").val();
    if (detailsInput.trim() == "") {
        Swal.fire({
            title: "Error",
            text: "No ha descrito nada.",
            icon: "error"
        });
    } else {
        customersPhone.setStatus("Revisado");
        $("#stateLabel").text(`Estado del equipo: ${customersPhone.getStatus()}`);

        let allDescriptions = [];
        let allPrices = [];
        let allSpareParts = [];
    
        detailsInput.split(',').forEach(element => {
            let [description, price] = element.split('-').map(part => part.trim());
            if (description && price) {
                allDescriptions.push(description);
                allPrices.push(Number(price));
            }
        });

        let sparePartsInput = $("#sparePartsInput").val();

        sparePartsInput.split(',').forEach(element => {
            allSpareParts.push(element);
        })
        
        //Si bien he dado como un valor predefinido de "001" al id del servicio
        //eso debería cambiar si se trabaja con una base de datos
        //ya que se extraería de la base de datos el id del nuevo servicio
        //El "001" solo es un referencial
        theService = new Service("001",theCustomer,customersPhone, allPrices, allDescriptions, allSpareParts);
        
        Swal.fire({
            title: "Confirmación",
            text: `El cliente debe pagar el 50% del costo de la reparación, el monto es de S/. ${(theService.totalPrice())/2}, y una confirmación escrita, dale click al botón de confirmación si acepto las condiciones el cliente`,
            icon: "info",
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if(result.isConfirmed){
                customersPhone.setStatus("En taller");
                $("#stateLabel").text(`Estado del equipo: ${customersPhone.getStatus()}`);

                $("#workshopPhraseCustomerData").html(
                    `<strong>El cliente ${theCustomer.name} ${theCustomer.lastname} ha dado su consentimiento sobre la reparación del equipo ${customersPhone.brand} ${customersPhone.serie} ${customersPhone.serieNumber} ${customersPhone.sufix}</strong>`
                );
            
                $("#workshopPhraseDescription").html(`
                    <strong>Diagnóstico:</strong> ${customersPhone.diagnostic} <br><br>
                    <strong>Piezas usadas para la reparación:</strong><br>
                    ${theService.listOfSparePartsDOM()}<br>
                    --------------------------- <br>
                    <strong>Cosas que se deben reparar:</strong><br>
                    ${theService.listOfThingsToRepairAndPricesDOM()}
                    --------------------------- <br>
                    <strong>Por un costo total de:</strong> S/. ${theService.totalPrice()}<br>
                    <strong>El cliente canceló el 50% del costo total:</strong> S/. ${theService.totalPrice() / 2}<br>
                    <strong>Contacte al siguiente número para informar al cliente:</strong> ${theCustomer.phoneNumber}
                `);

                $("#workshopDiv").toggle("slow");
                $("#diagnosticButton").prop("disabled",true);
                $("#readyToDeliver").prop("disabled", false);
                
                $("#fixDetails").toggle("slow");

            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({title: "Cancelación", text: "El cliente se nego a continuar, que vuelva pronto"})

                $("#cancelH2").html(
                    `El cliente ${theCustomer.name} ${theCustomer.lastname} ha cancelado la reparación del equipo ${customersPhone.brand} ${customersPhone.serie} ${customersPhone.serieNumber} ${customersPhone.sufix}`
                );
            
                $("#cancelPhraseOfFix").html(`
                    <strong>Siendo el diagnóstico:</strong> ${customersPhone.diagnostic}<br>
                    <strong>Y necesitando las piezas:</strong><br>
                    ${theService.listOfSparePartsDOM()}<br>
                    --------------------------- <br>
                    <strong>Cosas que se debían reparar:</strong><br>
                    ${theService.listOfThingsToRepairAndPricesDOM()}<br>
                    --------------------------- <br>
                    <strong>Por un costo total de:</strong> S/. ${theService.totalPrice()}
                `);
                $("#fixDetails").toggle("slow");
                $("#cancelDiv").toggle("slow");
                $("#diagnosticButton").prop("disabled", true);
                customersPhone.setStatus("");
                $("#stateLabel").text(`Estado del equipo: ${customersPhone.getStatus()}`);
            }
        })
    }
}

const restart = () => {
    let customersPhone = null;
    let theCustomer = null;
    let theService = null;
    let selectedCentral = null;
    let selectedBranch = null;

    $("#stateLabel").text("Estado del equipo: ");
    $("#imei, #brand, #serie, #serieNumber, #sufix, #customerDNI, #customerName, #customerLastname, #customerPhoneNumber, #diagnosticInput, #detailsInput, #sparePartsInput, #operativeSystem").val("");
    $("#phoneData, #customerData, #workshopDiv").hide();
    $("#secondSomeSpace").show();
    $("#cancelDiv").hide();
    $("#phoneData, #customerData").show();
    $("#saveButton").prop("disabled", false);
    $("#readyToDeliver, #deliveredButton").prop("disabled", true);
    $("#centralAndBranchDiv").show();

    centralSelect.value = "";
    branchSelect.value = "";
}

let readyToDeliver = () => {
    Swal.fire({
        title: "Confirmación de entrega",
        html: `
            <h3>Datos del Cliente</h3>
            <p><strong>Nombre:</strong> ${theCustomer.name} ${theCustomer.lastname}</p>
            <p><strong>DNI:</strong> ${theCustomer.dni}</p>
            <p><strong>Teléfono:</strong> ${theCustomer.phoneNumber}</p>

            <hr>

            <h3>Datos del Teléfono</h3>
            <p><strong>Marca:</strong> ${customersPhone.brand}</p>
            <p><strong>Modelo:</strong> ${customersPhone.serie} ${customersPhone.serieNumber} ${customersPhone.sufix}</p>
            <p><strong>IMEI:</strong> ${customersPhone.imei}</p>
            <p><strong>Sistema operativo (OS)</strong> ${customersPhone.operativeSystem}

            <hr>

            <h3>Datos del Servicio</h3>
            <p><strong>Id del servicio:</strong> ${theService.id}</p>
            <p><strong>Diagnóstico:</strong> ${customersPhone.getDiagnostic()}</p>
            <p><strong>Reparaciones realizadas:</strong><br> ${theService.listOfThingsToRepairAndPricesDOM()}</p>
            <p><strong>Repuestos usados:</strong><br> ${theService.listOfSparePartsDOM()}</p>

            <hr>

            <h3>Datos de la sucursal y de la central </h3>
            <p><strong>Nombre de la sucursal:</strong> ${selectedBranch.name}</p>
            <p><strong>Dirección de la sucursal:</strong> ${selectedBranch.direction}</p>
            <p><strong>Número de contacto de la sucursal:</strong> ${selectedBranch.contact}</p>
            <p><strong>Nombre de la central:</strong> ${selectedCentral.name}

            <hr>

            <p><strong>Total a pagar:</strong> S/. ${theService.totalPrice()}</p>
            <p><strong>Pago restante:</strong> S/. ${theService.totalPrice() / 2}</p>
        `,
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Confirmar Entrega",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            customersPhone.setStatus("Entregado");

            const stateLabel = document.getElementById("stateLabel");
            stateLabel.innerHTML = `${customersPhone.getStatus()}`;

            Swal.fire({
                title: "Teléfono Entregado",
                text: `El teléfono de ${theCustomer.name} ha sido entregado con éxito.`,
                icon: "success"
            });
            // Reiniciar los datos después de la entrega
            restart();
        }
    });
};

const centralSelect = document.getElementById("centralSelect");
const branchSelect = document.getElementById("branchSelect");

// 🔹 Cargar centrales desde localStorage y convertir a instancias de Central
function cargarCentrales() {
    let centralesGuardadas = JSON.parse(localStorage.getItem("Centrales")) || [];

    centralSelect.innerHTML = '<option value="">-- Seleccione una central --</option>';
    branchSelect.innerHTML = '<option value="">-- Seleccione una sucursal --</option>';
    
    centralesGuardadas.forEach(centralData => {
        let option = document.createElement("option");
        option.value = centralData.name;
        option.textContent = centralData.name;
        centralSelect.appendChild(option);
    });
}

// Función para cargar las sucursales en el select
function cargarSucursales(centralNombre) {
    // Obtener las sucursales guardadas en localStorage
    let sucursales = JSON.parse(localStorage.getItem("Sucursales")) || [];

    // Filtrar las sucursales que pertenecen a la central seleccionada
    let sucursalesFiltradas = sucursales.filter(sucursal => sucursal.central === centralNombre);

    // Limpiar el select de sucursales
    branchSelect.innerHTML = '<option value="">-- Seleccione una sucursal --</option>';

    // Agregar las opciones al select
    sucursalesFiltradas.forEach(sucursal => {
        let option = document.createElement("option");
        option.value = sucursal.nombre;
        option.text = sucursal.nombre;
        branchSelect.appendChild(option);
    });

    // Habilitar el select de sucursales si hay opciones
    branchSelect.disabled = sucursalesFiltradas.length === 0;
}

// Manejar el evento del select de centrales
centralSelect.addEventListener("change", function () {
    let centralesGuardadas = JSON.parse(localStorage.getItem("Centrales")) || [];

    let centralData = centralesGuardadas.find(c => c.name === this.value);
    
    if (centralData) {
        // Crear una nueva instancia de Central
        selectedCentral = new Central(centralData.name);

        // Cargar las sucursales de la central seleccionada
        cargarSucursales(selectedCentral.name);
    } else {
        selectedCentral = null;
        branchSelect.innerHTML = '<option value="">-- Seleccione una sucursal --</option>';
        branchSelect.disabled = true;
    }
});

// 🔹 Evento cuando cambia la sucursal seleccionada
branchSelect.addEventListener("change", function () {
    let sucursalesGuardadas = JSON.parse(localStorage.getItem("Sucursales")) || [];

    let sucursalData = sucursalesGuardadas.find(s => s.nombre === this.value);

    if (sucursalData && selectedCentral) {
        // Crear una nueva instancia de Sucursal
        selectedBranch = new Sucursal(
            sucursalData.nombre,
            sucursalData.direccion,
            sucursalData.contacto,
            selectedCentral
        );
        console.log(selectedBranch);
    } else {
        selectedBranch = null;
    }
});

cargarCentrales();
console.log(JSON.parse(localStorage.getItem("Sucursales")));