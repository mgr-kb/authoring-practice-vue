<script setup lang="ts">
import AlertDialog from '@/components/accesible/AlertDialog.vue'
import AccesibleLayout from '@/components/AccesibleLayout.vue';
</script>

<template>
  <AccesibleLayout>
    <template #title>
      alertdialog
    </template>
    <template #section-title>
      <Link
        href="https://waic.jp/docs/2019/NOTE-wai-aria-practices-1.1-20190207/#alertdialog"
        :is-blank="true"
        name="3.3 アラートとメッセージ・ダイアログ"
      />
    </template>
    <template #example>
      <div
        id="alertdialog-group"
        class="w-64"
      >
        <AlertDialog />
      </div>
    </template>
    <template #memo>
      <ul>
        <li>アラート・ダイアログはモーダルのダイアログである。</li>
        <li class="mt-2">
          支援技術やブラウザが、通常のダイアログとは別に識別をする。
        </li>
        <li>そのため、システムのアラート音などを再生することがある。</li>
        <li class="mt-2">
          関連するaria属性としては、aria-labelledby, aria-label, aria-describedbyがある。
        </li>
        <li>
          <Link
            href="https://yaraneba.com/aria-describedby/"
            :is-blank="true"
            name="aria-describedby属性の動作検証の記事"
          />などがわかりやすいかも。
        </li>
      </ul>
    </template>
  </AccesibleLayout>
</template>