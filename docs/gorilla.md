# Gorilla

<div v-if="show">
About 99% of a guerrilla's DNA is the same as the humans.

Therefore, they are one of the smartest animals.

Gorillas live in the forest in Africa.

Their height is usually about 5 feet 5 to 5 feet 9 inches.

They weigh about 310 to 450 pounds.

Gorillas eat fruit, leaves and small insects.

They also have fingerprints like humans.
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
let a = ref(`About 99% of a guerrilla's DNA is the same as the humans.

Therefore, they are one of the smartest animals.

Gorillas live in the forest in Africa.

Their height is usually about 5 feet 5 to 5 feet 9 inches.

They weigh about 310 to 450 pounds.

Gorillas eat fruit, leaves and small insects.

They also have fingerprints like humans.`.split(''))

</script>

<style>

</style>
