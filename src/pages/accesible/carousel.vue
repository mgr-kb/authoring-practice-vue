<script setup lang="ts">
import AccesibleLayout from '@/components/AccesibleLayout.vue';
</script>

<template>
  <AccesibleLayout>
    <template #title>
      carousel
    </template>
    <template #section-title>
      <Link
        href="https://waic.jp/docs/2019/NOTE-wai-aria-practices-1.1-20190207/#carousel"
        :is-blank="true"
        name="3.6 カルーセル"
      />
    </template>
    <template #example>
      <div
        id="carousel-group"
        class="w-64"
      >
        TBD
      </div>
    </template>
    <template #memo>
      <ul>
        <li>TBD</li>
      </ul>
    </template>
  </AccesibleLayout>
</template>