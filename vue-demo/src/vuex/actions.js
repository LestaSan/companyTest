export const getMenuArr = ({commit}) => {
  console.log('aaaa')
  this.axios.get('api/detail/detail.json').then(res => {
    console.log(res);
    commit('GETMENUARR', res)
  }).catch(e => {
    console.log(e)
  })
}