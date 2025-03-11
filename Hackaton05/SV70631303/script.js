class Phone{
    diagnostic = "";
    status = "";
    constructor(imei, brand, serie, serieNumber, sufix, reported, diagnostic, status){
        this.imei = imei;
        this.brand = brand;
        this.serie = serie;
        this.serieNumber = serieNumber;
        this.sufix = sufix;
        this.reported = reported;
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

    listOfThingsToRepair(){
        let allText = "";
        for(let i = 0; i < this.arrayOfThingsToRepair.length; i++){
            allText += (`${i+1} - ${this.arrayOfThingsToRepair[i]}\n`)
        }

        return allText;
    }

    listOfThingsToRepairDOM(){
        let allText = "";
        for(let i = 0; i < this.arrayOfThingsToRepair.length; i++){
            allText += (`${i+1} - ${this.arrayOfThingsToRepair[i]}<br>`)
        }

        return allText;
    }

    listOfThingsToRepairAndPrices(){
        let allText = "";
        for(let i = 0; i < this.arrayOfThingsToRepair.length; i++){
            allText += (`${i+1} - ${this.arrayOfThingsToRepair[i]} -> S/. ${this.arrayOfPrices[i]}\n`);
        }

        return allText;
    }

    listOfThingsToRepairAndPricesDOM(){
        let allText = "";
        for(let i = 0; i < this.arrayOfThingsToRepair.length; i++){
            allText += (`${i+1} - ${this.arrayOfThingsToRepair[i]} -> S/. ${this.arrayOfPrices[i]}<br>`);
        }

        return allText;
    }

    listOfSpareParts(){
        let allText = "";
        for(let i = 0; i < this.arrayOfSpareParts.length; i++){
            allText += (`${i+1} - ${this.arrayOfSpareParts[i]} \n`)
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

//Revisar si esta reportado el equipo
const checkReport = (customer, phone) => {
    if(phone.reported == true) {
        Swal.fire({
            title: "Telefono reportado!",
            icon: "question",
            text: `El equipo ${phone.brand} ${phone.serie} ${phone.serieNumber} ${phone.sufix} del cliente ${customer.name} ${customer.lastname} ha sido reportado, por ende, no se puede proceder con la revisión ni reparación`,
            showCloseButton: true
        })
    } else{
        Swal.fire({
            title: "Telefono limpio!",
            icon: "success",
            text: `El equipo ${phone.brand} ${phone.serie} ${phone.serieNumber} ${phone.sufix} del cliente ${customer.name} ${customer.lastname} no ha sido reportado`,
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonText: `Cancelar la reparación`,
            confirmButtonText: `Proceder con el diagnostico`
        }).then((result) => {
            if(result.isConfirmed){
                customersPhone.setStatus("Ingresado");
                const stateLabel = document.getElementById("stateLabel");
                stateLabel.innerHTML = `${customersPhone.getStatus()}`

                let phoneDataDiv = document.getElementById("phoneData");
                let customerDataDiv = document.getElementById("customerData");
                let fixDetailsDiv = document.getElementById("fixDetails");
                let buttonSaveId = document.getElementById("saveButton");
                phoneDataDiv.style.display = "none";
                customerDataDiv.style.display = "none";
                fixDetailsDiv.style.display = "block";
                buttonSaveId.disabled = true;
                const diagnosticDesc = document.getElementById("diagnosticDesc");
                diagnosticDesc.innerHTML = `Diagnóstico de - <strong>${customersPhone.brand} ${customersPhone.serie} ${customersPhone.serieNumber} ${customersPhone.sufix}</strong>`;            
                let diagnosticButton = document.getElementById("diagnosticButton");
                diagnosticButton.disabled = false;
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
    let imeiValue = document.getElementById("imei").value;
    let brandValue = document.getElementById("brand").value;
    let serieValue = document.getElementById("serie").value;
    let serieNumberValue = document.getElementById("serieNumber").value;

    let customerDNIValue = document.getElementById("customerDNI").value;
    let customerNameValue = document.getElementById("customerName").value;
    let customerLastnameValue = document.getElementById("customerLastname").value;
    let customerPhoneNumberValue = document.getElementById("customerPhoneNumber").value;

    const valores = [
        imeiValue,
        brandValue,
        serieValue,
        serieNumberValue,
        customerDNIValue,
        customerNameValue,
        customerLastnameValue,
        customerPhoneNumberValue
    ];

    if (valores.some(valor => valor === "")) {
        Swal.fire({
            title: "Falta información",
            text: "Hay espacios vacíos, rellénalos para continuar.",
            icon: "warning"
        });
        return false; // Retornar false si hay campos vacíos
    }

    return true; // Retornar true si todos los campos están llenos
};

//Inicializar los datos para hacerlos globales
let customersPhone = null;
let theCustomer = null;
let theService = null;


const saveButton = () => {
    if (!verifyEverythingFilled()) {
        return;
    }

    let imeiValue = document.getElementById("imei").value;
    let brandValue = document.getElementById("brand").value;
    let serieValue = document.getElementById("serie").value;
    let serieNumberValue = document.getElementById("serieNumber").value;
    let sufixValue = document.getElementById("sufix").value;
    let checkboxReported = document.getElementById("reportedCheckbox");

    let customerDNIValue = document.getElementById("customerDNI").value;
    let customerNameValue = document.getElementById("customerName").value;
    let customerLastnameValue = document.getElementById("customerLastname").value;
    let customerPhoneNumberValue = document.getElementById("customerPhoneNumber").value;

    customersPhone = new Phone(imeiValue, brandValue, serieValue, serieNumberValue, sufixValue, checkboxReported.checked);
    theCustomer = new Customer(customerDNIValue, customerNameValue, customerLastnameValue, customerPhoneNumberValue);

    checkReport(theCustomer, customersPhone);

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
    let diagnosticInput = document.getElementById("diagnosticInput").value;
    customersPhone.setDiagnostic(diagnosticInput);
    let textValue = document.getElementById("detailsInput").value;
    if (textValue == "") {
        Swal.fire({
            title: "Error",
            text: "No ha descrito nada.",
            icon: "error"
        });
    } else {
        customersPhone.setStatus("Revisado");

        const stateLabel = document.getElementById("stateLabel");
        stateLabel.innerHTML = `${customersPhone.getStatus()}`

        let allDescriptions = [];
        let allPrices = [];
        let allSpareParts = [];
    
        textValue.split(',').forEach(element => {
            let [description, price] = element.split('-').map(part => part.trim());
            if (description && price) {
                allDescriptions.push(description);
                allPrices.push(Number(price));
            }
        });

        let sparePartsInput = document.getElementById("sparePartsInput").value;

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

                const stateLabel = document.getElementById("stateLabel");
                stateLabel.innerHTML = `${customersPhone.getStatus()}`
                
                const workshopPhrase = document.getElementById("workshopPhraseCustomerData");
                const workshopPhraseDescription = document.getElementById("workshopPhraseDescription");

                workshopPhrase.innerHTML = `<strong>El cliente ${theCustomer.name} ${theCustomer.lastname} ha dado su consentimiento sobre la reparación del equipo ${customersPhone.brand} ${customersPhone.serie} ${customersPhone.serieNumber} ${customersPhone.sufix} </strong>`;
                workshopPhraseDescription.innerHTML = `Diagnostico: ${customersPhone.diagnostic} <br>
<br>Piezas usadas para la reparación: <br>
${theService.listOfSparePartsDOM()}<br>
--------------------------- <br>
Cosas que se deben reparar: <br>
${theService.listOfThingsToRepairAndPricesDOM()}
--------------------------- <br>
Por un costo total de: S/. ${theService.totalPrice()}<br>
El cliente cancelo el 50% del costo total: S/. ${theService.totalPrice()/2}
<br>
Contacte al siguiente número para informar al cliente: ${theCustomer.phoneNumber}`;

                let workshopDiv = document.getElementById("workshopDiv");
                workshopDiv.style.display = "block";

                let diagnosticButton = document.getElementById("diagnosticButton");
                diagnosticButton.disabled = true;

                let readyToDeliver = document.getElementById("readyToDeliver");
                readyToDeliver.disabled = false;
                
                let fixDetails = document.getElementById("fixDetails");
                fixDetails.style.display = "none";

            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({title: "Cancelación", text: "El cliente se nego a continuar, que vuelva pronto"})

                const element = document.getElementById("cancelH2");
                const anotherElement = document.getElementById("cancelPhraseOfFix");
                element.innerHTML = `El cliente ${theCustomer.name} ${theCustomer.lastname} ha cancelado la reparación del equipo ${customersPhone.brand} ${customersPhone.serie} ${customersPhone.serieNumber} ${customersPhone.sufix}`;
                anotherElement.innerHTML = `Siendo el diagnostico: ${customersPhone.diagnostic}
<br> Y necesitando las piezas: <br>
${theService.listOfSparePartsDOM()}
--------------------------- <br>
Cosas que se debian reparar: <br>
${theService.listOfThingsToRepairAndPricesDOM()}
--------------------------- <br>
Por un costo total de: S/. ${theService.totalPrice()}`;

                let cancelDiv = document.getElementById("cancelDiv");
                cancelDiv.style.display = "block";
                let fixDetailsDiv = document.getElementById("fixDetails");
                fixDetailsDiv.style.display = "none";
                let diagnosticButton = document.getElementById("diagnosticButton");
                diagnosticButton.disabled = true;

                customersPhone.setStatus("");
                const stateLabel = document.getElementById("stateLabel");
                stateLabel.innerHTML = `${customersPhone.getStatus()}`
            }
        })
    }
}

const restart = () => {
    customersPhone.setStatus("");
    const stateLabel = document.getElementById("stateLabel");
    stateLabel.innerHTML = `${customersPhone.getStatus()}`

    let imeiValue = document.getElementById("imei");
    let brandValue = document.getElementById("brand");
    let serieValue = document.getElementById("serie");
    let serieNumberValue = document.getElementById("serieNumber");
    let sufixValue = document.getElementById("sufix");

    let customerDNIValue = document.getElementById("customerDNI");
    let customerNameValue = document.getElementById("customerName");
    let customerLastnameValue = document.getElementById("customerLastname");
    let customerPhoneNumberValue = document.getElementById("customerPhoneNumber");

    imeiValue.value = "";
    brandValue.value = "";
    serieValue.value = "";
    serieNumberValue.value = "";
    sufixValue.value = "";

    customerDNIValue.value = "";
    customerNameValue.value = "";
    customerLastnameValue.value = "";
    customerPhoneNumberValue.value = "";

    let phoneDataDiv = document.getElementById("phoneData");
    let customerDataDiv = document.getElementById("customerData");
    let cancelDiv = document.getElementById("cancelDiv");
    let readyToDeliver = document.getElementById("readyToDeliver");
    let deliveredButton = document.getElementById("deliveredButton");
    let buttonSaveId = document.getElementById("saveButton");
    let workshopDiv = document.getElementById("workshopDiv");

    cancelDiv.style.display = "none";
    phoneDataDiv.style.display = "block";
    customerDataDiv.style.display = "block";
    workshopDiv.style.display = "none";
    buttonSaveId.disabled = false;
    readyToDeliver.disabled = true;
    deliveredButton.disabled = true;
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

            <hr>

            <h3>Datos del Servicio</h3>
            <p><strong>Id del servicio:</strong> ${theService.id}</p>
            <p><strong>Diagnóstico:</strong> ${customersPhone.getDiagnostic()}</p>
            <p><strong>Reparaciones realizadas:</strong><br> ${theService.listOfThingsToRepairAndPricesDOM()}</p>
            <p><strong>Repuestos usados:</strong><br> ${theService.listOfSparePartsDOM()}</p>

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