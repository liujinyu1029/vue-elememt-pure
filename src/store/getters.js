const getters = {
  name: state => state.user.name||'',
  email: state => state.user.email||'',
  role_name: state => state.user.role_name||'',
  current_city_name: state => state.user.current_city_name||'',
  own_cities : state => state.user.own_cities||[],
  authUrls : state => state.user.authUrls||[]
}
export default getters
