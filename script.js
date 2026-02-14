// ===== Floating hearts effect =====
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";

    heart.style.position = "absolute";

    // Random size: small, medium, large
    const sizes = [20, 30, 40, 50, 60]; // in pixels
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    heart.style.fontSize = randomSize + "px";

    // Random position across screen
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-50px";

    // Random opacity for depth
    heart.style.opacity = Math.random() * 0.7 + 0.3; // 0.3 to 1

    heart.style.transition = "all 5s linear";

    heartsContainer.appendChild(heart);

    // Move heart down
    setTimeout(() => {
        heart.style.top = window.innerHeight + "px";
        heart.style.opacity = 0;
    }, 100);

    // Remove heart after animation
    setTimeout(() => {
        heartsContainer.removeChild(heart);
    }, 5100);
}

// Create a heart every 300ms
setInterval(createHeart, 300);


setInterval(createHeart, 300);

// ===== Countdown Timer =====
const countdown = () => {
    const now = new Date();
    const birthday = new Date(now.getFullYear(), 3, 21); // April = 3 (0-based index)
    if (now > birthday) birthday.setFullYear(birthday.getFullYear() + 1);

    const diff = birthday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
};
setInterval(countdown, 1000);
countdown();

// ===== Reason to Smile Gallery =====
const smileBtn = document.getElementById("smile-btn");
const smilePic = document.getElementById("smile-pic");
const smileMessage = document.getElementById("smile-message");

// Array of images + messages
const smileData = [
    {img: "LOYYY.jpg", message: "May God answer your prayers in ways you cant imagine🌟"},
    {img: "loy2.jpg", message: "Actualy This is my favourite pic of You! 😊"},
    {img: "loycoll.jpg", message: "You don’t try to be special. That’s what makes you special❤️"},
    {img: "loy3.jpg", message: "You inspire me every day 🌹"},
    {img: "loy4.jpeg", message: "If peace had a face, I think it would look a lot like you. 🏡"},
    {img: "LOYYY.jpg", message: "You don’t just make my heart race… you make it choose you."}
];

smileBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * smileData.length);
    const selected = smileData[randomIndex];

    smilePic.style.opacity = 0;
    smileMessage.style.opacity = 0;

    setTimeout(() => {
        smilePic.src = selected.img;
        smileMessage.textContent = selected.message;
        smilePic.style.opacity = 1;
        smileMessage.style.opacity = 1;
        smilePic.style.transform = "scale(1.05)";
        setTimeout(() => smilePic.style.transform = "scale(1)", 200);
    }, 300);
});


// ===== Envelope logic =====
const openBtn = document.getElementById("open-envelope-btn");
const closeBtn = document.getElementById("close-envelope-btn");
const envelopeClosed = document.getElementById("envelope-closed");
const envelopeOpen = document.getElementById("envelope-open");
const typingElement = document.getElementById("typing-message");

const envelopeMessage = "I didn’t make this website just to impress you\nI made it because you deserve to feel\nas special as you make me feel.!";

let index = 0;

function typeMessage() {
    if (index < envelopeMessage.length) {
        const span = document.createElement("span");
        span.textContent = envelopeMessage[index];
        span.style.textShadow = "0 0 10px #ff4081";
        typingElement.appendChild(span);
        index++;
        setTimeout(typeMessage, 150);
    } else {
        closeBtn.classList.remove("hidden"); // show close button when typing ends
    }
}

// Open envelope
openBtn.addEventListener("click", () => {
    envelopeClosed.classList.add("hidden");
    envelopeOpen.classList.remove("hidden");
    typeMessage();
});

// Close envelope
closeBtn.addEventListener("click", () => {
    envelopeOpen.classList.add("hidden");
    envelopeClosed.classList.remove("hidden");
    typingElement.innerHTML = ""; // reset message
    index = 0;
    closeBtn.classList.add("hidden"); // hide close button again
});




// ===== Opening Screen Button =====
function startExperience() {
    document.getElementById("opening").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
    type();
}

