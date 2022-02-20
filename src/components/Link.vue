<script setup lang="ts">
defineProps({
  isInner: {
    type: Boolean,
    default: false,
  },
  isBlank: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <nuxt-link
    v-if="isInner"
    :to="href"
    class="text-blue-800 hover:text-blue-600"
  >
    {{ name }}
  </nuxt-link>
  <a
    v-else
    :href="href"
    class="text-blue-800 hover:text-blue-600"
    :target="isBlank ? '_blank' : '_self'"
    :rel="isBlank ? 'noopener noreferrer' : ''"
  >
    {{ name }}
    <span
      v-if="isBlank"
    >[別タブで開きます]</span>
  </a>
</template>