<template>
  <div id="app">
    <CardPerfil> </CardPerfil>
  </div>
</template>

<script>
import CardPerfil from "./components/cardPerfil.vue";

export default {
  name: "App",
  components: {
    CardPerfil,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 75vh;
  margin: 0 auto;
  margin-top: 5vh;
  border-radius: 5px;
  justify-content: space-around;
  align-items: center;
}
</style>
