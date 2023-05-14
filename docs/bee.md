# Bee

<div v-if="show">
Many people do not like bees.

Bees protect themselves and their hives by stinging humans.

However, bees do a lot of jobs in nature.

Bees make honey and people can enjoy the sweet honey.

Bees move pollen between plants.

These flowers produce fruit.

If there were no bees, maybe we could not eat fruit.
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
let a = ref(`Many people do not like bees.

Bees protect themselves and their hives by stinging humans.

However, bees do a lot of jobs in nature.

Bees make honey and people can enjoy the sweet honey.

Bees move pollen between plants.

These flowers produce fruit.

If there were no bees, maybe we could not eat fruit.`.split(''))

// const count = ref(0)
</script>

<style>

</style>
