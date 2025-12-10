particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 120, 
            "density": {"enable": true, "value_area": 1000}
        },
        "color": {"value": "#D4AF37"}, 
        "shape": {"type": "circle"},
        "opacity": {"value": 0.6, "random": false, "anim": {"enable": false}},
        "size": {"value": 4, "random": true, "anim": {"enable": false}},
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#1D3557", 
            "opacity": 0.5,
            "width": 1.5 
        },
        "move": {
             "enable": true,
             "speed": 7, 
             "direction": "none",
             "random": false,
             "straight": false,
             "out_mode": "out",
             "bounce": false,
             "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
         }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {"enable": true, "mode": "grab"}, 
            "onclick": {"enable": true, "mode": "push"},
            "resize": true
        },
        "modes": {
            "grab": {"distance": 250, "line_linked": {"opacity": 1}},
            "repulse": {"distance": 200, "duration": 0.4},
            "push": {"particles_nb": 4}
        }
    },
    "retina_detect": true
});