# Magnet

<div v-if="show">
Magnets are very interesting objects.

Each has a positive pole and a negative pole.

One for each end.

Similar poles push each other away.

Different poles pull each other closer.

A compass is a kind of magnet and it is very useful.

With a compass we can easily find where we are.
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
let a = ref(`Magnets are very interesting objects.

Each has a positive pole and a negative pole.

One for each end.

Similar poles push each other away.

Different poles pull each other closer.

A compass is a kind of magnet and it is very useful.

With a compass we can easily find where we are.`.split(''))

</script>

<style>

</style>
