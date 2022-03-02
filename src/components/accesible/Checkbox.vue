<script setup lang="ts">
const checkedList = ref([])
const onSubmit = () => {
  alert(`checked: ${checkedList.value}`)
}
</script>

<template>
  <section
    id="checkbox-section"
    class="border-solid border-1 border-gray-300"
  >
    <h3 class="sr-only">
      チェックボックスのサンプル
    </h3>
    <div>
      <form @submit.prevent="onSubmit">
        <div class="block">
          <input
            id="tomato"
            v-model="checkedList"
            value="tomato"
            type="checkbox"
          >
          <label
            for="tomato"
            class="ml-1"
          >Tomato</label>
        </div>
        <div class="block">
          <input
            id="banana"
            v-model="checkedList"
            value="banana"
            type="checkbox"
          >
          <label
            for="banana"
            class="ml-1"
          >Banana</label>
        </div>
        <div class="block">
          <input
            id="onion"
            v-model="checkedList"
            value="onion"
            type="checkbox"
          >
          <label
            for="onion"
            class="ml-1"
          >Onion</label>
        </div>
        <div class="block">
          <input
            id="potato"
            v-model="checkedList"
            value="potato"
            type="checkbox"
          >
          <label
            for="potato"
            class="ml-1"
          >Potato</label>
        </div>
        <div class="block mt-2">
          <button
            type="submit"
            class="px-4 py-1 bg-green-700 hover:bg-green-600 text-white rounded-lg"
          >
            送信
          </button>
        </div>
      </form>
    </div>
  </section>
</template>