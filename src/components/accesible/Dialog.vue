<script setup lang="ts">
const isOpen = ref(false)
const modalRef = ref<HTMLHeadingElement | null>(null)
const buttonRef = ref<HTMLButtonElement | null>(null)

const modalOpen = async () => {
  isOpen.value = true
  await nextTick()
  modalRef.value?.focus()
}
const modalClose = () => {
  isOpen.value = false
  buttonRef.value?.focus()
}
</script>

<template>
  <section
    id="dialog-section"
    class="border-solid border-1 border-gray-300"
  >
    <h3 class="sr-only">
      ダイアログのサンプル
    </h3>
    <div>
      <button
        ref="buttonRef"
        type="button"
        class="w-1/2 py-2 bg-blue-700 text-white hover:bg-blue-600 rounded-lg"
        @click="modalOpen"
      >
        モーダルを開く
      </button>
    </div>

    <div
      v-if="isOpen"
      role="dialog"
      class="backdrop fixed z-10 inset-0 overflow-y-layout"
      :aria-modal="isOpen"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-desc"
      @keydown.escape="modalClose()"
    >
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          @click="modalClose()"
        />
        <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <h2
            id="dialog-title"
            ref="modalRef"
            class="text-2xl text-center focus:bg-blue-200"
            tabIndex="-1"
          >
            モーダルのタイトル
          </h2>
          <div>
            <div
              id="dialog-desc"
              class="mt-3 text-center sm:mt-5"
            >
              <p>サンプルテキスト</p>
            </div>
            <div class="flex justify-end gap-2 mt-4">
              <button
                class="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600"
                @click="modalClose()"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>