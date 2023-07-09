import { ref } from "vue";
import { ARROW_DIRECTION, ZOOM } from "./type";
import type { ImgData } from './type'

function useImageIndex(imgLen: number) {
    const index = ref(0)
    const setIndex = (dir: ARROW_DIRECTION | null, i?: number) => {
        if (i) {
            return index.value = i - 1
        }
        switch (dir) {
            case ARROW_DIRECTION.LEFT:
                index.value = index.value <= 0 ? 0 : index.value - 1
                break;
            case ARROW_DIRECTION.RIGHT:
                index.value = index.value >= imgLen - 1 ? imgLen - 1 : index.value + 1
                break;
            default:
                break;
        }
    }
    return {
        index,
        setIndex
    }
}

function useImageData(imgs: ImgData[]) {
    const imgData = ref(imgs)
    const setImageRotate = (dir: ARROW_DIRECTION, index: number) => {
        const rotate = imgData.value[index].rotate
        switch (dir) {
            case ARROW_DIRECTION.LEFT:
                imgData.value[index].rotate = rotate - 45
                break;
            case ARROW_DIRECTION.RIGHT:
                imgData.value[index].rotate = rotate + 45
                break;
            default:
                break;
        }
    }

    const setImageZoom = (zoom: ZOOM, index: number) => {
        const z = imgData.value[index].zoom
        switch (zoom) {
            case ZOOM.IN:
                imgData.value[index].zoom = z - 0.1
                break;
            case ZOOM.OUT:
                imgData.value[index].zoom = z + 0.1
                break;
            default:
                break;
        }
    }

    const imageReset = () => {
        imgData.value.forEach(item => {
            item.rotate = 0
            item.zoom = 1
        });
    }
    return {
        imgData,
        setImageRotate,
        setImageZoom,
        imageReset
    }
}

export { useImageIndex, useImageData }