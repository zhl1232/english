# Skin

<div v-if="show">
Skin fills a lot of important roles in our body.

If we didn'have skin, viruses and bacteria could easily get into our bodies.

If that happened, these viruses and bacteria could make many diseases in our bodies.

Skin also stores water and blood in our bodies.

We cannot live without skin.

Therefore, we have to take good care of our skin.
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
let a = ref(`Skin fills a lot of important roles in our body.

If we didn'have skin, viruses and bacteria could easily get into our bodies.

If that happened, these viruses and bacteria could make many diseases in our bodies.

Skin also stores water and blood in our bodies.

We cannot live without skin.

Therefore, we have to take good care of our skin.`.split(''))

</script>

<style>

</style>
