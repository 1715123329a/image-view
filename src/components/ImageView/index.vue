<template>
    <div class="container" @click="handleClose" ref="imgContainerRef">
        <div class="main">
            <!-- 左右按钮 -->
            <Indiactor :index="index" :imgLen="data.length" :dir="ARROW_DIRECTION.LEFT"
                @handle-image-slide="handleImageSlide">
            </Indiactor>
            <Indiactor :index="index" :imgLen="data.length" :dir="ARROW_DIRECTION.RIGHT"
                @handle-image-slide="handleImageSlide">
            </Indiactor>
            <!-- 图片 -->
            <div class="slide" :style="{ translate: - (index * 660) + 'px' }">
                <ImageContainer v-for="item in imgData" :key="item.id" :data="item"></ImageContainer>
            </div>
            <!-- 底部控制器 -->
            <ControlBar :control="props.control" @handle-image-rotate="handleImageRotate"
                @handle-image-zoom="handleImageZoom" @handle-image-reset="handleImageReset"
                @handle-image-save="handleImageSave"></ControlBar>
        </div>
    </div>
    <!-- 关闭按钮 -->
    <span v-if="showClose" class="iconfont myicon icon-close" @click="closeImageView"></span>
    <!-- 数量显示 -->
    <div class="img-length">
        {{ index + 1 + '/' + data.length }}
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import ImageContainer from './ImageContainer.vue'
import Indiactor from './Indiactor.vue'
import ControlBar from './ControlBar.vue'
import { downloadIamge } from '../../utils/index'
import type { ImgData } from './type';
import { ARROW_DIRECTION, ZOOM } from './type';
import { useImageIndex, useImageData } from './hooks'

/* 
 * @props
 * data: 图片数组
 * modelValue: 是否显示组件
 * activeImage: 打开组件后显示的图片,
 * destroyOnClose: 点击遮罩层关闭
 * showClose: 是否显示关闭按钮
*/
const props = withDefaults(defineProps<{
    control?: string[],
    data: string[],
    modelValue: boolean,
    activeImage: string | undefined,
    destroyOnClose?: boolean,
    showClose?: boolean
}>(),
    {
        control: () => ['rotateLeft', 'rotateRight', 'zoomOut', 'zoomIn', 'reset', 'save'],
        destroyOnClose: false,
        showClose: true,
    }
)

const imgContainerRef = ref<HTMLDivElement>()

const images: ImgData[] = props.data.map((item, index) => {
    return {
        imgUrl: item,
        id: index,
        rotate: 0,
        zoom: 1
    }
})

/* 
 * imgData ：处理好用于显示的图片数组
 * setImageRotate 操作图片旋转
 * setImageZoom ：操作图片缩放
 * imageReset ：重置操作
*/
const {
    imgData,
    setImageRotate,
    setImageZoom,
    imageReset
} = useImageData(images)

const emit = defineEmits(['update:modelValue'])

/* 
 * index ：当前显示的图片索引
 * setIndex ：修改图片索引，控制图片切换
*/
const { index, setIndex } = useImageIndex(props.data.length)

// 打开组件后要显示的图片数据，找到对应索引，并且设置图片滚动到对应位置
const i = images.findIndex((item) => {
    return item.imgUrl === props.activeImage || 0
})
setIndex(null, i + 1)

// 控制图片切换
const handleImageSlide = (dir: ARROW_DIRECTION) => {
    setIndex(dir)
}

// 操作图片旋转
const handleImageRotate = (dir: ARROW_DIRECTION) => {
    setImageRotate(dir, index.value)
}

// 操作图片缩放
const handleImageZoom = (zoom: ZOOM) => {
    setImageZoom(zoom, index.value)
}

// 重置操作
const handleImageReset = () => {
    imageReset()
}

const handleClose = (event: any) => {
    const target = event.target;
    if (props.destroyOnClose && target === imgContainerRef.value) {
        closeImageView()
    }
}

// 关闭显示
const closeImageView = () => {
    emit("update:modelValue", false);
};


const handleImageSave = () => {
    const imageUrl = imgData.value[index.value].imgUrl; // 这里替换为你的图片URL  
    downloadIamge(imageUrl)
}




</script>

<style scoped lang='scss'>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.85);
    position: absolute;
    top: 0;
    left: 0;
}

.main {
    width: 660px;
    height: 410px;
    position: relative;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    z-index: 1;

}

.myicon {
    color: #fff;
    font-size: 30px;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    right: 50%;
    margin-top: -280px;
    margin-right: -400px;
    z-index: 2;
    cursor: pointer;
}

.img-length {
    width: 60px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -240px;
    margin-left: -25px;
    color: #fff;
    z-index: 1;
}

.slide {
    width: 660px;
    height: 372px;
    display: flex;
    transition: all .6s;
}
</style>