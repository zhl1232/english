# Fresh Water

<div v-if="show">
Fresh water comes from ponds, lakes, rivers and streams.

People use fresh water for drinking, farming and so on.

People can only drink fresh water.

People should drink 2 liters of water every day to make their bodies healthy.

Believe it or not, 18 percent of the world's population does not have enough drinking water.

Therefore, people should try to protect fresh water on Earth.
</div>

<button @click="show = !show">{{show ? '关闭' : '开启'}}原文</button>

<template v-for="(i, index) in a" >
  <span v-if="msg.split('')[index]"
    :style="{color: msg.split('')[index] === i ? 'green' : 'red'}">
    {{i}}
  </span>
</template>
<br />
<textarea v-model="msg" style="width: 350px; height: 200px" />

<script setup>
import { h, ref, watch } from 'vue'

const show = ref(true)
const msg = ref('')
let a = ref(`Fresh water comes from ponds, lakes, rivers and streams.

People use fresh water for drinking, farming and so on.

People can only drink fresh water.

People should drink 2 liters of water every day to make their bodies healthy.

Believe it or not, 18 percent of the world's population does not have enough drinking water.

Therefore, people should try to protect fresh water on Earth.`.split(''))

</script>

<style>

</style>
