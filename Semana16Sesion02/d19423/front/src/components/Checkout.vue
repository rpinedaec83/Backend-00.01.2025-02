<template>
    <div class="hello">
        <form>
            <div>
                <h5>ORDEN: {{ order_id }}</h5>
            </div>
            <div>
                <h5>Precio: {{ currency_code }} {{ amount }}</h5>
            </div>
            <div>
                <h5>Detalle: {{ description }}</h5>
            </div>
            <div>
                <label for="">
                    <span>Correo Electronico</span>
                    <input type="text" size="50" v-model="email">
                </label>
            </div>
            <div>
                <label for="">
                    <span>Numero de Tarjeta</span>
                    <input type="text" size="50" v-model="creditcard">
                </label>
            </div>
            <div>
                <label for="">
                    <span>Fecha Expiracion</span>
                    <input type="text" size="2" v-model="month">
                    <span>/</span>
                    <input type="text" size="4" v-model="year">
                </label>
            </div>
            <div>
                <label for="">
                    <span>CVV</span>
                    <input type="text" size="3" v-model="cvv">
                </label>
            </div>
            <div>
                <label for="">
                    <span>Coutas</span>
                    <input type="number" size="4" v-model="installments">
                </label>
            </div>
        </form>

        <button id="btnPagar" @click="payment" >Pagar</button>
    </div>
</template>
<script>
    import axios  from "axios";

    export default{
        name: 'Checkout',
        data(){
            return{
                order_id: 123,
                currency_code: 'PEN',
                amount: 1200,
                installments: 2,
                telefono:916730940,
                description: "Producto ABC",
                email: "rpineda@x-codec.net",

                creditcard: '4111111111111111',
                month: '09',
                year: '2025',
                cvv: '123'
            }
        },
        methods:{
            async payment() {
                axios(
                    {
                        method: 'post',
                        url: 'http://localhost:8000/api/process/pay',
                        data:{
                            order_id: this.order_id,
                            description: this.description,
                            amount: this.amount,
                            installments: this.installments,
                            telefono: this.telefono,
                            email: this.email,
                            currency_code: this.currency_code,
                            creditcard: this.creditcard,
                            month: this.month,
                            year: this.year,
                            cvv: this.cvv
                        },
                        headers:{
                            'content-type': 'application/json',
                            'Access-Control-Allow-Origin':'*'
                        }
                    }
                ).then(respuesta=>{
                    console.log(respuesta);
                    alert(JSON.stringify(respuesta))
                }).catch(error=>{
                    alert(JSON.stringify(error))
                })
            }
        }
    }
</script>