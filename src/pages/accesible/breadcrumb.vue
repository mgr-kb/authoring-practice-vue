<script setup lang="ts">
import BreadCrumb from '@/components/accesible/BreadCrumb.vue'
import AccesibleLayout from '@/components/AccesibleLayout.vue';
</script>

<template>
  <AccesibleLayout>
    <template #title>
      breadcrumb
    </template>
    <template #section-title>
      <Link
        href="https://waic.jp/docs/2019/NOTE-wai-aria-practices-1.1-20190207/#breadcrumb"
        :is-blank="true"
        name="3.4 パンくず"
      />
    </template>
    <template #example>
      <div
        id="breadcrumb-group"
        class="w-64"
      >
        <BreadCrumb />
      </div>
    </template>
    <template #memo>
      <ul>
        <li>パンくずリストで現在の位置を示す</li>
        <li class="mt-2">
          aria-label="Breadcrumb"とすることでパンくずリストであることを示す。
        </li>
        <li class="mt-2">
          現在のページのアイテムにaria-current="page"とすることで現在のページを示す。
        </li>
      </ul>
    </template>
  </AccesibleLayout>
</template>