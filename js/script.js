// Get reference to the video
const video = document.querySelector('.bg-video');

// Get reference to the audio button
const audioButton = document.querySelector('.audio-btn');

// Get reference to the audio image
const audioButtonImage = document.querySelector('.audio-btn-img');

// Set event listener to the audio button
// This will mute/unmute the audio and select the correct audio icon very time the user clicks on the audio button.
audioButton.addEventListener('click', () => {
    video.muted = !video.muted;
    video.muted ? audioButtonImage.src = "./assets/audio-muted.svg" : audioButtonImage.src = "./assets/audio-playing.svg";
})