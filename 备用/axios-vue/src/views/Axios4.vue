<template>
  <div class="home">
    
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Axios4',
  components: {
  },
  created() {
    //错误处理
    axios.interceptors.request.use(config =>{
      return config
    },err=>{
      return Promise.reject(err)
    })

    axios.get('/data.json').then((res) =>{
      console.log(res);
      //错误会被catch
    }).catch(err =>{
      console.log(err);
    })

    //例子：实际开发过程中，一般添加统一错误处理
    let instance = axios.create({})
    instance.interceptors.request(config =>{
      return config
    },err=>{
      //请求错误 一般http状态码以4开头，常见：401超时，404 not found
      $('#model').show()
      setTimeout(() =>{
        $('model').hide()
      },2000)
      return Promise.reject(err)
    })

    instance.interceptors.response(config =>{
      return config
    },err=>{
      //响应错误处理 一般http状态码以5开头，常见：500 系统错误，502 系统重启
      $('#model').show()
      setTimeout(() =>{
        $('model').hide()
      },2000)
      return Promise.reject(err)
    })

  instance.get('/data.json').then(res =>{
    console.log(res);
  }).catch(err =>{
    console.log(err);
  })



  },
}
</script>
