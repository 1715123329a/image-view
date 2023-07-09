<template>
    <div class="arrow">
        <span :class="['iconfont', 'myicon', `icon-arrow-${dir}`]" @click="handleImageSlide(dir)">
        </span>
    </div>
</template>

<script setup lang='ts'>
import { ARROW_DIRECTION } from "./type";
defineProps<{
    dir: ARROW_DIRECTION,
    index: number,
    imgLen: number
}>()
const emit = defineEmits(['handleImageSlide'])
const handleImageSlide = (dir: ARROW_DIRECTION) => {
    emit('handleImageSlide', dir)
}

</script>

<style scoped lang='scss'>
.myicon {
    z-index: 1;
    position: absolute;
    top: 50%;
    color: #000;
    font-size: 26px;
    width: 50px;
    height: 80px;
    margin-top: -40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .58s;
    background-color: rgba(120, 120, 120, 0.3);
    border-radius: 5px;
    font-weight: bold;
}

.icon-arrow-left {
    left: 10px;
}

.icon-arrow-right {
    right: 10px;
}

.icon-arrow-left:hover,
.icon-arrow-right:hover {
    background-color: rgba(120, 120, 120, 0.9);
}
</style>