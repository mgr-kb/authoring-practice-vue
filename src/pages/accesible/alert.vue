<script setup lang="ts">
import Alert from '@/components/accesible/Alert.vue'
import AccesibleLayout from '@/components/AccesibleLayout.vue';
</script>

<template>
  <AccesibleLayout>
    <template #title>
      alert
    </template>
    <template #section-title>
      <Link
        href="https://waic.jp/docs/2019/NOTE-wai-aria-practices-1.1-20190207/#alert"
        :is-blank="true"
        name="3.2 アラート"
      />
    </template>
    <template #example>
      <div
        id="alert-group"
        class="w-64"
      >
        <Alert />
      </div>
    </template>
    <template #memo>
      <ul>
        <li>実例ではキーボード操作や音声読み上げを妨げないことに記載してあります。</li>
        <li class="mt-2">
          <Link
            href="https://www.w3.org/TR/wai-aria-practices/examples/alert/alert.html"
            :is-blank="true"
            name="実装例"
          />から、aria-liveやaria-atomicに言及してあり、<br>
          これはrole=alertな要素に対して暗黙的に設定される。
        </li>
        <li class="mt-2">
          aria-live="assertive"については
          <Link
            href="http://www.webcreativepark.net/html/wai-aria/aria-live/"
            :is-blank="true"
            name="こちら"
          />より、<br>内容更新があった要素に対して即座に通達してくれる。
        </li>
        <li class="mt-2">
          aria-atomic="true"については
          <Link
            href="http://www.webcreativepark.net/html/wai-aria/aria-atomic/"
            :is-blank="true"
            name="こちら"
          />より、<br>内容更新のあった要素を通達してくれる。
        </li>
      </ul>
    </template>
  </AccesibleLayout>
</template>