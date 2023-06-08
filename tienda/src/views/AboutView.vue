<template>
  <div class="about">
    <section style="margin-top: 4rem; background-color: black;">
      <div class="container">
        <div class="text-white text-center py-7">
          <h2 class="display-1 text-uppercase mb-4">Equipo D</h2>
          <h2 class="display-4 fw-bold mb-3">Hugo René Guerra Barajas 19130917</h2>
          <h2 class="display-4 fw-bold mb-3">Eduardo Iván Guerrero Hernández 19130918</h2>
          <h2 class="display-4 fw-bold mb-3">Omar Adrián Tapia Guzmán 20130022</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  methods: {
    scrollToTop() {
            window.scrollTo(0, 0);
        },
  },
  beforeMount() {
    this.scrollToTop();
  },
  mounted() {
    document.title = 'Acerca De';
  }
}
</script>
