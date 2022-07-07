<template>
  <section style="display: flex">
    <div class="left">
      <div class="model">
        <Model />
      </div>
    </div>
    <div class="right">
      <v-card style="background: rgba(0, 0, 0, 0.3); margin: 1vw">
        <SingleLineChart />
      </v-card>
      <v-card style="background: rgba(0, 0, 0, 0.3); margin: 1vw">
        <BarChartHorizontal />
      </v-card>
    </div>
  </section>
</template>

<script>
import Model from "~/components/Model";
import SingleLineChart from "~/components/SingleLineChart.vue";
import BarChartHorizontal from "~/components/BarChartHorizontal.vue";
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    Model,
    SingleLineChart,
    BarChartHorizontal,
    Logo,
    VuetifyLogo,
  },
};
</script>

<style lang="scss">
.left {
  width: 60vw !important;
  height: calc(100vh - 46px - 10vh);
}
.right {
  width: 40vw !important;
  height: calc(100vh - 46px - 10vh);
}
.model {
  @include frame-border;
  // width: 60vw !important;
  margin: 1vh;
  height: calc(100vh - 46px - 10vh);
  overflow: hidden;
}

.v-application::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: transparent;
  background-image: url(~/assets/pattern.png);
  background-size: 4.6875rem;
  background-repeat: repeat;
  background-attachment: initial;
}
.v-application {
  @include main-background;
  z-index: 2;
}
.title-main {
  font-size: 1rem;
  color: white;
  padding-left: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
}
.v-main__wrap::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: -5;
  background: linear-gradient(180deg, rgba(50, 70, 80, 0.9) 0, #0d101b 100%);
}
.v-main__wrap::after {
  content: "";
  position: fixed;
  top: 0;
  height: 100%;
  left: 0;
  right: 0;
  z-index: -10;
  background-color: #273136;
  background-image: linear-gradient(
    180deg,
    rgba(50, 70, 80, 0.9) 0,
    #0d101b 100%
  );
  background-image: url("/cover5.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: initial;
  height: 100%;
  transition: background 0.2s linear;
  background-size: cover;
}
</style>
