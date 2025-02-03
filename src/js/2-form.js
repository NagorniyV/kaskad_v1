// Константа на ключь
const STORAGE_KEY = "feedback-form-state";

const feedbackForm = document.querySelector(`.feedback-form`);

// Стилизируем форму

feedbackForm.style.display = 'flex';
feedbackForm.style.flexDirection = 'column';
feedbackForm.style.gap = `16px`;
  feedbackForm.style.position = 'absolute';
  feedbackForm.style.top = '50%';
  feedbackForm.style.left = '50%';
feedbackForm.style.transform = 'translate(-50%, -50%)';
feedbackForm.style.padding = `10px`;

const refs = {
    form: document.querySelector(`.feedback-form`),
};

// Сохраняем значение введённых данных в импуты

const formData = { email: "", message: "" };

refs.form.addEventListener('input', (e) => {
    formData.email = e.currentTarget.elements.email.value;
    formData.message = e.currentTarget.elements.message.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Слушатель на Сабмит + вывод в консоль + очищение формы

feedbackForm.addEventListener(`submit`, (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }

    console.log(formData);    

    localStorage.removeItem(STORAGE_KEY);
    
    formData.email = "";
    formData.message = "";

    feedbackForm.reset();
})

// Стилизируем кнопку

const subBtn = document.querySelector(`.submit`);

subBtn.style.width = `95px`;
subBtn.style.heigth = `24px`;
subBtn.style.marginLeft = `0px`;

subBtn.style.color = `white`;
subBtn.style.border = `none`;
subBtn.style.borderRadius = `3px`;
subBtn.style.fontSize = `16px`;
subBtn.style.padding = `8px 16px`;

// Стилизируем инпуты

document.addEventListener('DOMContentLoaded', function() {
  const labels = document.querySelectorAll('.feedback-form label');
  const inputs = document.querySelectorAll('.feedback-form input, .feedback-form textarea');

  labels.forEach(label => {
    label.style.display = 'block';
  });

  inputs.forEach(input => {
    input.style.display = 'block';
    input.style.width = `360px`;
        input.style.marginTop = `8px`;
  });
});


// // ! Функции для проверки перевода на JSON формат

// function saveToLS(key, value) {
//     const jsonData = JSON.stringify(value);
//     localStorage.setItem(key.jsonData);
// }

// function loadFromLS(key) {
//     const body = localStorage.getItem(key);
//     try {
//         const data = JSON.parse(body);
//         return data;
//     } catch {
//         return body;
//     }
// }