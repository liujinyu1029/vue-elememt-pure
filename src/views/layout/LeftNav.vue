<!-- 左侧导航 -->
<template>
    <div style="height: 100%;">
        <el-menu
            style="min-height:600px;"
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#444E4F"
            text-color="#fff"
            active-text-color="#00BF6C"
        >
            <router-link  to="/demo/table">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>Demo</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/demo/table">
                            <span slot="title">demo</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </router-link>
             <router-link v-if="authUrls.includes('/pomp/forecastrate')" to="/pomp/forecastrate">
                <el-menu-item index="/pomp/forecastrate">
                    <span slot="title">有权限才能看导航1</span>
                </el-menu-item>
            </router-link>
            <router-link v-if="authUrls.includes('/pomp/ratemanage')" to="/pomp/ratemanage">
                <el-menu-item index="/pomp/ratemanage">
                    <span slot="title">有权限才能看导航2</span>
                </el-menu-item>
            </router-link>
        </el-menu>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'LeftNav',
    computed: {
      ...mapGetters([
        'authUrls'
      ])
    }
  }
</script>

