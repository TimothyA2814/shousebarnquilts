// image showcase code
var imageIndex = 1;
ShowImage (imageIndex);

function nextImage (i) {
    showImage (imageIndex += i);
}

function currentImage(i) {
    showImage (imageIndex = i);
}

function showImage(i) {
    let n;
    let images = document.getElementsByClassName("image-show");
    let dot = document.getElementsByClassName("dot");
    if (i > images.length) {imageIndex = 1}
    if (i < 1) {imageIndex = images.length}
    for (n = 0; n < images.length; n++) {
        images[n].style.display = "none";
    }
    for (n = 0; n < dot.length; n++){
        dot[n].className = dot[n].className.replace("active", "");
    }

    images[imageIndex-1].style.display = "block";
    dot[imageIndex-1].className += " active";
}