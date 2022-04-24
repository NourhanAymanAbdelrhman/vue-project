<template>
    <div>
   <button class="addCart" @click.prevent="addtocart(toy)" >ADD TO CART</button>
    </div>
</template>

<script> 
import axios from 'axios'
    export default {
        
        name:'buttonComp',
        props:["toy"]
        ,
        methods:{
            addtocart(toy){
         
         axios.post('http://localhost:2030/carttoys',toy)
            .then(res=>{
           console.log(res)
         axios.put(`http://localhost:2030/carttoys/${toy.id}`,
           {   ...toy,
            quantity:toy.quantity+1
           } )
             
            })
            .catch(error=>{
                console.log(error)
            })
       
      } 
        }
    }
</script>

<style scoped>
.addCart{
  border-radius: 30px;
  background-color: #01AFED;
  color: white;
   padding-left:10px; 
   padding-right:10px; 
   border-color:white; 
    margin-left:20% ;
}
</style>