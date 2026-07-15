function toggleRoachSound() {
    const sound = document.getElementById('roach-sound');
    
    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();
        sound.currentTime = 0;
    }
}
