let curntQz = 1;

function rstColor(questionNum) {
    const buttons = document.querySelectorAll(`#quiz${questionNum} .answer`);
    buttons.forEach(button => {
        button.style.backgroundColor = ''; 
    });
}

function checkAnswer(button, status, questionNum) {
    rstColor(questionNum); 

    if (status === 'correct') {
        button.style.backgroundColor = 'green';
    } else {
        button.style.backgroundColor = 'red';
    }
    const nxtBtn = document.querySelector('.next');
    nxtBtn.classList.add('show');
}

function goToNextQuestion() {
    const curntSlide = document.getElementById(`quiz${curntQz}`);
    curntSlide.classList.remove('active');
    
    curntQz++;
    const nxtSlide = document.getElementById(`quiz${curntQz}`);
    if (nxtSlide) {
        nxtSlide.classList.add('active');
        document.querySelector('.next').classList.remove('show');
    } else {
        alert("Quiz Finished");
    }
}
