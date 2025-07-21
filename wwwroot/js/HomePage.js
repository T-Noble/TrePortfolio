var gifContainer = document.getElementsByClassName("myGifContainer");
var gifImages = gifContainer[0].children;

for (var i = 0; i < gifImages.length; i++) {
  gifImages[i].addEventListener("mouseover", function () {
    // alert("Image hovered over!");
  });
}
