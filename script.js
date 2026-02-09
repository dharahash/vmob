const messages = [
    "Hello, Wrong answer!",
    "Ahemmmmm!",
    "Are you sure?",
    "Dei, Really sure??",
    "Chellakutty please...",
    "Eyy please ra dei!, podii",
    "I love youuu, now say yes!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will cryyyyy...",
    "Ok fine po, I will go with someone else...",
    "Just kidding, heheh say yes please mam ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
