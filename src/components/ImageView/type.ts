interface ImgData {
    imgUrl: string,
    id: number,
    rotate: number,
    zoom: number
}

enum ARROW_DIRECTION {
    LEFT = 'left',
    RIGHT = 'right'
}

enum ZOOM {
    IN = 'in',
    OUT = 'out'
}

enum CONTROL {
    ROTATELEFT = 'rotateLeft',
    ROTATERIGHT = 'rotateRight',
    ZOOMOUT = 'zoomOut',
    ZOOMIN = 'zoomIn',
    RESET = 'reset',
    SAVE = 'save'
}

export type {
    ImgData
}
export { ARROW_DIRECTION, ZOOM, CONTROL }