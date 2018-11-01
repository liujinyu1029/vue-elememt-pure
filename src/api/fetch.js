import axios from 'axios'
import { Message } from 'element-ui'

// 创建axios实例
const service = axios.create({
  timeout: 5000                  // 请求超时时间
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * ret非1即为错
     */
    let rd = response.data
    if (rd.ret==1) {
      return rd.data;
    } else {
      Message({
        message: (rd.error||{}).msg||'暂未找到接口服务',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(rd.error)
    }
  },
  error => {
    console.warn('获取接口数据报错：' + error)// for debug
    return Promise.reject(error)
  }
)

export default service
