<template>
     <menu>
       <figure>
         <i class="iconfont">&#xe602;</i>
         <figcaption>Pengyu</figcaption>
       </figure>
       <span class="aList">
         <card v-for="item in menuList" :data="item" :key="item.name"></card>
       </span>
     </menu>
</template>

<script type="text/ecmascript-6">
  import card from "./Card.vue"
   export default {
      name: "sideMenu",
      components: {
          card
      },
     data(){
          return {
              menuList: [
                {url: "&#xe8a3;",name: "NETEAZY"},
                {url: "&#xe89b;",name: "MICROBLOG"},
                {url: "&#xe889;",name: "SEMETIME"}
              ]
          }
     }
   }
</script>

<style scoped>
  menu{
    margin: 0;
    width: 200px;
    height: 100%;
    background: rgba(32, 34, 35, 0.65);
    display: flex;
    flex-shrink: 0;
    padding: 0px;
    flex-direction: column;
  }
  /*@media screen and (max-width: 500px) {
    menu {
      width: 120px;
    }
  }*/
  @font-face {
    font-family: 'iconfont';  /* project id 413398 */
    src: url('//at.alicdn.com/t/font_413398_kn36yun0xxadzpvi.eot');
    src: url('//at.alicdn.com/t/font_413398_kn36yun0xxadzpvi.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_413398_kn36yun0xxadzpvi.woff') format('woff'),
    url('//at.alicdn.com/t/font_413398_kn36yun0xxadzpvi.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_413398_kn36yun0xxadzpvi.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:100px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  figure{
    text-align: center;
  }
  .aList{
    flex-grow: 1;
    padding: 10px 0;
    background: #5b696f;
    display: flex;
    flex-direction: column;
  }
</style>
