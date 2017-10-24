<template>
   <nav>
     <div class="pull-left" @click.stop="isMenu">
       <i class="iconfont">&#xe600;</i>
     </div>
     <div class="title">{{CurTitle}}</div>
     <div class="pull-right" :class="{'right-show': IsShow}">
       <input type="text" placeholder="search">
       <i class="iconfont">&#xe620;</i>
     </div>
   </nav>
</template>

<script type="text/ecmascript-6">
   import { mapState } from 'vuex'
   export default {
      name: 'navigation',
      data(){
        return {

        }
      },
      computed: mapState(["CurTitle","IsShow"]),
      methods: {
          isMenu: function () {
              this.$store.commit("IS_MENU")
          }
      }
   }
</script>

<style scoped>
  nav{
    display: flex;
    flex-direction: row;
    height: 40px;
    background: #03a9f4;
    color: #FFFFFF;
  }
  .pull-left,.title,.pull-right{
    display: flex;
  }
  .pull-left{
    flex-shrink: 0;
    width: 40px;
    justify-content: center;
    align-items: center;
  }
  /*.pull-left:after{
    content: '☆';
    font-size: 25px;
    position: absolute;
    left: 10px;
  }*/
  .pull-right{
    flex-shrink: 0;
    align-self: center;
    width: 150px;
    height: 26px;
    border: 1px solid #FFFFFF;
    border-radius: 13px;
  }
  .pull-right input{
    border: none;
    background: transparent;
    width: 110px;
    outline: none;
    margin-left: 10px;
    color: #FFFFFF;
  }
  .title{
    flex-grow: 1;
    justify-content: center;
    align-items: center;
  }
  @font-face {
    font-family: 'iconfont';  /* project id 413398 */
    src: url('//at.alicdn.com/t/font_413398_gxmn1lwd165stt9.eot');
    src: url('//at.alicdn.com/t/font_413398_gxmn1lwd165stt9.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_413398_gxmn1lwd165stt9.woff') format('woff'),
    url('//at.alicdn.com/t/font_413398_gxmn1lwd165stt9.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_413398_gxmn1lwd165stt9.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:25px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  @media screen and (max-width: 480px) {
    .right-show{
      display: none;
    }
  }
</style>
