


const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function() {
    console.log('click');
    modal.classList.add('modal-overlay-show');
})

closeBtn.addEventListener('click', function() {
    console.log('close');
    modal.classList.remove('modal-overlay-show');

})