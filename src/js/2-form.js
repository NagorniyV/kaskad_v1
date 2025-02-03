// Константа на ключь
const STORAGE_KEY = "feedback-form-state";

const feedbackForm = document.querySelector(`.feedback-form`);

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

const subBtn = document.querySelector(`.submit`);

document.addEventListener('DOMContentLoaded', function() {
  const labels = document.querySelectorAll('.feedback-form label');
  const inputs = document.querySelectorAll('.feedback-form input, .feedback-form textarea');

});