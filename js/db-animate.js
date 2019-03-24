// Main JS

function aniMate(element) {
    // Assign El
    const el = document.querySelectorAll(element);

    // Event Listener
    window.addEventListener('scroll', function() {

        el.forEach(elem => {
            if (  elem.getBoundingClientRect().top < window.innerHeight / 2  ) {
                elem.classList.add('animate');
            }
        });
    });
}
aniMate('.fade-in');
aniMate('.fade-in-left');
aniMate('.fade-in-right');
