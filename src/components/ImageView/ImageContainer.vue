<template>
    <div class="img-container">
        <img :src="props.data.imgUrl" :style="{ transform: `rotate(${data.rotate}deg) scale(${data.zoom})` }">
    </div>
</template>

<script setup lang='ts'>
import type { ImgData } from './type';

const props = defineProps<{
    data: ImgData
}>()

</script>

<style scoped lang='scss'>
.img-container {
    width: 660px;
    height: 372px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;

    img {
        max-width: 100%;
        max-height: 100%;
        transition: all .4s;
    }
}
</style>