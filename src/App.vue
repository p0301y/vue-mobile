<template>
  <div class="app" :class="{'isShow': IsShow}">
    <sideMenu></sideMenu>
    <mainContent></mainContent>
  </div>
</template>

<script>
  import mainContent from "./components/Content.vue"
  import sideMenu from "./components/Menu.vue"
  import { mapState } from "vuex"
export default {
  name: 'app',
  components: {
      mainContent,
      sideMenu
  },
  computed: mapState(['IsShow'])
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
  }
  html,body{
    height: 100%;
  }
  .app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: row;
    margin-left: -200px;
    transition: margin-left 0.5s;
  }
  .isShow{
    margin-left: 0px;
  }

</style>
