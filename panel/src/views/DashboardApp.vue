<template>
  <div>
    <SideBar />
    <div class="main-content">
      <TopNav />
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-xl-8">
            <!-- Header -->
            <div class="header mt-md-5">
              <div class="header-body">
                <div class="row align-items-center">
                  <div class="col">
                    <!-- Pretitle -->
                    <h6 class="header-pretitle">
                      Panel Administrador
                    </h6>

                    <!-- Title -->
                    <h1 class="header-title">
                      GameBox
                    </h1>
                  </div>
                </div> <!-- / .row -->
                <!-- <div class="row align-items-center">
                  <div class="col">
                    <ul class="nav nav-tabs nav-overflow header-tabs">
                      <li class="nav-item">
                        <a class="nav-link active">
                          Todos los Colaboradores
                        </a>
                      </li>
                      <li class="nav-item">
                        <router-link to="/colaborador/create" class="nav-link">Nuevo Colaborador
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div> <!-- / .row -->
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import TopNav from '@/components/TopNav.vue';

export default {
  name: 'DashboardApp',
  components: {
    SideBar,
    TopNav
  }
}
</script>
