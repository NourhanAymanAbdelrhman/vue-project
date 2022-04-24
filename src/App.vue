<template>
  <div>
    
   <navbarcomp/>
   <router-view ></router-view>
   <footerComp/>  
  </div>
</template>

<script>
  import FooterComp from './components/footer.vue'
 import navbarcomp from './components/navbar.vue'
//  import homeComp from './components/home.vue'
//  import cartComp from './components/cart.vue'

export default {
  name: 'App',
     data(){
      
    return{
      toys:[],
      }
      },
  components: {
    navbarcomp,
    FooterComp,
    //  homeComp,
    //  aboutComp,
    //  deliveryComp,

    //  cartComp 

  },
  methods:{
    acceptdata(toy){
      console.log(toy)
       this.toys.push(toy)
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
  margin-top: 60px;
}
</style>
