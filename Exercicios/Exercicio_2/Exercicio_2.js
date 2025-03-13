

let counter = 0;

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('increment')) {
            counter += 1
        } else if (styles.contains('decrement')) {
            counter -= 1
        } else if (styles.contains('reset')) {
            counter = 0
        }
        if (counter > 0) {
            value.style.color = 'green'
        }
        if (counter < 0) {
            value.style.color = 'red'
        }
        if(counter === 0) {
            value.style.color = 'black'
        }
        value.textContent = counter;
    })
})
