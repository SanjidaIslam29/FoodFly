<script>
import Gallery from "@/components/Gallery.vue";
</script>
'<template>
          <section>
       <Container>
            <div class="flex justify-between items-start">

                <div class="w-1/2">
                    <Gallery />
                </div>              


                <div class="w-1/2">
                    <div class="flex flex-col justify-center items-start ">
                        <h1 class="text-4xl font-serif py-4 text-orange-700 font-extrabold">Single Beef Burger</h1>
                        <p class="text-xl font-serif font-medium italic text-justify py-4 ">
                            Single Beef Burger is made of 95 grams Fresh pure beef patty, no preservatives, season with salt and pepper, cooked in flat grill surface, top with cheddar cheese, assemble in a soft, toasted and buttery tasty bun with special Burger Sauce, with Lettuce, tomato and onion.
                        </p>
                        <h1 class="text-4xl font-serif text-red-950  font-bold pt-4">Price:</h1>
                        <p class="text-6xl font-serif font-semibold py-4 text-orange-700">$5.99</p>
                        <div class="py-10">
                            <button class=" border-2 rounded-sm border-red-900 bg-transparent text-2xl hover:bg-red-900 hover:text-white w-60 h-14 transition duration-300 ease-in-out"><RouterLink to="/cart">  Add to Cart</RouterLink></button>
                        </div>
                        
                    </div>
                </div>

            </div>
       </Container>
      </section>
</template>