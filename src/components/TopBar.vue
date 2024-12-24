<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>


<template>
    
    <section  class="hidden lg:block lg:h-full lg:bg-slate-900 px-20">

        <div class=" lg:text-sm ">
        
            <ul class="flex justify-between items-center   ">

                <div class="flex justify-center">
                    
                    <li class="text-slate-100 text-center font-mono border-r-2 px-4">+8801885553993</li>
                    <li class="text-slate-100 text-center font-mono px-4">hello@domain.com</li>
                    
                </div>
                
                <div class="flex items-center justify-center gap-4">
 
                        <svg fill="#ffffff" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-285.5 -285.5 856.50 856.50" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_791_"> <path id="XMLID_792_" d="M142.75,125.5c34.601,0,62.751-28.149,62.751-62.75S177.351,0,142.75,0S79.999,28.149,79.999,62.75 S108.149,125.5,142.75,125.5z M142.75,30c18.059,0,32.751,14.691,32.751,32.75S160.809,95.5,142.75,95.5 s-32.751-14.691-32.751-32.75S124.691,30,142.75,30z"></path> <path id="XMLID_795_" d="M142.75,155.5c-63.411,0-115,51.589-115,115c0,8.284,6.716,15,15,15h200c8.284,0,15-6.716,15-15 C257.75,207.089,206.161,155.5,142.75,155.5z M59.075,255.5c7.106-39.739,41.923-70,83.675-70s76.569,30.261,83.675,70H59.075z"></path> </g> </g></svg>
                        <li class="text-slate-100 text-center font-mono hover:text-red-800 "><RouterLink to="/login" >LogIn/Register</RouterLink></li>
                    
                </div>

            </ul>

        </div>
     
    </section>

</template>