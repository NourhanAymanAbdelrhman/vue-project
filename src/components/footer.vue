<template>
    <div class="container-fluid pt-5">
      <div class="row">
          <div class="col-lg-4 offset-1">
          <img src="@/assets/demo-shop-logo-1631275157.jpg" alt="" 
           class="d-inline-block align-text-top"><br><br>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor Lorem ipsum dolor sit amet,
               labore et dolore magna aliqua.</p>
            </div>

          <div class="col-lg-2 ">
         <h3>  Your Account</h3>
         <p> Personal info</p>
         <p>Orders</p>
         <p> Credit slips</p>
         <p> Addresses</p>
          </div>

          <div class="col-lg-2 ">
          <h3> Information</h3>
          <p>Specials</p>
          <p>New products</p>
          <p>Best sellers</p>
          <p>Our stores</p>
          </div>

          <div class="col-lg-2 ">
           <h3> Contact Us</h3>
           <p>Phone :  +91 23456789</p>
           <p>Address :  Demo Shop</p>
           <p> United States</p>
           <p>Email :  admin@gmail.com</p>
          </div>


      </div>
    </div>
</template>

<script>
    export default {
        name:'footerComp',
    }
</script>

<style scoped>
.row {
  background: url('@/assets/parallax.jpg') ;
   background-size: cover !important;
    background-repeat: no-repeat !important;
   
    padding-top: 3%;
     padding-bottom: 2%;
}
</style>