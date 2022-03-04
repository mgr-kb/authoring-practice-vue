<script setup lang="ts">
import Dialog from '@/components/accesible/Dialog.vue'
import AccesibleLayout from '@/components/AccesibleLayout.vue';
</script>

<template>
  <AccesibleLayout>
    <template #title>
      dialog
    </template>
    <template #section-title>
      <Link
        href="https://waic.jp/docs/2019/NOTE-wai-aria-practices-1.1-20190207/#dialog_modal"
        :is-blank="true"
        name="3.9 ダイアログ(モーダル)"
      />
    </template>
    <template #example>
      <div
        id="dialog-group"
        class="w-64"
      >
        <Dialog />
      </div>
    </template>
    <template #memo>
      <ul>
        <li>ダイアログ(モーダル)においては、モーダルを開くと基本的にダイアログ内の要素にフォーカスを当てる</li>
        <li>
          フォーカスを当てる場合、簡単には後戻りできないステップを実行する要素に対してはフォーカスを当てない
        </li>
        <li class="mt-2">
          ダイアログ(モーダル)を閉じる場合は、ダイアログが呼び出された要素にフォーカスを当てる
        </li>
        <li class="mt-2">
          <Link
            href="https://waic.jp/docs/2019/NOTE-wai-aria-practices-1.1-20190207/#dialog_modal"
            :is-blank="true"
            name="WAI-ARIAのオーサリング・プラクティスのダイアログの項目"
          />にフォーカスなどの詳細は記載されている。
        </li>
      </ul>
    </template>
  </AccesibleLayout>
</template>