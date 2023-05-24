# Soil

<div v-if="show">
Soil is necessary for people's life.

Plants can grow from soil.

Soil gives plants a lot of nutrition.

Plants can make flowers and fruit with these nutrition.

Therefore, soil is very important for us.

Soil has different colors.

Sometimes it is brown, sometimes it is black, and sometimes it is even red.
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
let a = ref(`Soil is necessary for people's life.

Plants can grow from soil.

Soil gives plants a lot of nutrition.

Plants can make flowers and fruit with these nutrition.

Therefore, soil is very important for us.

Soil has different colors.

Sometimes it is brown, sometimes it is black, and sometimes it is even red.`.split(''))

</script>

<style>

</style>
