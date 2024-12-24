<template>
                <section>
                <div>
                    <h3 class="text-lg font-semibold mt-6 mb-2">Payment Details</h3>
                    <div class="mb-4">
                    <label for="card-number" class="block text-sm font-medium text-gray-700">Card Number</label>
                    <input
                        type="text"
                        id="card-number"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="1234 5678 9101 1121"
                    />
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="expiry-date" class="block text-sm font-medium text-gray-700">Expiry Date</label>
                        <input
                        type="text"
                        id="expiry-date"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="MM/YY"
                        />
                    </div>
                    <div>
                        <label for="cvv" class="block text-sm font-medium text-gray-700">CVV</label>
                        <input
                        type="text"
                        id="cvv"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="123"
                        />
                    </div>
                </div>
            </section>
</template>