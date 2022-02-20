<script setup lang="ts">
import { useMyRoutes } from '@/composables/useMyRoutes'
const links = useMyRoutes()
// TODO accesibleのみ
</script>

<template>
  <section>
    <h2>
      <span class="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        アクセシビリティ
      </span>
    </h2>
    <!-- TODO Navigation -->
    <div class="mt-4">
      <ul>
        <li
          v-for="(link, idx) in links"
          :key="idx"
          class="text-blue-800 hover:text-blue-600"
        >
          <Link
            :is-inner="true"
            :href="link.path"
            :name="link.name"
          />
        </li>
      </ul>
    </div>
  </section>
</template>