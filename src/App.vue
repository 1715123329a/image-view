<script setup lang="ts">
import ImageView from './components/ImageView/index.vue'
import { reactive, ref } from 'vue';
const imageViewVisible = ref(false)


const imgs = reactive(
  [
    'https://images.unsplash.com/photo-1688153454230-a3a4d253df0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1687893721485-7cb3f9a83d87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1687889236826-705259bd40a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1687870956342-cbb668245090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  ]
)
const imgs2 = reactive([
  'https://images.unsplash.com/photo-1671362500619-4b9c06b5c5e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1688410053066-efae78ae17ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1688317220026-621e3058cc10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1688232542797-c3e762c7e3c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
])
const imgData = ref([])
const activeImage = ref()
const show = (item: any, data: any) => {
  activeImage.value = item
  imgData.value = data
  imageViewVisible.value = true
}
</script>

<template>
  <div>
    <div style="width:800px;display: flex;margin: 100px 0;">
      <img v-for="item in imgs2" :key="item" :src="item" @click="show(item, imgs2)"
        style="width: 300px;height: 200px;margin: 0 10px;" alt="">
    </div>
    <div style="width:800px;display: flex;">
      <img v-for="item in imgs" :key="item" :src="item" @click="show(item, imgs)"
        style="width: 300px;height: 200px;margin: 0 10px;" alt="">
    </div>
    <ImageView destroy-on-close v-if="imageViewVisible" :data=imgData :activeImage="activeImage"
      v-model="imageViewVisible">
    </ImageView>
  </div>
</template>

<style lang="scss" scoped></style>
