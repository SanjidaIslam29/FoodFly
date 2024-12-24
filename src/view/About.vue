<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue';
import Card from '@/components/Card.vue';
import Container from '@/components/Container.vue';
</script>

<template>
<AppLayout>
  <section class="bg-center h-80 lg:h-[300px] bg-[url('https://demo.voidcoders.com/foodfly/wp-content/uploads/sites/18/2021/10/Group-1227.png')] bg-no-repeat">
    <Container>
      <div class=" flex flex-col justify-center items-center " >

        <div class=" lg:h-full">

          <div class="w-full py-28 lg:py-24">

            <h1 class=" font-['Poppins'] text-center  font-extrabold  text-5xl  lg:text-white text-red-800 bg-clip-text text-transparent">
              About Us
            </h1>

            <div class="">
              <ul class="flex flex-row w-full gap-3 justify-center items-center py-4">
                <li class="text-xs text-white font-semibold">HOME</li>
                
                <li class="text-xs text-white font-semibold">ABOUT US</li>
              </ul>
            </div>

          </div>

        </div>

      </div>

      
    </Container>
  </section>
  <section>
    <div class="flex justify-center items-center">
        <div class="flex flex-col justify-center items-center">
            
        </div>
        <div>

        </div>
    </div>
  </section>
</AppLayout>
</template>
  