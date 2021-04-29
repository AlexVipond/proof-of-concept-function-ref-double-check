<template>
  <div id="app">
    <ButtonDelete @delete="isTextVisible = false">
      Remove the following text
    </ButtonDelete>
    <p v-if="isTextVisible">Following text</p>
    <PortalTarget name="popup" />
  </div>
</template>

<script>
import { ref } from 'vue'
import ButtonDelete from "./components/ButtonDelete.vue"

export default {
  name: "App",
  components: {
    ButtonDelete,
  },
  setup () {
    return {
      isTextVisible: ref(true),
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
