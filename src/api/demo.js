import fetch from './fetch'

//==========demo==========
export function getTableList(formData) {
  return new Promise((resolve,reject)=>{
    fetch({
      url: '/demo/tableData',
      method: 'post',
      data:{
        ...formData
      }
    }).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err);
    })
  })
}
