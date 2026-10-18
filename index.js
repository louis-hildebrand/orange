let enabled = true;
let imagesSection = undefined;
document.addEventListener("DOMContentLoaded", () => {
    imagesSection = document.getElementById("images-section");

    // The infinite looping code doesn't seem to work well on Chrome on iPhone.
    // I don't have any Apple devices with which to reproduce the issue.
    // Therefore, just disable JavaScript.
    //
    // I expect navigator.platform would be available immediately,
    // but I don't have an Apple device so who knows.
    // Set it only on DOMContentLoaded to be extra safe.
    const isApple = (
        navigator.platform.includes("iPhone") ||
        navigator.platform.includes("iPad") ||
        navigator.platform.includes("iPod") ||
        navigator.platform.includes("Mac")
    );
    if (isApple) {
        enabled = false;
    }
});

document.addEventListener("scroll", (event) => {
    if (!enabled) {
        return;
    }
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
