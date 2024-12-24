<script setup>
    import Header from "@/components/Header.vue";
    import Footer from "@/components/Footer.vue";
    import TopBar from "@/components/TopBar.vue";
    


</script>

<template>
        <TopBar />
        <Header />
        <main  class="pt-20 lg:pt-0">

            <slot />
        </main>
        <Footer />
</template>