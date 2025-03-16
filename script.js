
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
let isMusicPlaying = false;



// Set initial volume
backgroundMusic.volume = 0.5;

// Try to load and play music when user interacts with the page
document.addEventListener('click', function() {
    if (!isMusicPlaying) {
        backgroundMusic.play().catch(function(error) {
            console.log("Music play failed:", error);
        });
        isMusicPlaying = true;
        musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
}, { once: true });

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        backgroundMusic.play();
        musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
    isMusicPlaying = !isMusicPlaying;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
