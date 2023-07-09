# Vue 3 + TypeScript + Vite

### 一个简单图片查看器

### 实现功能 
1.多张图片左右切换  
2.图片左右旋转  
3.图片放大缩小  
4.重置图片样式  
5.保存图片到本地  


### 属性

| 参数           | 说明                                   | 类型      | 默认值                                                              |
| -------------- | -------------------------------------- | --------- | ------------------------------------------------------------------- |
| data           | 要显示的图片数据，['url','url']        | string[ ] | [ ]                                                                 |
| activeImage    | 打开后优先显示某张图片，data中的一个值 | string    | null                                                                |
| showClose      | 是否显示关闭按钮                       | string    | true                                                                |
| destroyOnClose | 点击遮罩层关闭                         | boolean   | true                                                                |
| control        | 底部功能按钮                           | array     | ['rotateLeft', 'rotateRight', 'zoomOut', 'zoomIn', 'reset', 'save'] |


### control
| 属性        | 说明     |
| ----------- | -------- |
| rotateLeft  | 左旋转   |
| rotateRight | 右旋转   |
| zoomOut     | 放大     |
| zoomIn      | 缩小     |
| reset       | 重置样式 |
| save        | 保存图片 |
