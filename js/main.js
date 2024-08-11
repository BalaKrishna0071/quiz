document.addEventListener('DOMContentLoaded', () => {
    const startQuizButtons = document.querySelectorAll('.btn-primary');

    startQuizButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'quizz.html'; // This assumes quiz.html is in the same directory as index.html
        });
    });
});
