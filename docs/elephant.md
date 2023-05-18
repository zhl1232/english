# Elephant

<div v-if="show">
An elephant is one of the biggest animals in the world.

therefore , it eats a lot.

An elephant eats 150-200 kg a day.

It usually eats twice or three times a day.

An elephant eats 60-70 tons a year.

So, it eats 15 times more food than it weighs a year.

It also drink a lot of water.

It drinks 5-7 liters at once.
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
let a = ref(`An elephant is one of the biggest animals in the world.

therefore , it eats a lot.

An elephant eats 150-200 kg a day.

It usually eats twice or three times a day.

An elephant eats 60-70 tons a year.

So, it eats 15 times more food than it weighs a year.

It also drink a lot of water.

It drinks 5-7 liters at once.`.split(''))

</script>

<style>

</style>
