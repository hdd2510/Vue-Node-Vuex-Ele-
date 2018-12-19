import { Message } from 'element-ui'
import axios from 'axios'
import session from './sessionStorage'

let ERROR_MSG = '服务器端异常!'
const getToken = () => {
  axios.defaults.headers.common[`authorization`] = session.getSession('token')
  axios.defaults.headers['Content-Type'] = 'application/json'
  axios.defaults.headers['Accept'] = 'application/json'
}
const getUtil = (url, params) => {
  const result = axios({
    url,
    method: 'get',
    params
  }).then((res) => {
    const {
      statusText,
      status
    } = res
    let data = res.data
    if (data instanceof Array) {
      data = {
        list: data
      }
    }
    return Promise.resolve({
      success: true,
      message: statusText,
      statusCode: status,
      ...data
    })
  }).catch(() => {
    Message.error(ERROR_MSG)
    return Promise.reject(new Error({
      success: false
    }))
  })
  return result
}
const postUtil = (url, data, params) => {
  const result = axios({
    url,
    method: 'post',
    data,
    params,
    contentType: 'x-www-form-urlencoded'
  }).then((res) => {
    const {
      statusText,
      status
    } = res
    let data = res.data
    if (data instanceof Array) {
      data = {
        list: data
      }
    }
    return Promise.resolve({
      success: true,
      message: statusText,
      statusCode: status,
      ...data
    })
  }).catch(() => {
    Message.error(ERROR_MSG)
    return Promise.reject(new Error({
      success: false
    }))
  })
  return result
}

const putUtil = (url, data, params) => {
  const result = axios({
    url,
    method: 'put',
    data,
    params,
    contentType: 'application/json'
  }).then((res) => {
    const {
      statusText,
      status
    } = res
    let data = res.data
    if (data instanceof Array) {
      data = {
        list: data
      }
    }
    return Promise.resolve({
      success: true,
      message: statusText,
      statusCode: status,
      ...data
    })
  }).catch(() => {
    Message.error(ERROR_MSG)
    return Promise.reject(new Error({
      success: false
    }))
  })
  return result
}

const deleteUtil = (url, data) => {
  const result = axios({
    url,
    method: 'delete',
    data
  }).then((res) => {
    const {
      statusText,
      status
    } = res
    let data = res.data
    return Promise.resolve({
      success: true,
      message: statusText,
      statusCode: status,
      ...data
    })
  }).catch(() => {
    Message.error(ERROR_MSG)
    return Promise.reject(new Error({
      success: false
    }))
  })
  return result
}

//  用于验证每个token
const checkTokenUtil = (url, params) => {
  getToken()
  const result = axios({
    url,
    method: 'get',
    params
  }).then((res) => {
    const {
      statusText,
      status
    } = res
    let data = res.data
    if (data instanceof Array) {
      data = {
        list: data
      }
    }
    return Promise.resolve({
      success: true,
      message: statusText,
      statusCode: status,
      ...data
    })
  }).catch(() => {
    Message.error(ERROR_MSG)
    return Promise.reject(new Error({
      success: false
    }))
  })
  return result
}

export {
  checkTokenUtil,
  getUtil,
  postUtil,
  putUtil,
  deleteUtil
}
