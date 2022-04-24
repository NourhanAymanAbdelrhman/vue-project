<template>
    <!-- slider -->
     <div class="container pt-5 my-5">
      <div class="row">
          <div class="col-lg-10 offset-lg-1 ">
               
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">

    <div class="carousel-item active">
      <img src="@/assets/slide-2.png" class="d-block w-100" alt="..."/>
      <div class="caption">
        <h3 class="subtitle">MIND GAMES</h3>
        <h2 class="title">FAVOURITE TOYS</h2>
        <p class="sales">SALE UP TO 60% ON SELECTED ITEMS</p>
        <div class="shop">SHOP NOW</div>
      </div>
    </div>

    <div class="carousel-item">
      <img src="@/assets/slide-2.png" class="d-block w-100" alt="...">
      <div class="caption">
        <h3 class="subtitle">MIND GAMES</h3>
        <h2 class="title">FAVOURITE TOYS</h2>
        <p class="sales">SALE UP TO 60% ON SELECTED ITEMS</p>
        <div class="shop">SHOP NOW</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/slide-2.png" class="d-block w-100" alt="...">
      <div class="caption">
        <h3 class="subtitle">MIND GAMES</h3>
        <h2 class="title">FAVOURITE TOYS</h2>
        <p class="sales">SALE UP TO 60% ON SELECTED ITEMS</p>
        <div class="shop">SHOP NOW</div>
      </div>
    </div>
  </div>
  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>
          </div>
      </div>
    </div>





<!-- shop by category -->
<div class="container pt-5 my-5">
             <div class="headr" >
             <h3 class="title">SHOP BY CATEGORY</h3>
             <span class="line"></span>
             </div>


      <div class="row">
          <div class="col-lg-2 offset-lg-1 col-sm-6">
            <img src="@/assets/category-6.png" class="d-block 
            " alt="...">
            <br>
            <button class="btn btnCONTROLCAR">CONTROLCAR</button>
          </div>

          <div class="col-lg-2 col-sm-6 ">
           <img src="@/assets/category-7.png" class="d-block" alt="..." >
           <br>
           <button class="btn btnDOLL">DOLL</button>
          </div>

          <div class="col-lg-2 col-sm-6 ">
           <img src="@/assets/category-4.png" class="d-block " alt="...">
           <br>
           <button class="btn btnGAME">GAME</button>
          </div>

          <div class="col-lg-2 col-sm-6  ">
           <img src="@/assets/category-5.png" class="d-block" alt="...">
           <br>
           <button class="btn btnANIMALS">ANIMALS</button>
          </div>

          <div class="col-lg-2  col-sm-6 ">
          <img src="@/assets/category-2.png" class="d-block " alt="...">
           <br>
           <button class="btn btnPOPULAR">POPULAR</button>
          </div>

      </div>
</div>



<!-- tranding product -->
<div class="container pt-5 my-5">
  <div class="headr" >
             <h3 class="title">TRENDING PRODUCT</h3>
             <span class="line"></span>
   </div>

<div class="row tredingToy">
  
    <div class="col-lg-4  col-md-4 col-sm-6 toy "  v-for="toy of toys" :key="toy.id"> 
      <div v-if="toy.category=='TRENDINGPRODUCT'">
     <div class="toyImage">
     <img :src="toy.image" :alt="toys[0].name" >
     </div>
     <div class="toyInformation">
    <h6>{{toy.name}}</h6>
    <star-rating v-bind:star-size="30"  :rating="toy.rate" class="rating"/>
    <buttonComp :toy="toy"/>
    <!-- <button class="addCart" @click.prevent="addtocart(toy)" >ADD TO CART</button> -->
     </div>
   </div> 
</div>

</div>

</div>




<!-- ................survices -->

<div class="container ">
     
   <div class="headr" >
             <h3 class="title">OUR SERVICES</h3>
             <span class="line"></span>
             </div>


      <div class="row">
          <div class="col-lg-1 offset-lg-1 ">
           <img src="@/assets/serviceimg-4.png" class="d-block w-100" alt="...">
          </div>
          <div class="col-lg-2 ">
           <p>Money Back Guarantee
            Send within 30 days</p>
          </div>

          <div class="col-lg-4  ">
              <img src="@/assets/servicecenterimg.png" class="d-block w-100" alt="...">
          </div>

          <div class="col-lg-1  ">
            <img src="@/assets/serviceimg-2.png" class="d-block w-100" alt="...">
          </div>

          <div class="col-lg-2  ">
          <p>Shopping Guide
          Shopping guide here</p>
          </div>
      </div>
</div>


<div class="container">
      <div class="row">
          <div class="col-lg-1 offset-lg-1 ">
           <img src="@/assets/serviceimg-3.png" class="d-block w-100" alt="...">
          </div>
          <div class="col-lg-2 ">
           <p>Gift Voucher
              Good Gifts for Good Relations!</p>
          </div>

          <div class="col-lg-1 offset-lg-4 ">
           <img src="@/assets/serviceimg-1.png" class="d-block w-100" alt="...">
          </div>
          <div class="col-lg-2 ">
           <p>Worldwide Delivery
              On order over $150-7 days</p>
          </div>

      </div>
