const showCard = document.querySelectorAll(".block-left")

showCard.forEach(function (obj) {
    obj.addEventListener('click', function () {
        obj.classList.toggle("open-block");
    
        obj.classList.toggle('open-block-left')
    })
});


// showCard[0].addEventListener('click', function () {
//     this.classList.toggle("open-block");

//     // var s = document.querySelector('.block-left')
//     this.classList.toggle('open-block-left')
// })

