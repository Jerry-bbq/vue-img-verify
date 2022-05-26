<template>
  <div>
    <canvas id="canvas" width="90" height="48" @click="handleClick"></canvas>
  </div>
</template>

<script>
import ImageVerify from "./components/image-verify.js";

export default {
  name: "App",
  data() {
    return {
      imageVerify: "",
    };
  },
  mounted() {
    this.imageVerify = new ImageVerify({
      id: 'canvas',
      width: 90,
      height: 48,
    });
  },
  methods: {
    handleClick() {
      this.imageVerify.start();
      console.log(this.imageVerify.code);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