</div>

<!-- ................................................... -->

 

 <!-- OUR CLIENTS SAY -->
 <div class="container">
             <div class="headr" >
             <h3 class="title">OUR CLIENTS SAY</h3>
             <span class="line"></span>
             </div>
  
     <div class="row">
              <div class="col-6 comment offset-3">
                <button class="btnreview" @click="previous">
                      &lt; 
               </button>
                <h5> {{reviews[i].review}}</h5>
                <button class="btnreview" @click="next">
                     &gt;  
               </button>
               </div>
               
     </div>  
    </div> 



</template>

<script>

import StarRating from 'vue-star-rating'
import axios from 'axios'
import buttonComp from './cartbutton.vue'
    export default {
        name:'homeComp',
        components: {
  StarRating,
  buttonComp
  
    },
 
          data(){
     return {
       toys:[],
      toycart:[],
      reviews:[],
      i:0
            } 
           
      },

      created(){
                this.gettoys();
                this.getreviews(); 
               
                      
            },
      methods:{
    //gettoys     
         gettoys(){
            axios.get('http://localhost:2000/toys')
            .then(res=>{
               this.toys=res.data
              
            })
            .catch(error=>{
                console.log(error)
            })
         }
         
         ,
   //get reviews
          getreviews(){
            axios.get('http://localhost:2020/reviews')
            .then(res=>{
               this.reviews=res.data
              
            })
            .catch(error=>{
                console.log(error)
            })
         },
         previous(){
          if(this.i>0){
            this.i=this.i-1
          }
          else{
            this.i=0
          }
         },
         next(){
           if(this.i<this.reviews.length){
             this.i=this.i+1
           }
           else {
             this.i=this.reviews.length
           }
         },
   //....................................................
         //post toy to cartjson
      //  addtocart(toy){
         
      //    axios.post('http://localhost:2030/carttoys',toy)
      //       .then(res=>{
      //      console.log(res)
      //    axios.put(`http://localhost:2030/carttoys/${toy.id}`,
      //      {   ...toy,
      //       quantity:toy.quantity+1
      //      } )
             
      //       })
      //       .catch(error=>{
      //           console.log(error)
      //       })
       
      // } , 
      }
           
   }
</script>

<style scoped>
.carousel-caption{
    left: 0;
    color:black;
    padding-bottom: 15%;  
}
.btnCONTROLCAR{
    background-color: rgb(223, 26, 26);
    color:white;
    border-radius: 10px;
    width: 100%;
}
.btnDOLL{
    background-color: #33C4BC;
    color:white;
    border-radius: 10px;
    width: 100%;
}
.btnGAME{
    background-color: #EA4F73;
    color:white;
    border-radius: 10px;
    width: 100%;
}
.btnANIMALS{
    background-color: #01AFED;
    color:white;
    border-radius: 10px;
    width: 100%;
}
.btnPOPULAR{
background-color:#F76C56 ;
    color:white;
    border-radius: 10px;
    width: 100%;
}
.caption{
  position: relative;
}
.caption .subtitle{
  position: absolute;
  bottom: 240px;
  left:180px;
  color:#EA4F73
}
.caption .title{
position: absolute;
  bottom: 190px;
  left:130px
}
.caption .sales{
position: absolute;
  bottom: 150px;
  left:120px;
  background-color: rgb(234, 241, 109);
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 10px;
}

.caption .shop{
 position: absolute;
  bottom: 100px;
  left:200px;
  border:#33C4BC 2px solid;
  border-radius: 50px;
  padding: 7px;
  color:white;
  background-color: #33C4BC;
}

.headr .spanclass{
  height: 2px;
  width: 100px;
  color: #F76C56;
}


.headr{
   text-align: center;
   margin-bottom:30px;
}
.headr .title{
    font-size: 30px;
    
    color: #EA4F73;
}
 
.headr .line{
 height: 3px;
 display: block;
 width: 10%;
 background:rgb(77, 255, 0);
 margin: auto;
 transition:width 0.5s ;
}
.headr:hover .line{
    width: 20%; 
}
.carousel-control-next-icon {
    background-color:#01AFED;
}
.carousel-control-prev-icon {
    background-color:#01AFED;
}
.toy{
  margin-bottom: 5%;
}
 
  
 
div .toyImage img{
  width: 80%;
  height: 250px;
  border-radius: 20px;
}
 .tredingToy{
  padding-left:5% ;
} 

.toyInformation h6{
  padding-left: 32%;
  padding-top: 3%;
}
.toyInformation .rating{
  padding-left: 15%;
  padding-bottom: 3%;
}
.toyInformation button{
  margin-left: 20%;
}
.comment{
  
    border: 2px solid rgb(194, 186, 186);
    border-radius: 10px;
    box-shadow: 3px 2px #66b4d1;
    background-color: white;
    padding: 5%;

}

.comment h5{
  display: inline;
  padding-left: 4%;
}
.comment .btnreview{
  margin-right: 3%;
   margin-left: 6%;
   background-color: #01AFED;
   color: white;
   border-radius: 50%;
}
</style>