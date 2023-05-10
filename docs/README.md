# Human Body

<div v-if="show">
A person has a head, neck, chest, two arms and two legs.

Also, a human body consists of fat, muscle and bones.  

Do you know how many bones there are in your body?

There are about 200 bones in a human body.

These bones protect our organs, such as the heart and lungs.  

We need to have a good diet to have a healthy body.
</div>

<button @click="show = !show">{{show ? '关闭' : '开启'}}原文</button>

<span v-for="(i, index) in a" :style="{color: msg.split('')[index] === i ? 'green' : 'var(--c-bg)'}">{{i}}</span>

<textarea v-model="msg" style="width: 350px; height: 200px" />

<script setup>
import { h, ref, watch } from 'vue'

const show = ref(true)
const msg = ref('')
let a = ref(`A person has a head, neck, chest, two arms and two legs.

Also, a human body consists of fat, muscle and bones.  

Do you know how many bones there are in your body?

There are about 200 bones in a human body.

These bones protect our organs, such as the heart and lungs.  

We need to have a good diet to have a healthy body.`.split(''))

// const count = ref(0)
</script>

<style>

</style>
