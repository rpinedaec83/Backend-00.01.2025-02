console.log("Inicio del Programa");
document.getElementById("demo2").innerText = "Inicio..."

function calculadora(num1, num2, myCallBack){
    document.getElementById("demo2").innerText = "Procesando..."
    setTimeout(()=>{
        myCallBack(num1+num2);
    }, 5000)
}

function myCallBack(resultado){
    document.getElementById("demo1").innerText = resultado;
    document.getElementById("demo2").innerText = "Listo..."
}

calculadora(20,45, myCallBack);




let miPromesa = new Promise((resolve, reject)=>{
    try {
        setTimeout(()=>{
            resolve("Listo lo logre!!!!")
        },3000)
        //throw new Error("Tuve un problema al ejecutar")
    } catch (error) {
        reject(error);
    }
});

miPromesa.then(data=>{
    console.log(data);
    document.getElementById("demo3").innerText = data;
}).catch(error=>{
    console.error(error);
});


async function miPromesaAsincrona() {
    let promesa = new Promise((resolve, reject)=>{
        let req = new XMLHttpRequest();
        req.open('GET','https://jsonplaceholder.typicode.com/posts', true);
        req.onload = ()=>{
            if(req.status == 200){
                setTimeout(()=>{resolve(req.response);},6000);
            }
            else{
                reject("Error en la promesa")
            }
        };
        req.send();
    });

    document.getElementById('demo4').innerText = "Cargando";
    let resultado = await promesa;
    document.getElementById('demo4').innerText =resultado;
    
}
miPromesaAsincrona();

console.log("Fin del Programa")