// #region HEADER - SECTION - FOOTER DINAMICO
const header = document.querySelector('header');
const section = document.querySelector('.container-tipos');
const footer = document.querySelector('footer');

header.innerHTML = `
<!-- Parte del navegador principal -->
<div class="encabezado">
    <div class="logo">
        <a href="index.html">
            <img src="imagenes/logo_transparent_2.png" width="100px" height="100px">
        </a>
    </div>
    <div class="search_conteiner">
        <div class="search">
            <input id="busqueda" name="busqueda" placeholder="Busca tu actividad">
            <button id="buscar">Buscar</button>
        </div>
    </div>
    <div class="accesos">
        <nav>
            <ul>
                <li><a href="favorito.html"><img src="vector/Vector.png"></a></li>
                <li><a href="plan.html"><img src="vector/Vector (1).png"></a></li>
                <li><a href="perfil.html"><img src="vector/Vector (2).png"></a></li>
            </ul>
        </nav>
    </div>
</div>
`;

section.innerHTML = `
<div class="container-img">
    <img src="imagenes/banner.jpg">
    <div class="opacidad-img"></div>
</div>
<div class="eslogan"><h1>Explora, vive, recuerda: tu viaje, tu legado</h1></div>
<div class="btt-tipos">
    <nav class="nav">
        <button type="button" class="nav-button" data-href="cultura.html">CULTURA</button>
        <button type="button" class="nav-button" data-href="gastronomia.html">GASTRONOMIA</button>
        <button type="button" class="nav-button" data-href="aventura.html">AVENTURA</button>
        <button type="button" class="nav-button" data-href="evento.html">EVENTOS</button>
    </nav>
</div>
`;

footer.innerHTML = `
<section class="footer">
    <img src="imagenes/logo_transparent.png" width="150px" height="150px">
    <div class="footer-informacion">
        <nav>
            <ul>
                <li><a href="nosotros.html">Sobre nosotros</a></li>
                <li><a href="contacto.html">Contacto</a></li>
                <li><a href="opinion.html">Opiniones</a></li>
            </ul>
        </nav>
    </div>
    <p>&copy; Copyright Explora Perú - 2024</p>
</section>
`;

// #region BOTONES DE SECTION-NAV
const navButtons = document.querySelectorAll('.nav-button');

navButtons.forEach((button) => {
    button.addEventListener('click', () => {
    window.location.href = button.dataset.href;
    });
});

// #region SLIDER
document.addEventListener('DOMContentLoaded', () => {
    const sliders = [
        { container: document.getElementById('slider1'), 
        btnLeft: document.getElementById('btn-left1'), 
        btnRight: document.getElementById('btn-right1') },
        {container: document.getElementById('slider2'), 
        btnLeft: document.getElementById('btn-left2'), 
        btnRight: document.getElementById('btn-right2') }
    ];

    sliders.forEach(slider => {
        let currentIndex = 0;
        const images = slider.container.querySelectorAll('.slider-section');
        const totalImages = images.length;

        const moveSlider = () => {
            slider.container.style.transform = `translateX(-${currentIndex * 100 / totalImages}%)`;
        };

        slider.btnRight.addEventListener('click', () => {
            currentIndex = (currentIndex + 3) % totalImages;
            moveSlider();
        });

        slider.btnLeft.addEventListener('click', () => {
            currentIndex = (currentIndex - 3 + totalImages) % totalImages;
            moveSlider();
        });

        // Automatic slider
        /*setInterval(() => {
            currentIndex = (currentIndex + 1) % totalImages;
            moveSlider();
        }, 5000); // Change slide every 5 seconds*/
    });
});
