<template>
    <section>
      <Container>
         <div class="flex flex-col justify-center items-center lg:flex-row px-12 py-12 w-full gap-20 lg:gap-6 ">
            

            <div class="lg:w-1/3 flex flex-col justify-center items-center px-4 gap-4 lg:gap-0">
               <img class="lg:px-32 lg:py-2" src="https://demo.voidcoders.com/foodfly/wp-content/uploads/sites/18/2022/03/feature_icon.svg" alt="1">
               <h1 class="lg:px-20 lg:py-6 font-bold  text-3xl">Easy to order</h1>
               <p class="lg:px-12 lg:py-4 text-center text-gray-500 font-serif">Laoreet donec ultrices tincidunt arcu. Ultrices auctor augue lectus.</p>
            </div>

            <div class="lg:w-1/3 flex flex-col justify-center items-center px-4 gap-4 lg:gap-0">
               <img class="lg:px-32 lg:py-2" src="https://demo.voidcoders.com/foodfly/wp-content/uploads/sites/18/2022/03/feature_icon22.svg" alt="1">
               <h1 class="w-full lg:px-10 lg:py-6 text-center font-bold text-3xl">Best Food Quality</h1>
               <p class="lg:px-12 lg:py-4 text-center text-gray-500 font-serif">Laoreet donec ultrices tincidunt arcu. Ultrices auctor augue lectus.</p>
            </div>

            <div class=" lg:w-1/3 flex flex-col justify-center items-center px-4 gap-4 lg:gap-0">
               <img class="lg:px-32 lg:py-2" src="https://demo.voidcoders.com/foodfly/wp-content/uploads/sites/18/2022/03/feature_icon3.svg" alt="1">
               <h1 class="lg:px-20 lg:py-6 text-center font-bold text-3xl">Fastest Delivery</h1>
               <p class="lg;px-12 lg:py-4 text-center text-gray-500 font-serif">Laoreet donec ultrices tincidunt arcu. Ultrices auctor augue lectus.</p>
            </div>

         </div>

         <div class="flex flex-col lg:flex-row justify-center items-center gap-2 px-2">

            <div class="w-full lg:w-1/2">

               <div class="lg:relative lg:mx-24 ">

                  <div class=" py-4 px-2 lg:py-2">
                     <img src="https://demo.voidcoders.com/foodfly/wp-content/uploads/sites/18/2021/10/55.png" alt="1">

                        <div class="hidden lg:block lg:absolute w-full lg:top-72 lg:left-72">
                           <img src="https://demo.voidcoders.com/foodfly/wp-content/uploads/sites/18/2021/10/87.png" alt="2">
                        </div>

                  </div>

               </div>

            </div>

            <div class="w-full lg:w-1/2 pb-10">
            
               <div class="flex justify-center text-justify flex-col lg:px-28 gap-3 lg:gap-5 px-4" >

                  <h2 class="text-justify font-bold text-xl">Our Menus</h2>
                  <h1 class="text-justify font-bold text-3xl lg:text-4xl"> Meal plans made for your lifestyle healthy </h1>

                  <div class="flex flex-col gap-11">
                     <div>
                        <p class="text-justify font-medium ">Varius morbi enim nunc faucibus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Feugiat sed lectus vestibulum mattis ullamcorper velit. Etiam dignissim diam quis enim lobortis scelerisque.</p>
                        <p class="text-justify font-medium ">viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl the over thinks for your rhoncus.</p>
                     </div>

                     <button class="border-2 rounded-full w-48 h-14 bg-red-600 text-white hover:bg-transparent hover:text-red-600 border-red-600"><RouterLink to="/menu">View Our Menu</RouterLink></button>
                  </div>
               </div>
            </div> 

         </div>

      </Container>
   </section>
    
</template>