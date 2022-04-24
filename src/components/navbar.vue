
<template>
    <div class="container">
             
 <div class="row">
  

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div>
    <router-link class="nav-link active link1 mx-2" aria-current="page" to="/">
      <img src="@/assets/demo-shop-logo-1631275157.jpg" >
    </router-link>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav pages">
        <router-link class="nav-link active link1 mx-2" aria-current="page" to="/home"> Home</router-link>
        
        <router-link class="nav-link active link mx-2" aria-current="page" to="/categories"> Store</router-link>
        
        <router-link class="nav-link active link mx-2" aria-current="page" to="/About"> AboutUs</router-link>
        
        <router-link class="nav-link active link mx-2" aria-current="page" to="/DeliveryDetails"> Delivery</router-link>
      </div>
      <div class="navbar-nav icons">
          
          <input type="text" placeholder="search" class="hidden" :style="show?showinput :hidden">
         <i class="bi bi-search nav-link active link mx-2 inputsearch"  @click="show=!show"> </i>
       

        <router-link class="nav-link active link mx-2" aria-current="page" to="/Mycart"> 
         <i class="bi bi-cart-check"></i>
        </router-link>

        <router-link class="nav-link active link mx-2" aria-current="page" to="/Mycart"> 
         <i class="bi bi-person-circle"></i>
        </router-link>
      </div>

    </div>


  </div>
</nav>



 </div>

    </div>


    
</template>

<script>
    export default {
        name:'navbarComp',
        data(){
          return{
      show:false,
      showinput:{visibility:'visible'},
      hidden:{visibility:'hidden'}
          }
        },
       
    }
</script>

<style scoped>
.navbar{
    border: 2px solid rgb(194, 186, 186);
    border-radius: 10px;
    box-shadow: 3px 2px #c7c1c1;
}
.pages{
  padding-left:10% ;
  font-size: 20px;
 
}
.icons{
  padding-left:15% ;
}
i{
font-size: 25px;
color: crimson;
}
.hidden{
 visibility:hidden;
} 
i[data-v-688b5e20]{
  color: crimson !important;
  cursor: pointer;
}
input::placeholder{
  color:crimson;
  padding-left: 10px;
}
button, input, optgroup, select, textarea {
  border-color:crimson ;
  border-radius: 10px;
}
</style>