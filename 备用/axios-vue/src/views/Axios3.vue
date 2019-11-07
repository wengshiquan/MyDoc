<template>
  <div class="home">

  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios';

export default {
  name: 'Axios3',
  components: {

  },
  created() {
    //请求拦截器
    axios.interceptors.request.use(config =>{
      //在发送请求前做些什么
      return config
    },err=>{
      //在请求错误的时候做些什么
      return Promise.reject(err)
    })

    //响应拦截器
    axios.interceptors.response.use(res=>{
      //请求成功对响应数据做处理
      return res
    },err=>{
      //响应错误做些什么
      return Promise.reject(err)
    })

    //例子 登录状态（token:''）   需要登录的就调用拦截器
    let instance = axios.create({})
    instance.interceptors.request.use(config =>{
      config.headers.token = ''
      return config
    })
    //不需要登录的就不调用拦截器
    let newInstance = axios.create({})

  },
}
</script>
