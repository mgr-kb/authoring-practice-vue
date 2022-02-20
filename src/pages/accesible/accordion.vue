<script setup lang="ts">
import Accordion from '@/components/accesible/Accordion.vue'
import AccesibleLayout from '@/components/AccesibleLayout.vue';
</script>

<template>
  <AccesibleLayout>
    <template #title>
      accordion
    </template>
    <template #section-title>
      <Link
        href="https://waic.jp/docs/2019/NOTE-wai-aria-practices-1.1-20190207/#accordion"
        :is-blank="true"
        name="3.1 アコーディオン(表示/非表示機能を伴ったセクション)"
      />
    </template>
    <template #example>
      <div
        id="accordion-group"
        class="w-64 border-solid border-2 border-green-600"
      >
        <Accordion />
      </div>
    </template>
    <template #memo>
      <ul>
        <li>キーボード操作でのアコーディオン・ヘッダーの移動について</li>
        <li>アコーディオングループにrefを設定する</li>
        <li>refで設定したアコーディオングループのHTMLElementから、アコーディオンヘッダーを探索する</li>
      </ul>
    </template>
  </AccesibleLayout>
</template>