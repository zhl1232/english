# Pine Tree

<div v-if="show">
If people look around, they can easily find pine trees.

There are about 115 different kinds of pine trees all over the world.

People use pine trees for many reasons.

In old times, people built houses with pine trees.

Now people use pine-leaf powder for healthy drinks.

Also, dried pine trees are good for baseball bats.

What a useful tree it is!
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
let a = ref(`If people look around, they can easily find pine trees.

There are about 115 different kinds of pine trees all over the world.

People use pine trees for many reasons.

In old times, people built houses with pine trees.

Now people use pine-leaf powder for healthy drinks.

Also, dried pine trees are good for baseball bats.

What a useful tree it is!`.split(''))

// const count = ref(0)
</script>

<style>

</style>
