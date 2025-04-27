let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideshow = document.getElementById('slideshow');
const errorMessage = document.getElementById('error-message');
const unlockSection = document.querySelector('.unlock-section');

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    const colors = ['#ff6b6b', '#ff9a9e', '#fad0c4', '#ffd3b6', '#ffaaa5'];
    
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100%';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.animation = `floatHeart ${Math.random() * 3 + 2}s ease-in-out infinite`;
        heart.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(heart);
    }
}

function checkCode() {
    const codeInput = document.getElementById('codeInput');
    const code = codeInput.value.trim();
    
    if (code === '14042025') { // Replace '1234' with your actual secret code
        // Hide unlock section
        unlockSection.style.display = 'none';
        
        // Show slideshow with animation
        slideshow.classList.remove('hidden');
        setTimeout(() => {
            slideshow.style.opacity = '1';
            // Scroll to the slideshow
            slideshow.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        
        errorMessage.classList.add('hidden');
    } else {
        errorMessage.classList.remove('hidden');
        codeInput.value = '';
        setTimeout(() => {
            errorMessage.classList.add('hidden');
        }, 3000);
    }
}

function createHeartExplosion() {
    const container = document.querySelector('.birthday-card');
    const colors = ['#ff6b6b', '#ff9a9e', '#fad0c4', '#ffd3b6', '#ffaaa5'];
    
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'absolute';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.transform = 'translate(-50%, -50%)';
        heart.style.animation = `explode ${Math.random() * 1 + 1}s ease-out forwards`;
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '1000';
    document.body.appendChild(confettiContainer);

    const colors = ['#ff6b6b', '#ff9a9e', '#fad0c4', '#ffd3b6', '#ffaaa5'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        confettiContainer.remove();
    }, 5000);
}

// Initialize floating hearts
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!slideshow.classList.contains('hidden')) {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    }
});

// Handle Enter key for code input
document.getElementById('codeInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkCode();
    }
}); 