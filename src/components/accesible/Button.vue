<script setup lang="ts">
const printPage = () => {
  window.print()
}

const isMute = ref(false)
const isMute2 = ref(false)
const toggleMute = () => {
  isMute.value = !isMute.value
}
const toggleMute2 = () => {
  isMute2.value = !isMute2.value
}
</script>

<template>
  <section
    id="button-section"
    class="border-solid border-1 border-gray-300"
  >
    <h3 class="sr-only">
      ボタンのサンプル
    </h3>
    <div>
      <h4><code>button</code>タグを使わない例</h4>
      <ul>
        <li class="mt-2">
          <div
            role="button"
            tabindex="0"
            class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-center text-white cursor-pointer"
            @click="printPage"
          >
            Print Page
          </div>
        </li>
        <li class="mt-2">
          <a
            role="button"
            tabindex="0"
            :aria-pressed="isMute"
            class="block bg-purple-500 hover:bg-purple-600 px-4 py-2 border-4 border-purple-500 rounded-lg text-center text-white cursor-pointer"
            :class="{ 'bg-purple-700': isMute, 'hover:bg-purple-800': isMute, 'border-purple-800': isMute }"
            @click="toggleMute"
          >
            Mute
            <span v-if="isMute">×</span>
            <span v-else>♪</span>
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h4><code>button</code>タグを使う例</h4>
      <ul>
        <li class="mt-2">
          <button
            type="button"
            tabindex="0"
            class="w-full bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-center text-white cursor-pointer"
            @click="printPage"
          >
            Print Page
          </button>
        </li>
        <li class="mt-2">
          <button
            type="button"
            tabindex="0"
            class="w-full bg-purple-500 hover:bg-purple-600 px-4 py-2 border-4 border-purple-500 rounded-lg text-center text-white cursor-pointer"
            :class="{ 'bg-purple-700': isMute2, 'hover:bg-purple-800': isMute2, 'border-purple-800': isMute2 }"
            @click="toggleMute2"
          >
            Mute
            <span v-if="isMute2">×</span>
            <span v-else>♪</span>
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>