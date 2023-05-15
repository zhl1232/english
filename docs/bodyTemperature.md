# Body Temperature

<div v-if="show">
Our body temperature is usually 36.5 degrees.

When we are sick, our body temperature goes up.

Sometimes, a high fever is very dangerous.

We have to take medicine to lower it.

Body temperature is usually taken at a person's forehead, ear or in one's mouth.

A high fever means our bodies are fighting against bacteria or a virus.
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
let a = ref(`Our body temperature is usually 36.5 degrees.

When we are sick, our body temperature goes up.

Sometimes, a high fever is very dangerous.

We have to take medicine to lower it.

Body temperature is usually taken at a person's forehead, ear or in one's mouth.

A high fever means our bodies are fighting against bacteria or a virus.`.split(''))

</script>

<style>

</style>
