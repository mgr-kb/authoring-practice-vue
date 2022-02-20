<script setup lang="ts"></script>
<template>
  <nav class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <h1 class="flex justify-start lg:w-0 lg:flex-1">
        <nuxt-link to="/">
          <span class="sr-only">ホームに戻る</span>
          <svg
            style="width:48px;height:48px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
            />
          </svg>
        </nuxt-link>
      </h1>
      <div class="-mr-2 -my-2 md:hidden">
        <button
          type="button"
          class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded="false"
        >
          <span class="sr-only">Open menu</span>
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <!-- <ul class="hidden md:flex space-x-10 items-center justify-end md:flex-1 lg:w-0">
        <li><nuxt-link to="#" class="text-base font-medium px-4 py-2 border border-transparent rounded-md shadow-sm text-gray-100 bg-indigo-600 hover:bg-indigo-700">ログインする</nuxt-link></li>
      </ul> -->
    </div>
  </nav>
</template>