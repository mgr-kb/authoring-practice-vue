<script setup lang="ts">
const toggleAccordion = (idx: number) => {
  accorditonList.value[idx].isOpen = !accorditonList.value[idx].isOpen
}
const accordionSection = ref<HTMLElement | null>(null)
const prevAccordion = (idx: number) => {
  const prevButton = accordionSection.value && accordionSection.value.getElementsByTagName('button')[idx - 1]
  if (prevButton) {
    prevButton.focus()
  }
}
const nextAccordion = (idx: number) => {
  const nextButton = accordionSection.value && accordionSection.value.getElementsByTagName('button')[idx + 1]
  if (nextButton) {
    nextButton.focus()
  }
}

const accorditonList = ref([
  {
    title: 'アコーディオンタイトル1',
    body: 'アコーディオンの内容',
    isOpen: false,
  },
  {
    title: 'アコーディオンタイトル2',
    body: 'アコーディオンの内容',
    isOpen: false,
  },
])
</script>

<template>
  <section
    id="accordion-section"
    ref="accordionSection"
    class="border-solid border-1 border-gray-300"
  >
    <div
      v-for="(item, idx) in accorditonList"
      :key="idx"
    >
      <!-- Accordion Header -->
      <div
        class=" bg-gray-300 hover:bg-blue-200"
        :class="{ 'bg-blue-200': item.isOpen }"
      >
        <h3>
          <button
            class="flex justify-between items-center w-full px-4 py-2"
            :aria-expanded="item.isOpen"
            :aria-controls="`accordion-${idx}}`"
            @click="toggleAccordion(idx)"
            @keydown.down="nextAccordion(idx)"
            @keydown.up="prevAccordion(idx)"
          >
            <span>
              {{ item.title }}
            </span>
            <svg
              class="w-3 transition-all duration-200 transform"
              :class="{
                'rotate-180': item.isOpen,
                'rotate-0': !item.isOpen,
              }"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 10"
            >
              <path
                d="M15 1.2l-7 7-7-7"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </h3>
      </div>
      <!-- Accordion Panel -->
      <div
        :id="`accordion-${idx}`"
        class="transition-all duration-400 overflow-hidden px-4"
        :class="{
          'max-h-96': item.isOpen,
          'py-2': item.isOpen,
          'max-h-0': !item.isOpen,
          'py-0': !item.isOpen,
        }"
      >
        <span>
          {{ item.body }}
        </span>
      </div>
    </div>
  </section>
</template>