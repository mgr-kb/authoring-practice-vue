<script setup lang="ts">
const isOpen = ref(false)
const toggleDrawer = () => {
  isOpen.value = !isOpen.value
}
const { routes } = useMyRoutes()
const navs = routes.value.filter(route => {
  if (route.path === '/') {
    return
  }
  const params = route.path.substring(1).split('/')
  if (params.length === 1) {
    return route
  }
})
const nowPath = useRoute().path
</script>
<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            :aria-expanded="!isOpen"
            @click="toggleDrawer"
          >
            <span class="sr-only">メニューを開く</span>
            <svg
              v-if="!isOpen"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              :aria-hidden="isOpen"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-if="isOpen"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              :aria-hidden="!isOpen"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <h1 class="flex-shrink-0 flex items-center">
            <a
              href="/"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              HOME
            </a>
          </h1>
          <ul class="hidden sm:flex sm:ml-6">
            <li
              v-for="(route, index) in navs"
              :key="index"
              class="flex space-x-4"
            >
              <a
                v-if="route.path === nowPath"
                :href="route.path"
                class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                aria-current="page"
              >
                {{ route.name }}
              </a>
              <a
                v-else
                :href="route.path"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {{ route.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      v-if="isOpen"
      id="mobile-menu"
      class="sm:hidden"
    >
      <ul class="px-2 pt-2 pb-3 space-y-1">
        <li
          v-for="(route, index) in navs"
          :key="index"
        >
          <a
            v-if="route.path === nowPath"
            :href="route.path"
            class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
            aria-current="page"
          >
            {{ route.name }}
          </a>
          <a
            v-else
            :href="route.path"
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            {{ route.name }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>