<script setup>
import AppLayout from "@/components/AppLayout.vue";
import Container from "@/components/Container.vue";
import HeroSection from "@/components/HeroSection.vue";
import Process from"@/components/Process.vue";
import Card from"@/components/Card.vue";
import Process2 from "@/components/Process2.vue";
</script>

<template>
   <AppLayout>
      
      <HeroSection />
      <Process />
      <section class="bg-orange-400 h-full mt-10 py-12 ">
           
         <Container>
            <div >
               <div class="flex flex-col items-center justify-center text-center lg:py-5">
                  
                     <h2 class="text-xl lg:text-2xl font-semibold text-yellow-50 lg:py-4">Our Item's</h2>
                  
                     <h1 class=" text-3xl lg:text-5xl text-center font-serif font-bold text-yellow-50">Popular Foods</h1>
                  
               </div>
               
               <div class="w-full flex justify-center items-center py-4 lg:py-4 lg:px-10  gap-4 ">
                  <ul class="flex gap-2 justify-center items-center flex-wrap">
                      
                        <li class="px-4 py-4 text-center transition-all ease-in-out duration-500 border-2 font-bold font-serif bg-transparent text-white hover:bg-red-600 hover:text-white  hover:border-red-600 ">All</li>
                     
                    
                     
                        <li class="px-2 py-4 text-center transition-all ease-in-out duration-500  border-2 font-bold font-serif bg-transparent text-white hover:bg-red-600 hover:text-white  hover:border-red-600 ">Burger</li>
                    
                     
                     
                        <li class="px-2 py-4 lg:p-4  text-center transition-all ease-in-out duration-500  border-2 font-bold font-serif bg-transparent text-white hover:bg-red-600 hover:text-white  hover:border-red-600 ">Desserts</li>
                     
                     
                      
                        <li class=" px-2 py-4  text-center transition-all ease-in-out duration-500  border-2 font-bold font-serif bg-transparent text-white hover:bg-red-600 hover:text-white  hover:border-red-600 "> Chinese Food</li>
                     
                     
                     
                        <li class=" px-2 py-4 text-center transition-all ease-in-out duration-500  border-2 font-bold font-serif bg-transparent text-white hover:bg-red-600 hover:text-white hover:border-red-600 ">Hot Pizza</li>
                     
                     
                     
                        <li class=" px-2 py-4 text-center transition-all ease-in-out duration-500  border-2 font-bold font-serif bg-transparent text-white hover:bg-red-600 hover:text-white  hover:border-red-600 ">Fast Food</li>      
                     
                     
                        <li class="  px-2 py-4 text-center transition-all ease-in-out duration-500  border-2 font-bold font-serif bg-transparent text-white hover:bg-red-600 hover:text-white  hover:border-red-600 ">Drinks</li>
                     
                  </ul>  
               </div>
               <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  
                     <Card  v-for="item in 8" /> 
                  
               </div>
            </div>
         </Container>
   </section>
      <Process2 />

    </AppLayout>
</template>

