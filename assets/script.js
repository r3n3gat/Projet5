const slides = [{
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

/* Étape 1 : voir html */

/* Étape 2 : Ajoutez des Event Listeners sur les flèches  */

let ArrowLeft = document.querySelector(".arrow_left");
let ArrowRight = document.querySelector(".arrow_right");

ArrowLeft.addEventListener("click", showPreviousSlide);
ArrowRight.addEventListener("click", showNextSlide);

/* Ajouter un console.log ou une alert() pour tester le fonctionnement des event listeners */

function showPreviousSlide() {
    console.log("Bouton gauche cliqué");
}

function showNextSlide() {
    console.log("Bouton droit cliqué");
}

/* Étape 3 : Ajout des bullet points au slider par js */

function updateDots() {
    let slidesContainer = document.querySelector(".dots");

    while (slidesContainer.firstChild) {
        slidesContainer.firstChild.remove();
    }

    slides.forEach((slide, index) => {
        let dot = document.createElement("div");
        dot.classList.add("dot");

        if (index === 0) {
            dot.classList.add("dot_selected");
        }

        slidesContainer.appendChild(dot);
    });

    console.log("Le nombre actuel de diapositives est : " + slides.length);

}

updateDots();

/* Étape 4 : Modifiez le slide au clic sur le bouton */

let currentSlide = 0;
let bannerImage = document.querySelector("#banner-slide");
let bannerText = document.querySelector("#banner p");

function updateSlide() {
    let slide = slides[currentSlide];
    bannerImage.src = "./assets/images/slideshow/" + slide.image;
    bannerText.innerHTML = slide.tagLine;

    let dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.classList.remove("dot_selected");
        if (index === currentSlide) {
            dot.classList.add("dot_selected");
        }
    });
}

/* Étape 5 : Boucle infini avec operateur modulo   */

function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
    console.log("Bouton droit cliqué.Slide actuelle: " + (currentSlide + 1));
}

function showPreviousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
    console.log("Bouton gauche cliqué.Slide actuelle: " + (currentSlide + 1));
}


updateSlide();