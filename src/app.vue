<script setup lang="ts">
import Breadcrumb from '@/components/accesible/Breadcrumb.vue'
const nowPageName = useRoute().name === 'index' ? 'HOME' : useRoute().name
</script>
<template>
  <Html lang="ja">
    <Head>
      <title>{{ nowPageName }} | authoring-practice-vue</title>
    </Head>
    <div class="min-h-full">
      <header class="bg-green-200">
        <TheHeader />
      </header>
      <main class="max-w-7xl mx-auto px-4 my-2 sm:px-6 sm:my-4 lg:px-8 lg:my-6">
        <Breadcrumb />
        <NuxtPage />
      </main>
    </div>
  </Html>
</template>
