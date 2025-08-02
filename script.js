
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('#element', {
        strings: ['Web Developer', 'AI & ML Engineer','Software Engineer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleModeButton = document.getElementById("toggleMode");
    toggleModeButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        document.body.classList.toggle("dark-mode");
    });
});

document.querySelectorAll('.card-1, .card-2, .card-3').forEach(card=>{
    card.addEventListener('click', function(){
        card.classList.add('clicked');
        setTimeout(() => card.classList.remove('clicked'), 600);
    });
});
