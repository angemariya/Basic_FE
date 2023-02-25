// При нажатии на каждую картинку в блоке section, в .images-container
// отображать соответствующую картинку, т.е ту картинку, на которую
// кликнули, ту и надо отобразить в .images-container

/*
const img = document.querySelectorAll('img')
const bigImg = document.querySelector('.images-container')


for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function(event){
        bigImg.setAttribute('src', event.target.src)
    }
    )
}
*/
const imagesSection = document.querySelector('.images')
const images = imagesSection.querySelectorAll('img') // NodeList [{img1}, {img2}]
const imagesContainer = document.querySelector('.images-container')
/*
for(let i = 0; i < images.length; i++) {
    // console.log(images[i]) каждая картинка - html elem img
    images[i].addEventListener('click', function(event) {
        imagesContainer.setAttribute('src', event.target.src)
    })
}
*/
images.forEach(function(img) {
    img.addEventListener('click', function(event) {
        imagesContainer.setAttribute('src', event.target.src)
    } )
})