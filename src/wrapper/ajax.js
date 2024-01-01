import axios from 'axios'

const API_URI = import.meta.env.VITE_API_URI

const ajax = (method, uri, params, headers)=> {
  return axios({
    method: method,
    url: API_URI + uri,
    params,
    headers: { ...headers },
  }).then(_res=> {
    console.log(_res)
  }).catch(_err=> {
    alert(_err)
  })
}

export default ajax
