<template>
  <div class="home">
    
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios';

export default {
  name: 'home',
  components: {
   
  },
  created() {
    axios ({
      method:'get',
      url:'/a.json',
      params:{
        id:12
      }
    }).then(res =>{
      console.log(res);
      
    })
    let data = {
      id:13
    }
    axios({
      method:'post',
      url:'/post',
      data:data
    }).then(res =>{
      console.log(res);
      
    })
    axios.delete('/delete',{
      //在url地址上拼接
      params:{
        id:12
      }
    }).then(res =>{
      console.log(res);
      
    })

    axios.delete('/delete',{
      //用对象传输
      data:{
        id:12
      }
    }).then(res =>{
      console.log(res);
      
    })

  //并发请求
  axios.all(
    [
      axios.get('/a.json'),
      axios.get('/b.json')
    ]
    ).then(axios.spread((dataA,dataB) =>{
      console.log(dataA,dataB);
    })
  )

  //创建axios实例,之后就可以用instance去做操作
  let instance = axios.create({
    baseURL:'http://localhost:8080',
    timeout:1000
  })

  axios.create({
    baseURL:'http://localhost:8080', //请求的域名，基本地址，默认
    timeout:1000,   //请求超时时长(ms)
    url:'data.json',  // 请求路径
    method:'get',   //请求方法
    headers:{
      token:''
    },   //设置请求头
  })

  },
}
</script>
