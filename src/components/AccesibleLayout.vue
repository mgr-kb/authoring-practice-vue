<script setup lang="ts"></script>
<template>
  <section>
    <h2>
      <span class="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <slot name="title" />
      </span>
    </h2>
    <section class="mt-4">
      <h3>
        <span class="mt-2 block text-xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-2xl">
          オーサリングプラクティス
        </span>
      </h3>

      <slot name="section-title" />
    </section>
    <section class="mt-8">
      <h3>
        <span class="mt-2 block text-xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-2xl">
          実例
        </span>
      </h3>
      <div class="mt-4">
        <slot name="example" />
      </div>
    </section>
    <section class="mt-8">
      <h3>
        <span class="mt-2 block text-xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-2xl">
          理解memo (随時改善)
        </span>
      </h3>
      <div class="mt-4">
        <slot name="memo" />
      </div>
    </section>
  </section>
</template>