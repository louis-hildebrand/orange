let imagesSection = undefined
document.addEventListener("DOMContentLoaded", () => {
    imagesSection = document.getElementById("images-section");
});

document.addEventListener("scroll", (event) => {
    const secondImage = imagesSection.children[1];
    const secondImageIsHidden = secondImage.getBoundingClientRect().bottom < 0;
    if (secondImageIsHidden) {
        const secondImageBottomOld = secondImage.getBoundingClientRect().bottom;

        const firstImage = imagesSection.children[0];
        imagesSection.appendChild(firstImage);

        const secondImageBottomNew = secondImage.getBoundingClientRect().bottom;
        const deltaBottom = secondImageBottomNew - secondImageBottomOld;
        if (Math.abs(deltaBottom) > 5) {
            // EXAMPLE:
            //   secondImageBottomOld:    0
            //   secondImageBottomNew:  100
            //   deltaBottom:           100
            // In other words, the image is lower than it used to be.
            // Therefore, we need to scroll down, which means the input to scrollBy should be positive.
            window.scrollBy(0, deltaBottom);
        }
    }
});
