<template>
  <div class="home-container"><h1>Bienvenue chez Cybersec</h1></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>

<style>
.home-container {
  display: grid;
  align-self: center;
  justify-self: center;
}

.login {
  display: grid;
  width: fit-content;
  gap: 10px;
}
</style>
