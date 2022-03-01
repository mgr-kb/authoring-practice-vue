<script setup lang="ts">
import Button from '@/components/accesible/Button.vue'
import AccesibleLayout from '@/components/AccesibleLayout.vue';
</script>

<template>
  <AccesibleLayout>
    <template #title>
      button
    </template>
    <template #section-title>
      <Link
        href="https://waic.jp/docs/2019/NOTE-wai-aria-practices-1.1-20190207/#button"
        :is-blank="true"
        name="3.5 ボタン"
      />
    </template>
    <template #example>
      <div
        id="button-group"
        class="w-64"
      >
        <Button />
      </div>
    </template>
    <template #memo>
      <ul>
        <li>例のように、<code>button</code>タグを使わずしても同様の表現は可能。</li>
        <li>しかしbuttonを実現するならば<code>button</code>タグを利用することが推奨される。</li>
        <li class="mt-2">
          MDNにも載っているようなイメージで良いと思う。実装が簡略化できる。
        </li>
        <li>
          参考記事: <Link
            :is-blank="true"
            href="https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/button_role"
            name="ARIA: button ロール MDN"
          />
        </li>
      </ul>
    </template>
  </AccesibleLayout>
</template>