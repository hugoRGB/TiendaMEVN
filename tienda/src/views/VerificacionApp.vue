<template>
    <div>
        <section class="hero" v-if="estado == 'pending' || estado == 'failure'" style="margin-top: 6rem !important;">
            <div class="container">
                <!-- Hero Content-->
                <div class="hero-content pb-5 text-center">
                    <h1 class="mb-5">Pago Incorrecto</h1>
                    <div class="row">
                        <div class="col-xl-8 offset-xl-2">
                            <p class="lead mb-0">As am hastily invited settled at limited civilly fortune me. Really
                                spring in extent an by. Judge but built party world. Of so am he remember although
                                required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="hero" v-if="estado == 'success'" style="margin-top: 6rem !important;">
            <div class="container" v-if="pago.status == 'approved'">
                <!-- Hero Content-->
                <div class="hero-content pb-5 text-center">
                    <h1 class="mb-5">Validando Pago...</h1>
                    <div class="row">
                        <div class="col-xl-8 offset-xl-2">
                            <img src="/assets/media/caja.gif" style="width: 80px;">
                        </div>
                    </div>
                </div>
            </div>
            <div class="container" v-if="pago.status != 'approved'">
                <!-- Hero Content-->
                <div class="hero-content pb-5 text-center">
                    <h1 class="mb-5">Pago NO Aprovado</h1>
                    <div class="row">
                        <div class="col-xl-8 offset-xl-2">
                            <img src="/assets/media/caja.gif" style="width: 80px;">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'VerificacionApp',
    data() {
        return {
            estado: '',
            payment_id: '',
            pago: {}
        }
    },
    beforeMount() {
        this.estado = this.$route.params.estado;
        this.payment_id = this.$route.query.payment_id;
        this.init_payment(this.payment_id);
    },
    methods: {
        init_payment(payment_id) {
            axios.get('https://api.mercadopago.com/v1/payments/' + payment_id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer TEST-8491575806182039-060817-ee9ce5b0aa53395e93f986f98bab0ffd-1381254353'
                }
            }).then((result) => {
                this.pago = result.data;
            });
        }
    }
}
</script>