<!-- 顶部个人信息 -->
<template>
    <div>
        <span style="color:#fff;margin-left:10px;">{{projectName}}</span>
        <div style="float:right;">
            <el-button @click="logout()" type="text" style="color:#fff">退出</el-button>
        </div>
        <div style="float:right;margin-right: 20px;cursor: pointer">
            <el-dropdown trigger="click" :hide-on-click='false'>
                <span class="el-dropdown-link userinfo-inner" style="color:#fff">
                  {{current_city_name}}
                  <i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown" style="max-height: 480px;overflow-y:scroll;margin-top:0;">
                    <el-dropdown-item>
                        <el-input v-model="citySearchInput" placeholder=""></el-input>
                    </el-dropdown-item>
                    <el-dropdown-item :key="index" v-for="(city,index) in cityList" v-if="handSearchCityRes(city)" @click.native="switchCity(city.id)">
                        {{city.name}}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div style="color:#fff;float:right;font-size:14px;margin-right:20px;">
          <span>[{{role_name}}]</span>
        </div>
        <div style="overflow:hidden;float:right;border-radius: 50%;background: #F1FFFC;border: 1px solid #09D19F;width:50px;height:50px;margin-top: 5px;text-align: center;line-height: 50px;margin-right: 20px;">
            <span style="color:#00BF63;">{{name}}</span>
        </div>
    </div>
</template>
<script>
  import {listAuthCity,switchCity} from '../../api'
  import { mapGetters } from 'vuex'
  export default {
    name: 'TopBar',
    computed: {
      ...mapGetters([
        'name',
        'role_name',
        'current_city_name'
      ])
    },
    created(){
      this.getCityList();
    },
    data(){
      return{
        projectName:"Vue-Element-pure",
        citySearchInput:'',
        cityList:[],
      }
    },
    methods: {
      getCityList(){
        listAuthCity().then(res=>{
          this.cityList = res||[];
        }).catch(error => {
          console.warn('api listAuthCity:',error)
        });
      },
      switchCity(cityId){
        switchCity(cityId).then(res=>{
        }).catch(error => {
        });
        this.$store.dispatch('GetUserInfo').then(() => {
          window.location.reload();
        }).catch(err=>{
          window.location.reload();
        })
      },
      handSearchCityRes(city){
        let cityName = city.name||'';
        return cityName.includes(this.citySearchInput);
      },
      logout() {
        //退出后清掉vuex中的user用户信息
        this.$store.dispatch('LogOut').then(resData => {
          window.location.replace(resData);
        }).catch(error => {
          console.warn('api LogOut:',error)
        })
      }
    }

  }
</script>