# north Pole

<div v-if="show">
The North Pole is located in the middle of the Arctic Ocean.

In winter, the temperature goes to -49°F.

Even in summer, the temperature is around 32°F.

During the summer, we can see white nights at the North Pole.

Ice at the North Pole is usually two or three meters thick.

However, the North Pole is warmer than the South Pole.
</div>

<button @click="show = !show">{{show ? '关闭' : '开启'}}原文</button>

<template v-for="(i, index) in a" >
  <span v-if="msg.split('')[index]"
    :style="{color: msg.split('')[index] === i ? 'green' : 'red'}">
    {{i}}
  </span>
</template>

<textarea v-model="msg" style="width: 350px; height: 200px" />

<script setup>
import { h, ref, watch } from 'vue'

const show = ref(true)
const msg = ref('')
let a = ref(`The North Pole is located in the middle of the Arctic Ocean.

In winter, the temperature goes to -49°F.

Even in summer, the temperature is around 32°F.

During the summer, we can see white nights at the North Pole.

Ice at the North Pole is usually two or three meters thick.

However, the North Pole is warmer than the South Pole.`.split(''))

// const count = ref(0)
</script>

<style>

</style>
