let button = document.querySelector('button')
let p = document.querySelector('p')
let score = 0

button.addEventListener('click', play)

function play(e) {
    score++;
    document.querySelector('p').innerText = score
}
