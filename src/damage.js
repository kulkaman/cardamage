function markDamage(event){
    var imageCanvas = document.getElementById("canvas");
    var imageContext = imageCanvas.getContext("2d");
    var stockLength = 10;

    var x = event.clientX;
    var y = event.clientY;
    imageContext.strokeStyle = "red";
    imageContext.lineWidth=5;
    imageContext.moveTo(x - stockLength, y - stockLength);
    imageContext.lineTo(x + stockLength, y + stockLength);
    imageContext.stroke();
                                    
    imageContext.moveTo(x + stockLength, y - stockLength);
    imageContext.lineTo(x - stockLength, y + stockLength);
    imageContext.stroke();
}