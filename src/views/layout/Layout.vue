<template>
    <el-container>
        <!--顶部系统名和用户信息-->
        <el-header v-if="showBar" style="position:fixed;width:100%;top:0;left:0;z-index:100;background:#00BF6C;">
            <top-header></top-header>
        </el-header>
        <!--container-->
        <el-container style="background:#fff;position:flex;justify-content:space-between;">
            <!-- 左侧导航-->
            <el-aside v-if="showBar" width="200px" style="position:fixed;top:60px;left:0;overflow-y:auto;height:100%;background:rgb(68, 78, 79);">
                <left-nav></left-nav>
            </el-aside>
            <!--内容主体-->
            <el-main class="main-style" :style="{marginLeft:showBar?'200px':'0',marginTop:showBar?'60px':'0'}">
                <container-main></container-main>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
  import { TopHeader, LeftNav,ContainerMain } from '@/views/layout'
  export default {
    name: 'layout',
    data(){
      return {
        showBar:true
      }
    },
    created(){
      this.showBar = !location.hash.includes('out_visit=true');
    },
    components: {
      TopHeader,
      LeftNav,
      ContainerMain
    }
  }
</script>

<style>
  .el-header {
    background-color: #00BF6C;
    color: #333;
    line-height: 60px;
  }
    .main-style{
        width:100%;overflow-y:auto;
    }
</style>