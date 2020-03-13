<template>
  <div class="home">
      <!-- 开头部分 -->
      <div class="home-top-box-contain">
        <ComponentHead v-bind:usernameProps="username"></ComponentHead>
      </div>
      <!-- 中间部分 -->
      <div class="home-center-box-contain">
        <!-- 树形菜单 -->
        <div class="home-treemenu"><TreeMenu></TreeMenu></div>
        <!-- 路由组件出口 -->
        <div class="home-router"><router-view></router-view></div>
      </div>
  </div>
</template>






<script>
import ComponentHead from "@/components/page-component/ComponentHead"
import TreeMenu from "@/components/page-component/TreeMenu.vue"

import router from "@/router/index.js"



export default {
  name: 'Home',
  data:function(){
      return{
          username: this.$root.$route.params.username
      }
  },
  components:{
      ComponentHead,
      TreeMenu
  }
}

</script>









<style lang="less" scoped>

    .home{
      height: 100%;
      width: 100%;
      .home-top-box-contain{
        width: 100%;
        height: 8%;
      }
      .home-center-box-contain{
        width: 100%;
        height: 92%;
        display: flex;
        flex-direction: row;
        .home-treemenu{
          width: 18%;
          height: 100%;
        }
        .home-router{
          width: 82%;
          height: 100%;
          background-color: #f5f5f9;
          padding: 8px;
          box-sizing: border-box;
        }
      }
    }


</style>
