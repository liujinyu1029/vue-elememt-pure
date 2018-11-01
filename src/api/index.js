import fetch from './fetch'

//==========公共接口==========
//获取用户信息
export function getUserInfo() {
  return fetch({
    url: '/public/getUserInfo',
    method: 'post'
  })
}
//登出账号
export function logOut() {
  return fetch({
    url: '/public/logout',
    method: 'get'
  })
}

//城市列表
export function listAuthCity(){
  return fetch({
    url : '/public/listAuthCity',
    method  : 'post'
  })
}
//修改当前城市
export function switchCity(cityId){
  return fetch({
    url : '/public/switchCity?cityId='+cityId,
    method  : 'get'
  })
}


