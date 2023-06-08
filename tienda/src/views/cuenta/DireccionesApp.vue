<template>
    <div style="background: #f3f3f3;" class="pb-5">
        <!-- Hero Section-->
        <section class="hero" style="margin-top: 4rem !important;">
            <div class="container">
                <!-- Hero Content-->
                <div class="hero-content pb-5 pt-4 text-center">
                    <h1 class="hero-heading">Direcciones</h1>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row mb-5">
                    <div class="col-lg-8 col-xl-9">
                        <div class="block">
                            <!-- Invoice Address-->
                            <div class="block-header" style="background: #5a008a;">
                                <h6 class="text-uppercase mb-0 text-white">Nueva dirección </h6>
                            </div>
                            <div class="block-body">
                                <div class="row">
                                    <div class="form-group col-md-6 mb-3">
                                        <label class="form-label" for="fullname_invoice"><b>Nombres</b></label>
                                        <input class="form-control" type="text" placeholder="Joe"
                                            v-model="direccion.nombres">
                                    </div>
                                    <div class="form-group col-md-6 mb-3">
                                        <label class="form-label" for="emailaddress_invoice"><b>Apellidos</b></label>
                                        <input class="form-control" type="text" placeholder="Black"
                                            v-model="direccion.apellidos">
                                    </div>
                                    <div class="form-group col-md-6 mb-3">
                                        <label class="form-label" for="street_invoice"><b>Documento</b></label>
                                        <input class="form-control" type="text" placeholder="123456789"
                                            v-model="direccion.documento">
                                    </div>
                                    <div class="form-group col-md-6 mb-3">
                                        <label class="form-label" for="city_invoice"><b>Telefono</b></label>
                                        <input class="form-control" type="text" placeholder="(+52) 8712345678"
                                            v-model="direccion.telefono">
                                    </div>
                                    <div class="form-group col-md-6 mb-3">
                                        <label class="form-label" for="zip_invoice"><b>País</b></label>
                                        <select class="form-control" v-model="direccion.pais">
                                            <option value="" disabled selected>Seleccionar</option>
                                            <option :value="item" v-for="item in $paises">{{ item }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-6 mb-3">
                                        <label class="form-label" for="state_invoice"><b>Region/Ciudad</b></label>
                                        <input class="form-control" type="text" placeholder="Torreón/Coahuila"
                                            v-model="direccion.ciudad">
                                    </div>
                                    <div class="form-group col-md-6 mb-3">
                                        <label class="form-label" for="phonenumber_invoice"><b>Código Postal</b></label>
                                        <input class="form-control" type="text" placeholder="27060"
                                            v-model="direccion.cod_pos">
                                    </div>
                                    <div class="form-group col-md-6 mb-3">
                                        <label class="form-label" for="phonenumber_invoice"><b>Dirección</b></label>
                                        <input class="form-control" type="text" placeholder="Miraflores #123"
                                            v-model="direccion.direccion">
                                    </div>
                                </div>
                                <!-- /Invoice Address-->
                            </div>
                        </div>
                        <div class="mb-4 mt-3 text-center mg-5">
                            <button class="btn btn-dark" type="button" v-on:click="crear_direccion()">Crear
                                dirección</button>
                        </div>
                        <table v-if="direcciones.length >= 1" class="table table-bordered table-striped"
                            style="margin-top: 5rem !important;background: white !important;">
                            <thead class="table-dark">
                                <tr>
                                    <th scope="col">Receptor</th>
                                    <th scope="col">Localización</th>
                                    <th scope="col">Dirección</th>
                                    <th scope="col">Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in direcciones">
                                    <th scope="row">
                                        <small>{{ item.nombres }} {{ item.apellidos }}</small> <br>
                                        <small>{{ item.telefono }}</small>
                                    </th>
                                    <td>
                                        <small>{{ item.pais }} {{ item.ciudad }}</small> <br>
                                        <small>{{ item.cod_pos }}</small>
                                    </td>
                                    <td>{{ item.direccion }}</td>
                                    <td><button class="btn btn-danger btn-sm"
                                            v-on:click="eliminar_direccion(item._id)">Eliminar</button></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="card" v-if="direcciones.length == 0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <img src="/assets/media/vista.gif" style="width: 60px;">
                                        <h3>No se han agregado direcciones.</h3>
                                        <span class="text-muted">Ingrese una dirección.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Customer Sidebar-->
                    <div class="col-xl-3 col-lg-4 mb-5">
                        <SideBarCliente />
                    </div>
                    <!-- /Customer Sidebar-->
                </div>
            </div>
        </section>
        <!-- Footer-->
    </div>
</template>

<script>
import swal from 'sweetalert';
import axios from 'axios';
import SideBarCliente from '@/components/SideBarCliente.vue';

export default {
    data() {
        return {
            direccion: {
                pais: ''
            },
            direcciones: []
        }
    },
    components: {
        SideBarCliente
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        init_direcciones() {
            axios.get(this.$url + '/obtener_direcciones_cliente', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token
                }
            }).then((result) => {
                this.direcciones = result.data;
            });
        },
        crear_direccion() {
            if (!this.direccion.nombres) {
                swal('ALERT', 'Ingrese los nombres.', 'warning');
            } else if (!this.direccion.apellidos) {
                swal('ALERT', 'Ingrese los apellidos.', 'warning');
            } else if (!this.direccion.documento) {
                swal('ALERT', 'Ingrese el documento.', 'warning');
            } else if (!this.direccion.telefono) {
                swal('ALERT', 'Ingrese el teléfono.', 'warning');
            } else if (!this.direccion.pais) {
                swal('ALERT', 'Ingrese el país.', 'warning');
            } else if (!this.direccion.ciudad) {
                swal('ALERT', 'Ingrese la ciudad.', 'warning');
            } else if (!this.direccion.cod_pos) {
                swal('ALERT', 'Ingrese el código postal.', 'warning');
            } else if (!this.direccion.direccion) {
                swal('ALERT', 'Ingrese la dirección.', 'warning');
            } else {
                axios.post(this.$url + '/crear_direccion_cliente', this.direccion, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': this.$store.state.token
                    }
                }).then((result) => {
                    swal('SUCCESS', 'Registro de dirección exitoso.', 'success');
                    this.direccion = {
                        pais: ''
                    }
                    this.init_direcciones();
                });
            }
        },
        eliminar_direccion(id) {
            axios.delete(this.$url + '/eliminar_direccion_cliente/' + id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token
                }
            }).then((result) => {
                swal('SUCCESS', 'Se eliminó la dirección.', 'success');
                this.init_direcciones();
            });
        }
    },
    mounted() {
        document.title = 'Direcciones';
    },
    beforeMount() {
        this.scrollToTop();
        this.init_direcciones();
    }
}
</script>