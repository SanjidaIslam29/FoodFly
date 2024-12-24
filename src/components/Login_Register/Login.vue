<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-14 rounded-lg shadow-md w-1/3">
        <h2 class="text-2xl font-bold mb-4 text-gray-800 text-center">Login</h2>
        <form >
          <div class="mb-4">
            <label for="email" class="block text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-smfocus:ring-red-400 focus:border-red-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700">Password</label>
            <input
              id="password"
              type="password" 
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-400 focus:border-red-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-800 focus:ring focus:ring-red-400 focus:ring-opacity-55"
          >
            Login
          </button>
        </form>
        <p class="mt-4 text-sm text-center text-gray-600">
          Don't have an account?
          <RouterLink to="/register" class="text-red-800 hover:underline">Register</RouterLink>
        </p>
      </div>
    </div>
  </template>
  

  