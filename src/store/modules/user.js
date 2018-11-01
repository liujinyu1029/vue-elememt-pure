import { getUserInfo,logOut } from '../../api'

const user = {
  state: {
    name:'',
    email:'',
    role_name:'',
    current_city_name:'',
    authUrls:[],
    own_cities : []
  },
  mutations: {
    SET_NAME: (state, val) => {
      state.name = val
    },
    SET_EMAIL: (state, val) => {
      state.email = val
    },
    SET_ROLE_NAME: (state, val) => {
      state.role_name = val
    },
    SET_CURRENT_CITY_NAME: (state, val) => {
      state.current_city_name = val
    },
    SET_OWN_CITIES:(state , val)=>{
      state.own_cities = val
    },
    SET_AUTH_URLS:(state , arr)=>{
      state.authUrls = arr
    }
  },
  actions: {
    //获取用户信息
    GetUserInfo({ commit, state }) {
      //调用接口
      return new Promise((resolve, reject) => {
        getUserInfo().then(data => {
          commit('SET_EMAIL', data.email)
          commit('SET_NAME', data.name)
          commit('SET_ROLE_NAME', data.role_name)
          commit('SET_CURRENT_CITY_NAME', data.current_city_name)
          commit('SET_OWN_CITIES',data.own_cities)
          commit('SET_AUTH_URLS',data.authUrls)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logOut().then(res => {
          commit('SET_EMAIL', '')
          commit('SET_NAME', '')
          commit('SET_ROLE_NAME', '')
          commit('SET_CURRENT_CITY_NAME', '')
          commit('SET_OWN_CITIES',[])
          commit('SET_AUTH_URLS',[])
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
