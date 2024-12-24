<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue';
import Container from '@/components/Container.vue';
import CartItem from '@/components/Cart/CartItem.vue';
import Title from '@/components/Cart/Title.vue';
import Total from '@/components/Cart/Total.vue';


</script>

<template>
    <AppLayout>
        <Container>
            <Title/>
            <CartItem v-for="item in 3"/>
            <Total/>
        </Container>
    </AppLayout>
</template>