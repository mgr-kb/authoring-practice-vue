<script setup lang="ts">
const formData = ref({
  textInput: '',
})
const isOpen = ref(false)
const modalRef = ref<HTMLHeadingElement | null>(null)
const buttonRef = ref<HTMLButtonElement | null>(null)
const alertMessage = ref('')
const successMessage = ref('')

const clearMessage = () => {
  formData.value.textInput = ''
  isOpen.value = false
}
const onSubmit = () => {
  const isValid = () => {
    const { textInput } = formData.value
    return textInput.length > 0
  }
  if (!isValid()) {
    alertMessage.value = 'テキストが入力されていません！'
    successMessage.value = ''
  } else {
    alertMessage.value = ''
    successMessage.value = '登録しました！'
  }
}
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
    id="alertdialog-section"
    class="border-solid border-1 border-gray-300"
  >
    <h3 class="sr-only">
      アラートダイアログのサンプル
    </h3>
    <form @submit.prevent="onSubmit">
      <div class="border-t border-gray-200 my-2">
        <label
          for="username"
          class="block text-md font-medium text-gray-700 my-2"
        > メッセージ </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <div class="max-w-lg flex rounded-md shadow-sm">
            <textarea
              id="username"
              v-model="formData.textInput"
              name="textInput"
              placeholder="メッセージをここに入力します。"
              class="flex-1 block w-full px-2 border-2 focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-lg rounded-r-md sm:text-sm border-gray-300"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center border-t border-gray-200 my-4">
        <button
          type="submit"
          class="w-1/2 py-2 bg-blue-700 text-white hover:bg-blue-600 rounded-lg"
        >
          送信する
        </button>
        <button
          type="button"
          class="w-1/2 py-2 bg-red-700 text-white hover:bg-red-600 rounded-lg"
          @click="formData.textInput.length > 0 ? modalOpen() : ''"
        >
          クリアする
        </button>
      </div>
    </form>
    <div
      v-if="isOpen"
      role="alertdialog"
      class="backdrop fixed z-10 inset-0 overflow-y-layout"
      aria-modal="true"
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
            以下のメッセージをクリアしますか?
          </h2>
          <div>
            <div
              id="dialog-desc"
              class="mt-3 text-center sm:mt-5"
            >
              <p>{{ formData.textInput }}</p>
            </div>
            <div class="flex justify-end gap-2 mt-4">
              <button
                ref="buttonRef"
                class="px-4 py-2 rounded-lg bg-red-700 text-white hover:bg-red-600"
                @click="clearMessage"
              >
                クリアする
              </button>
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
    <div
      v-if="alertMessage"
      class="border-solid border-2 border-red-700 bg-red-400 rounded-lg"
      role="alert"
    >
      <p class="text-white px-2">
        {{ alertMessage }}
      </p>
    </div>
    <div
      v-if="successMessage"
      class="border-solid border-2 border-green-700 bg-green-400 rounded-lg"
      role="alert"
    >
      <p class="text-gray-700 px-2">
        {{ successMessage }}
      </p>
    </div>
  </section>
</template>