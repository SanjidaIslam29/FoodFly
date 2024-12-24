
<script setup>
import { ref } from "vue";
// Reactive quantity state
const quantity = ref(1);
</script>

<template>
             
             <section class="w-full">
              
                <div class="flex lg:gap-10 justify-between pb-4 lg:pb-0">
                    <div class="flex  flex-col lg:flex-row gap-2 lg:gap-6 lg:py-4">
                        <img class="w-16 h-16 lg:h-20 lg:py-2" src="https://cdn.pixabay.com/photo/2022/08/29/17/45/burger-7419428_640.jpg" alt="1">
                        <div class="flex flex-col ">
                            <h1 class="lg:text-lg font-semibold ">Single Beef Burger</h1>
                            <p>Single patty,Extra cheese</p>
                        </div> 
                    </div>
                    <div class="p-4 lg:p-6">
                        <h1 class="text-lg font-semibold ">$5</h1>
                    </div>
                   
                    <div class="p-4 flex">
                        <button 
                            class="px-4 w-1 lg:w-auto h-7 lg:h-10 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg" @click="const decrementQuantity = () =>
                            {
                            if (quantity.value > 1){ quantity.value--;}
                            };
                            ":disabled="quantity <= 1">-
                        </button>
                        <input type="number" class="w-9 lg:w-12 h-7 lg:h-10 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200" v-model.number="quantity" min="1"/>
                        <button class="px-4 w-1 lg:w-auto h-7 lg:h-10 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg" @click="const incrementQuantity = () => {quantity.value++;
                        };">+</button>
                    </div>
                  
                    <div class="p-3">
                        <h1 class="text-lg font-semibold">$10</h1>
                    </div>
                </div>
            </section>
</template>