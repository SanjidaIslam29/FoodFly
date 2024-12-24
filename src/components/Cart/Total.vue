<template>
    <section class="border-t-2">
        <div class="flex flex-col justify-between lg:justify-center items-center lg:items-end gap-5 py-4 ">
            <div class="flex gap-32 lg:gap-56 lg:px-2 ">
                <h1 class="lg:px-16 font-bold">Subtotal</h1>
                <h1 class="font-semibold  pl-8 lg:pl-0">$30</h1>
            </div>
            <div class="flex gap-32 lg:gap-56 px-3 justify-center">
                <h1 class="lg:px-16 font-bold">Vat(5%)</h1>
                <h1 class="font-semibold pl-8 lg:pl-0">$2</h1>
            </div>
            <div class="flex gap-36 lg:gap-56  justify-center">
                <h1 class="font-bold w-2">Coupon Code</h1>
                <button class="border-b-2 border-black  lg:w-24">Add Coupon</button>
            </div>
            <div class="flex gap-56 lg:gap-56 lg:px-3 justify-center border-b-2 pb-3">
                <h1 class=" lg:pr-16 font-bold w-2 lg:w-auto">Deliver Cahrge</h1>
                <h1 class="font-semibold">$1</h1>
            </div>
            <div class="flex gap-48 lg:gap-56 lg:px-3 justify-center">
                <h1 class="lg:px-16 font-bold pr-3 lg:pr-14 w-2">Grand Total</h1>
                <h1 class="font-semibold">$33</h1>
            </div>
            <div >
                <button class="border-2 py-2 px-4 bg-red-600 hover:bg-red-900 ease-in-out transition duration-100 text-white"><RouterLink to="/checkout">Checkout</RouterLink></button>
            </div>
        </div>
    </section>
</template>