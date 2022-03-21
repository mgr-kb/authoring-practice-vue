<script setup lang="ts">
const checkedList = ref(['lettuce'])
const isAriaChecked = () => {
  const length = checkedList.value.length
  return length === 4 ? true : length > 0 ? 'mixed' : false
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
      <fieldset class="border-solid border-2 border-black p-2">
        <legend>
          Sandwich Condiments
        </legend>
        <div
          role="checkbox"
          class="group_checkbox"
          :aria-checked="isAriaChecked"
          aria-controls="cond1 cond2 cond3 cond4"
          tabindex="0"
        >
          All condiments
        </div>
        <ul class="checkboxes">
          <li>
            <label>
              <input
                id="cond1"
                v-model="checkedList"
                type="checkbox"
                value="lettuce"
              >
              Lettuce
            </label>
          </li>
          <li>
            <label>
              <input
                id="cond2"
                v-model="checkedList"
                type="checkbox"
                value="tomato"
              >
              Tomato
            </label>
          </li>
          <li>
            <label>
              <input
                id="cond3"
                v-model="checkedList"
                type="checkbox"
                value="mustard"
              >
              Mustard
            </label>
          </li>
          <li>
            <label>
              <input
                id="cond4"
                v-model="checkedList"
                type="checkbox"
                value="sprouts"
              >
              Sprouts
            </label>
          </li>
        </ul>
      </fieldset>
    </div>
  </section>
</template>