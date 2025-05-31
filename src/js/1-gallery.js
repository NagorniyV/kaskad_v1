//BREND SECTION

// JavaScript для бесконечного эффекта
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const logos = track.querySelectorAll('img');
    const logosCount = logos.length;
    
    // Клонируем логотипы для бесшовности
    logos.forEach(logo => {
      const clone = logo.cloneNode(true);
      track.appendChild(clone);
    });
    
    // Перезапуск анимации при скролле
    track.addEventListener('animationiteration', () => {
      track.style.animation = 'none';
      void track.offsetWidth; // Trigger reflow
      track.style.animation = 'scroll 40s linear infinite';
    });
  });

  //кнопка Піднятись в гору

// Плавный скролл при клике на кнопку
document.getElementById('back-to-top').addEventListener('click', function(e) {
  e.preventDefault(); // Отменяем стандартное поведение ссылки
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Плавная прокрутка
  });
});

