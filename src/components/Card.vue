<template>
   <!--<a target="" href="">-->
     <router-link :to="data.name">
       <i class="iconfont" v-html="data.url"></i>
       <span>{{data.name}}</span>
     </router-link>
   <!--</a>-->
</template>

<script type="text/ecmascript-6">
   export default {
      name: "card",
      props: ['data']
   }
</script>

<style scoped>

  .iconfont{
    font-family:"iconfont" !important;
    font-size:25px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'iconfont';  /* project id 413398 */
    src: url('//at.alicdn.com/t/font_413398_dx60e3utjpuv7vi.eot');
    src: url('//at.alicdn.com/t/font_413398_dx60e3utjpuv7vi.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_413398_dx60e3utjpuv7vi.woff') format('woff'),
    url('//at.alicdn.com/t/font_413398_dx60e3utjpuv7vi.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_413398_dx60e3utjpuv7vi.svg#iconfont') format('svg');
  }

  a{
    text-decoration: none;
    padding: 5px 0 5px 0px;
    margin: 0 5px 0 30px;
    border-bottom: 1px solid #c3acac;
  }
  a:hover{
    cursor: pointer;
  }
  a span{
    padding-left: 10px;
  }

</style>
