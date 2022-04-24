import { createApp } from 'vue'
import App from './App.vue'
import'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import homeComp from './components/home.vue';
import cartComp from './components/cart.vue'
import aboutComp from './components/aboutus.vue'
import deliveryComp from './components/delivery.vue'
import {createRouter,createWebHistory} from 'vue-router';


const routes = [
    
    {
        path:'/', 
        component:homeComp,
        
    },
    {
        path:'/home', 
        component:homeComp,
        
    },
    
    {
        path:'/Mycart', 
        component:cartComp,
    },  
    {
        path:'/About', 
        component:aboutComp,
    },
    {
        path:'/DeliveryDetails', 
        component:deliveryComp,
    }
    
   
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
