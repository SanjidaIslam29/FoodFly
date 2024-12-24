<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-6 rounded-lg shadow-md w-1/3">
        <h2 class="text-2xl font-bold mb-4 text-gray-800 text-center">Register</h2>
        <form >
          <div class="mb-4">
            <label for="name" class="block text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-100 focus:border-red-300"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-100 focus:border-red-300"
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-100 focus:border-red-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:ring focus:ring-green-300 focus:ring-opacity-50"
          >
            Register
          </button>
        </form>
        <p class="mt-4 text-sm text-center text-gray-600">
          Already have an account?
          <RouterLink to="/login" class="text-red-800 hover:underline">Login</RouterLink>
        </p>
      </div>
    </div>
  </template>
  

  