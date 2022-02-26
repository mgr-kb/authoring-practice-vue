<script setup lang="ts">
import Breadcrumb from '@/components/accesible/Breadcrumb.vue'
</script>
<template>
  <div class="min-h-full">
    <header class="bg-green-200">
      <TheHeader />
    </header>
    <main class="max-w-7xl mx-auto px-4 my-2 sm:px-6 sm:my-4 lg:px-8 lg:my-6">
      <Breadcrumb />
      <NuxtPage />
    </main>
  </div>
</template>
