<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue';
import Container from '@/components/Container.vue';
import Info from '@/components/CheckOut/Info.vue';
import Payment from '@/components/CheckOut/Payment.vue';
import PlaceOrder from '@/components/CheckOut/PlaceOrder.vue';
</script>


<template>
<AppLayout>
    <Container>
        <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
                <h1 class="font-serif text-2xl text-center font-bold p-4">Checkout</h1>

                <form>
                <Info/>
                <Payment/>
                <PlaceOrder/>
                </form>
            </div>
        </div>
    </Container>
</AppLayout>
</template>