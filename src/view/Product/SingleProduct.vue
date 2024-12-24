<script setup>
import AppLayout from "@/components/AppLayout.vue";
import Container from "@/components/Container.vue";
import Gallery from "@/components/Gallery.vue";
import Card from"@/components/Card.vue";
</script>
<template>
    <AppLayout>
      <section>
       <Container>
            <div class="flex flex-row gap-4 lg:gap-14 justify-between items-start">

                <div class="w-1/2 lg:h-auto">
                    <Gallery />
                </div>              


                <div class="w-1/2 ">
                    <div class="flex flex-col justify-center items-center ">
                        <h1 class=" text-2xl lg:text-4xl font-serif lg:py-4 text-orange-700 font-extrabold">Single Beef Burger</h1>
                        <p class=" text-sm lg:text-xl font-serif font-medium italic text-justify pb-2lg:py-4 ">
                            Single Beef Burger is made of 95 grams Fresh pure beef patty, no preservatives, season with salt and pepper, cooked in flat grill surface, top with cheddar cheese, assemble in a soft, toasted and buttery tasty bun with special Burger Sauce, with Lettuce, tomato and onion.
                        </p>
                        <h1 class="text-xl lg:text-4xl font-serif text-red-950 font-bold lg:pt-4">Price:</h1>
                        <p class="text-3xl lg:text-6xl font-serif font-semibold pb-2 lg:py-4 text-orange-700">$5.99</p>
                        <div class="lg:py-10">
                            <button class=" border-2 rounded-sm border-red-900 bg-transparent text-lg lg:text-2xl hover:bg-red-900 hover:text-white w-40 lg:w-60 h-12 lg:h-14 transition duration-300 ease-in-out"><RouterLink to="/cart">  Add to Cart</RouterLink></button>
                        </div>
                        
                    </div>
                </div>

            </div>
       </Container>
      

      </section>
     
    </AppLayout>


</template>