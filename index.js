const roachSayings = [
    "Skitter skitter!",
    "Got any leftover sugar?",
    "1.21 is my favorite version!",
    "Don't step on me!",
    "I survive nuclear blasts.",
    "Forge > Fabric!",
    "PeakSuperior is the best!"
];

let bubbleTimeout;

function handleRoachClick() {
    const sound = document.getElementById('roach-sound');
    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();
        sound.currentTime = 0;
    }

    const bubble = document.getElementById('roach-bubble');
    
    const randomIndex = Math.floor(Math.random() * roachSayings.length);
    bubble.textContent = roachSayings[randomIndex];
    
    bubble.classList.add('show');
    
    clearTimeout(bubbleTimeout);
    
    bubbleTimeout = setTimeout(() => {
        bubble.classList.remove('show');
    }, 2500);
}
