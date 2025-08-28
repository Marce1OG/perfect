// Particle background effect
$(document).ready(function() {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#33cdff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5 },
            "size": { "value": 5, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#33cdff", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 6 }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "repulse" } },
            "modes": { "repulse": { "distance": 200, "duration": 0.4 } }
        },
        "retina_detect": true
    });
});
