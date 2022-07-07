<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      height="46px"
      app
      class="top-header"
    >
      <img src="syringe.ico" alt="syringe icon" width="30px" />
      <v-toolbar-title v-text="title" class="title-main" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <!-- <v-container> -->
      <nuxt />
      <!-- </v-container> -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      fixed: false,
      title: "Local Anaesthesia Simulator Kit",
    };
  },
};
</script>

<style lang="scss">
html {
  overflow-y: hidden;
}
* {
  font-family: "Orbitron", sans-serif;
  letter-spacing: 1px;
}
.top-header {
  @include header-background;
}
</style>
