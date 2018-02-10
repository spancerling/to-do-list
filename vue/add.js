
var vm = new Vue({
  el:"#vue-todolist",
  data:{
      inputValue:"",
      items:[],
      index:0,
      isActive:false
  },
  methods:{
    add:function(){
        if(this.inputValue){
         this.items.push({
          text: this.inputValue,
          id: parseInt(this.index)+1
         })
         this.inputValue=""
       }
    },
    change:function(){
     this.isActive = !(this.isActive)
    }
  }
})

