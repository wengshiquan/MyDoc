new Vue({
    el:"#app",
    data:{
        health:100,
        change:false
    },
    methods: {
        hit:function(){
            this.health -=10;
            if(this.health<=0){
                this.change = true;
            }
          
           console.log(this.health);
            
        },
        reset:function(){
            this.health = 100;
            this.change = false;
        }
    },
})