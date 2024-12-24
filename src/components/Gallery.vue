<template>
  
    <Swiper
      :style="{
            '--swiper-navigation-color': '#000',
            '--swiper-pagination-color': '#000',
          }"
      :loop="true"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
  >
    <SwiperSlide class="w-full" v-for="item in 4">
      <InnerImageZoom class="w-full h-auto" src="https://cdn.pixabay.com/photo/2022/08/29/17/45/burger-7419428_640.jpg" zoomType="hover"/>
    </SwiperSlide>
  </Swiper>
  <Swiper
      @swiper="setThumbsSwiper"
      :loop="true"

      
      :modules="modules" 
      :slidesperView="4"
      class="mySwiper"
    >
      <SwiperSlide >
        <div class="flex overflow-x-scroll gap-8 ">
          <img class=" h-32 w-48" src="https://cdn.pixabay.com/photo/2022/08/29/17/45/burger-7419428_640.jpg" v-for="item in 4">
        </div>
        
        
      </SwiperSlide>

    </Swiper>
 
</template>

<script setup>
import { ref } from 'vue'
import '@websitebeaver/vue-magnifier/styles.css'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';
import InnerImageZoom from 'vue-inner-image-zoom';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const modules  = [FreeMode, Navigation, Thumbs];
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
thumbsSwiper.value = swiper;
};


defineProps({
images:{
  type:Array,
  required:true
}
})
// const currentSlide = ref(0)
// const slideTo = (val)=> {
//     currentSlide.value = val
// }



</script>
