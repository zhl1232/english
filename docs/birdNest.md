# Bird Nest

<div v-if="show">
A bird nest is built with a lot of small twigs, grass and leaves.

Some birds that live close to the ocean build their nests with fish bones.

Mother birds build a nest to protect eggs and baby birds.

It takes a few days to build a complete nest.

Did you ever closely look at a bird's nest?

Go out and try it, but be careful.

You might get attacked by a mother bird.
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
let a = ref(`A bird nest is built with a lot of small twigs, grass and leaves.

Some birds that live close to the ocean build their nests with fish bones.

Mother birds build a nest to protect eggs and baby birds.

It takes a few days to build a complete nest.

Did you ever closely look at a bird's nest?

Go out and try it, but be careful.

You might get attacked by a mother bird.`.split(''))

// const count = ref(0)
</script>

<style>

</style>
