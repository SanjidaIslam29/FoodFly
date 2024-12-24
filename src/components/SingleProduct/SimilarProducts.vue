<script setup>
import Card from '@/components/Card.vue';
import Container from "@/components/Container.vue";
</script>

<template>
        <section>
            <Container>
                <h1 class="text-4xl font-serif font-bold">Related Products</h1>
            
                <div class="flex overflow-x-scroll scroll-smooth mx-3 ">
                    <div class="min-w-80 px-3" v-for="item in 8" >
                         <Card /> 
                    </div>
                    
                </div>
            </Container>
      </section>
</template>