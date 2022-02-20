<script setup lang="ts">
const formData = ref({
  username: '',
})
const alertMessage = ref('')
const successMessage = ref('')
const onSubmit = () => {
  const isValid = () => {
    const { username } = formData.value
    return username.length > 0
  }
  if (!isValid()) {
    alertMessage.value = '名前が入力されていません！'
    successMessage.value = ''
  } else {
    alertMessage.value = ''
    successMessage.value = '登録しました！'
  }
}
</script>

<template>
  <section
    id="alert-section"
    class="border-solid border-1 border-gray-300"
  >
    <h3 class="sr-only">
      アラートのサンプル
    </h3>
    <form @submit.prevent="onSubmit">
      <div class="flex justify-between items-center border-t border-gray-200 my-2">
        <label
          for="username"
          class="block text-md font-medium text-gray-700"
        > Username </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <div class="max-w-lg flex rounded-md shadow-sm">
            <input
              id="username"
              v-model="formData.username"
              type="text"
              name="username"
              placeholder="Username"
              class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
            >
          </div>
        </div>
      </div>
      <div class="border-t border-gray-200 my-4">
        <button
          type="submit"
          class="w-full py-2 bg-blue-700 text-white rounded-lg"
        >
          送信
        </button>
      </div>
    </form>
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