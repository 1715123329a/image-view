const downloadIamge = (imgsrc: string) => {
    let name = new Date().getTime();
    let image = new Image();
    image.setAttribute("crossOrigin", "anonymous");
    image.src = imgsrc;
    image.onload = function () {
        let canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        let context = canvas.getContext("2d") as CanvasRenderingContext2D;
        context.drawImage(image, 0, 0, image.width, image.height);
        let url = canvas.toDataURL("image/png");
        let a = document.createElement("a");
        let event = new MouseEvent("click");
        a.download = `${name}` || "photo";
        a.href = url;
        a.dispatchEvent(event);
    };
}

export {
    downloadIamge
}