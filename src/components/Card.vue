<template>
    <section class=" mt-10">
      
         <div  class="flex flex-wrap justify-center items-center ">
      
            <div >
               <div class="w-full lg:pt-2  lg:pr-0">
                  <img class="w-full shadow-lg rounded-t-3xl" src="https://cdn.pixabay.com/photo/2022/08/29/17/45/burger-7419428_640.jpg" alt="a">
               </div>
               <div class="text-center bg-white px-6 py-4 shadow-lg rounded-b-3xl overflow-hidden ">
                     
                     <RouterLink to="/product" class="text-xl text-center text-black font-semibold hover:font-bold hover:text-red-600">Single Beef Burgers</RouterLink>
      
                     <p class="text-center">Quisque rutrum. Aenean imperdiet ultricies nis</p>
                     <h1 class="pt-2 text-2xl">$5.99</h1>
                     <div class="pt-4" >
                        <button class=" border-2 rounded-full border-red-900 hover:bg-transparent text-sm bg-red-900 text-white hover:text-red-950 px-6 py-2 transition duration-300 ease-in-out shadow-2xl "><RouterLink to="/cart">  Add to Cart</RouterLink></button>
                     </div>
               </div>
               
            </div>
         </div>
      
   </section>
</template>