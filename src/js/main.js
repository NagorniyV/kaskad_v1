// services-section

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('servicesContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    const cards = document.querySelectorAll('.service-card');
    const cardCount = cards.length;
    let currentIndex = 0;
    
    // Определяем количество видимых карточек
    function getCardsPerView() {
        const width = window.innerWidth;
        if (width <= 480) return 1;
        if (width <= 768) return 2;
        if (width <= 1024) return 3;
        return 5;
    }
    
    // Обновляем карусель
    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 20; // Ширина карточки + margin
        container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        // Отключаем кнопку "Назад" если мы на первом элементе
        prevBtn.disabled = currentIndex === 0;
        
        // Отключаем кнопку "Вперед" если мы на последнем элементе
        const maxIndex = cardCount - getCardsPerView();
        nextBtn.disabled = currentIndex >= maxIndex;
    }
    
    // Обработчики кнопок
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        const maxIndex = cardCount - getCardsPerView();
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Обработчик изменения размера окна
    window.addEventListener('resize', () => {
        updateCarousel();
    });
    
    // Инициализация
    updateCarousel();
});