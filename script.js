const navButtons = document.querySelectorAll('.nav-button');

navButtons.forEach((button) => {
    button.addEventListener('click', () => {
    window.location.href = button.dataset.href;
    });
});

//SLIDER
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
