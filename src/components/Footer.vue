<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>


<template>
        <div class="flex flex-col justify-center items-center  text-white bg-[url('https://demo.voidcoders.com/foodfly/wp-content/uploads/sites/18/2022/05/footer_wave_bg.svg')] bg-cover bg-center">
            <div class="flex flex-col lg:flex-row w-full mx-9 lg:px-20  justify-center items-center font-semibold font-[sans-serif] ">
                <div class=" w-full lg:w-1/3  ">
                    <div class="flex items-center justify-center py-4 lg:py-2">
                        <img class="w-1/3 h-full " src="https://demo.voidcoders.com/foodfly/wp-content/uploads/sites/18/2022/03/logo_white.svg" alt="logo">
                    </div>
                </div>
                <div class="w-full lg:w-2/3 ">
                    <div class="flex flex-col lg:flex-row justify-center items-center">
                        <div class="w-1/2 ">
                            <ul class="flex flex-col lg:flex-row  justify-center items-center gap-2 lg:gap-4 py-1 ">
                                <div class="flex flex-col text-left" >
                                    <li class="hover:text-gray-800 text-xs lg:text-sm hover:font-serif "><RouterLink to="/help">Help</RouterLink></li>
                                </div>
                                <div>
                                    <li class="hover:text-gray-800 text-xs lg:text-sm hover:font-serif text-left"><RouterLink to="/faqs">FAQ's</RouterLink></li>
                                </div>
                            </ul>
                        </div>
                        <div class="flex justify-center items-center py-2">
                            <div class="w-1/2 mx-10">
                                <h1 class="w-full  text-xs text-center">Contact Us</h1>
                                <h2 class="w-full  text-xs text-justify">+8801885553993</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center border-t-2 border-slate-700  w-[240px] lg:w-[1100px] border-opacity-30 py-4">
                <div class=" flex text-[6px] lg:text-sm text-center">
                <p >© 2024 FoodFly  - All Rights Reserved Made by VoidCoder</p>
                </div>
            </div>
        </div>
    

</template>