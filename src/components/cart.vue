<template>
<!-- cart items -->
<div class="container">
             <div class="headr" >
             <h3 class="title">YOUR Shopping CART</h3>
             <span class="line"></span>
             </div>
    <div class="row" v-for="product of toys" :key="product.id">
    <div class="col-lg-2">  
      <img :src="product.image"  alt="notfound" >
    </div>
    <div class="col-2">  
    <h3> {{product.name}}</h3>
     <h6> {{product.description}}</h6>
     
    </div>

    <div class="col-1">  
    <h3 class="quantity"> {{product.quantity}}</h3>
    <i class="bi bi-file-plus" @click="increment(product)"></i>
    <i class="bi bi-dash-square" @click="decrement(product)"></i>
    </div>

     <div class="col-1">  
    <h3> {{product.price}}L.E</h3>
    </div>
     <div class="col-1">  
     <i class="bi bi-trash" @click="Delete(product)"></i>
     </div>
    </div>

    <div class="row">
    <div class="col-12">
        <router-link to="/home">
     <button class="back">  &lt; Continue Shopinng</button>
        </router-link>
    </div>
    </div>

</div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'cartComp',
       
        data(){
            return{
                toys:[]
            }
        },
        created(){
          this.getcart()  
        },
         
        methods:{
            //increas quantity
            increment(product){
             product.quantity=product.quantity+1
               axios.put(`http://localhost:2030/carttoys/${product.id}`,
           {   ...product,
            
           } )
            },
            //reduce quantity
            decrement(product){
             product.quantity=product.quantity-1
               axios.put(`http://localhost:2030/carttoys/${product.id}`,
           {   ...product,
            
           } )
            },
         //delete toy
        async Delete(toy){
        await axios.delete(`http://localhost:2030/carttoys/${toy.id}`)
       .then(res=> {
        this.toys.splice(toy.id, 1);
        this.getcart()  
         console.log(res) 
         })},
         //get cart product 
            getcart(){
            axios.get('http://localhost:2030/carttoys')
            .then(res=>{
               this.toys=res.data         
            })
            .catch(error=>{
                console.log(error)
            })
         }

        }
    }
    
</script>

<style scoped>

img{
    width: 100%;
    height: 100%;
}
.quantity{
    border: 2px solid black;
    width: fit-content;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: large;
    display: inline;
   
}
i{
    font-size: 40px;
}
.headr{
   margin-top: 30px;
   margin-bottom:30px;
}
.headr .title{
    font-size: 30px;
    
    color: #EA4F73;
}
 
.headr .line{
 height: 3px;
 display: block;
 width: 23%;
 background:rgb(77, 255, 0);

}
.row{
   margin-bottom: 20px;
  
}
.bi-dash-square{
    padding-left:35px ;
    font-size: 35px;
}
.back{
    background-color: #c95a74;
    color: white;
}
i{
    cursor: pointer;
}
</style>