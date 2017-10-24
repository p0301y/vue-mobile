<template>
   <div class="content" :class="{uneditable:IsShow}" @click="closeMenu">
     <navigation></navigation>
     <lazyLoad></lazyLoad>
   </div>
</template>

<script type="text/ecmascript-6">
  import lazyLoad from "./LazyLoad.vue"
  import navigation from "./Navigator.vue"
  import { mapState } from 'vuex'
   export default {
      name: "mainContent",
      components: {
          lazyLoad,
          navigation
      },
      computed: mapState(['IsShow']),
      methods: {
          closeMenu: function () {
              this.$store.commit("CLOSE_MENU")
          }
      }
   }
</script>

<style>
.content{
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
.uneditable{
  background: rgba(55,66,233,0.5);
}
</style>
