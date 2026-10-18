let imagesSection = undefined
document.addEventListener("DOMContentLoaded", () => {
    imagesSection = document.getElementById("images-section");
});

document.addEventListener("scroll", (event) => {
    const secondImage = imagesSection.children[1];
    const secondImageIsHidden = secondImage.getBoundingClientRect().bottom < 0;
    if (secondImageIsHidden) {
        const firstImage = imagesSection.children[0];
        imagesSection.appendChild(firstImage);
    }
});
