<script setup lang="ts">
import { RouterLink } from 'vue-router';
// import TopBar from "@/components/TopBar.vue";
</script>

<template>
  <!-- <TopBar /> -->
  
    <header class= "h-4 lg:h-full lg:pt-4">
      <div class="flex justify-center lg:px-20 text-s lg:text-lg  lg:items-center font-thin font-[sans-serif] text-gray-500  bg-no-repeat bg-cover">
        <!-- Logo Section -->
        <div class="w-1/3 lg:w-1/2 ">
          <div class="flex justify-between w-full h-full lg:w-1/2  lg:pt-2 ">
            <img class="w-full h-auto lg:w-1/3 lg:h-auto px-2 lg:pb-8 lg:px-0" src="https://demo.voidcoders.com/foodfly/wp-content/uploads/sites/18/2022/03/logo.svg" alt="logo">
          </div>
        </div>
        <!-- Navigation Section -->
        <div class="hidden lg:block w-1/3 lg:w-1/2">

          <nav class="flex">
            <ul class="flex  gap-10 px-2 lg:pb-8 justify-center items-center ">
              <li class="text-lg hover:text-xl hover:text-orange-600 ease-in-out hover:font-serif"><RouterLink to="/">Home</RouterLink></li>
              <li class="text-lg hover:text-xl hover:text-orange-600 ease-in-out hover:font-serif"><RouterLink to="/about">About Us</RouterLink></li>
              <li class="text-lg hover:text-xl hover:text-orange-600 ease-in-out hover:font-serif"><RouterLink to="/menu">Menu</RouterLink></li>
              <li class="text-lg hover:text-xl hover:text-orange-600 ease-in-out hover:font-serif"><RouterLink to="/blogs">Blogs</RouterLink></li>
              <li class="text-lg hover:text-xl hover:text-orange-600 ease-in-out hover:font-serif"><RouterLink to="/shop">Shop</RouterLink></li>
              <li class="text-lg hover:text-xl hover:text-orange-600 ease-in-out hover:font-serif"><RouterLink to="/delivery">Delivery</RouterLink></li>
            </ul>
          </nav>

        </div>
        
      <div class="flex justify-center">
        <div class="w-full">
        <div class="w-1/2 lg:w-full flex ">
            <div class="lg:hidden ">
                <svg width="120px" height="100px" viewBox="-19.92 -19.92 63.84 63.84" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, -1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="11.976"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="0.624" stroke-linecap="round" stroke-linejoin="round"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="0.624" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            <div class="flex justify-center items-center lg:pb-10 ">
            
              <svg width="50px" height="64px" viewBox="-24 -24 72.00 72.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(3.24,3.24), scale(0.73)"><rect x="-24" y="-24" width="72.00" height="72.00" rx="36" fill="#004000" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.6320000000000001"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" stroke-width="1.6320000000000001" stroke-linecap="round" stroke-linejoin="round"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" stroke-width="1.6320000000000001" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              <svg width="50px" height="64px" viewBox="-24 -24 72.00 72.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(2.76,2.76), scale(0.77)"><rect x="-24" y="-24" width="72.00" height="72.00" rx="36" fill="#004000" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.4800000000000001"></g><g id="SVGRepo_iconCarrier"> <path d="M21 5L19 12H7.37671M20 16H8L6 3H3M16 5.5H13.5M13.5 5.5H11M13.5 5.5V8M13.5 5.5V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#ffffff" stroke-width="1.656" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </header>
  
  </template>
  