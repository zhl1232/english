# 根据艾宾浩斯曲线计算复习日期

<span v-for="(item, index) in list">
  <span :style="genStyle(index + 1)">
    {{ genCurrentDate(index + 1) }}
  </span>
  : 
  <RouterLink  :to=" `./${page[a]}.html` "
    v-for="a in item" style="margin-right: 5px">
    {{page[a]}}
  </RouterLink> 
  <br />
</span>

<script setup>
import { h, ref, watch } from 'vue'

const page = ['humanBody', 'northPole', 'pineTree', 'birdNest', 'bee', 'bodyTemperature', 'freshWater', 'magnet', 'elephant', 'skin', 'soil']

function gen(unit = 32) {
  const dateList = []
  const days = [1, 2, 4, 7, 14, 31] // 复习间隔天数
  for (let index = 0; index < unit; index++) {

    dateList.push([index, days.map(item => item + index)])

  }
  const res = []
  dateList.forEach(([contentIndex, days]) => {

    days.forEach((day) => {
      if (res[day]) {
        res[day].push(contentIndex);
      } else {
        res[day] = [contentIndex];
      }
    });

  })
  return res
}
const temp = gen()
temp.shift()
const list = ref(temp)

function genCurrentDate(day) {
  const startDate = new Date('2023-5-15')
  startDate.setDate(startDate.getDate() + day)
  return `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()} `
}
function genStyle(day) {
  const startDate = new Date('2023-5-15')
  startDate.setDate(startDate.getDate() + day)
  const isToday = startDate.getMonth() === new Date().getMonth() && startDate.getDate() === new Date().getDate()
  return { color: isToday ? '--c-text' : startDate < new Date() ? 'green' : 'red' }
}
</script>
