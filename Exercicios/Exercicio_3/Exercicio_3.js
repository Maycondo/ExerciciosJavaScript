
const reviews = [
    {
        id: 1,
        name: "Maycon Douglas",
        job: "Desenvolvedo Full Stack",
        Img: "https://web.whatsapp.com/851507ac-b86c-4bb2-a1e6-e447257f6323",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoqu",
        eius est, quisque eget mi. Proin ultrices, libero sed mattis pul
        "eius est, quisque eget mi. Proin ultrices, libero sed mattis pul",
        amet erat. Ut at dolor quis est malesuada placerat. Nunc sit amet
        nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoqu
        eius est, quisque eget mi. Proin ultrices, libero sed mattis pul.",
        vinare, nulla ex vulputate magna, et scelerisque urna nunc sit
        amet erat. Ut at dolor quis est malesuada placerat.`,
    },

    {
        id: 2,
        name: "João Pedro",
        job: "Desenvolvedor Front End",
        Img: "https://web.whatsapp.com/851507ac-b86c-4bb",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor`,
    },

    {
        id: 3,
        name: "Maria Luiza",
        job: "Desenvolvedora Full Stack",
        Img: "https://web.whatsapp.com/851507ac-b86c-4bb",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor
        vestibulum magna sed, convallis ex. Cum sociis natoqu`,
    }

]

const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const text = document.getElementById("text")

const prevBtn = document.querySelector(".prev-bnt")
const nextBtn = document.querySelector(".next-bnt")
const randomBtn = document.querySelector(".random-btn")

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson()
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.Img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}
    
nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }   
    showPerson();
})

prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})

randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})

