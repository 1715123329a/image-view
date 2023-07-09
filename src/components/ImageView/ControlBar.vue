<template>
    <div class="control">
        <span v-if="rotateLeft" @click="handleImageRotate(ARROW_DIRECTION.LEFT)"
            class="iconfont myicon icon-rotate-left"></span>
        <span v-if="rotateRight" @click="handleImageRotate(ARROW_DIRECTION.RIGHT)"
            class="iconfont myicon icon-rotate-right"></span>
        <span v-if="zoomOut" @click="handleImageZoom(ZOOM.OUT)" class="iconfont myicon icon-zoom-out"></span>
        <span v-if="zoomIn" @click="handleImageZoom(ZOOM.IN)" class="iconfont myicon icon-zoom-in"></span>
        <span v-if="reset" @click="handleImageReset()" class="iconfont myicon icon-reset"></span>
        <span v-if="save" @click="handleImageSave()" class="iconfont myicon icon-save"></span>
    </div>
</template>

<script setup lang='ts'>
import { ARROW_DIRECTION, ZOOM, CONTROL } from './type';



const props = defineProps<{
    control: string[]
}>()

const rotateLeft = props.control.includes(CONTROL.ROTATELEFT)
const rotateRight = props.control.includes(CONTROL.ROTATERIGHT)
const zoomOut = props.control.includes(CONTROL.ZOOMOUT)
const zoomIn = props.control.includes(CONTROL.ZOOMIN)
const reset = props.control.includes(CONTROL.RESET)
const save = props.control.includes(CONTROL.SAVE)

const emit = defineEmits(['handleImageRotate', 'handleImageZoom', 'handleImageReset', 'handleImageSave'])

const handleImageRotate = (dir: ARROW_DIRECTION) => {
    emit('handleImageRotate', dir)
}

const handleImageZoom = (zoom: ZOOM) => {
    emit('handleImageZoom', zoom)
}

const handleImageReset = () => {
    emit('handleImageReset')
}

const handleImageSave = () => {
    emit('handleImageSave')
}
</script>

<style scoped lang='scss'>
.control {
    z-index: 2;
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;

    .myicon {
        color: #fff;
        font-size: 22px;
        margin: 0 5px;
        cursor: pointer;
    }
}
</style>