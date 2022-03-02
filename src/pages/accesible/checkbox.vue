<script setup lang="ts">
import Checkbox from '@/components/accesible/Checkbox.vue'
import AccesibleLayout from '@/components/AccesibleLayout.vue';
</script>

<template>
  <AccesibleLayout>
    <template #title>
      accordion (TBD)
    </template>
    <template #section-title>
      <Link
        href="https://waic.jp/docs/2019/NOTE-wai-aria-practices-1.1-20190207/#checkbox"
        :is-blank="true"
        name="3.7 チェックボックス"
      />
    </template>
    <template #example>
      <div
        id="checkbox-group"
        class="w-64"
      >
        <Checkbox />
      </div>
    </template>
    <template #memo>
      <ul>
        <li>TBD</li>
      </ul>
    </template>
  </AccesibleLayout>
</template>