// mainQuizFile.js

import driverQuestions from './drivequestions.js';

const _question = document.getElementById('question');
const _options = document.querySelector('.quiz-options');
const _checkBtn = document.getElementById('check-answer');
const _playAgainBtn = document.getElementById('play-again');
const _result = document.getElementById('question-result');
const _correctScore = document.getElementById('correct-score');
const _totalQuestion = document.getElementById('total-question');

let correctAnswer = "", correctScore = 0, totalQuestion = driverQuestions.length;
let askedCount = 0;

// event listeners
function eventListeners(){
    _checkBtn.addEventListener('click', checkAnswer);
    _playAgainBtn.addEventListener('click', restartQuiz);
}

document.addEventListener('DOMContentLoaded', function(){
    loadQuestion();
    eventListeners();
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
});

// display question and options
function showQuestion(data){
    _checkBtn.disabled = false;
    correctAnswer = data.correctAnswer;
    let optionsList = data.options.slice(); // Create a copy of the options array to avoid modifying the original
    optionsList.sort(() => Math.random() - 0.5); // Shuffle the options

    _question.innerHTML = `${data.question} <br> <span class="category">${data.category}</span>`;
    _options.innerHTML = optionsList.map((option, index) => `
        <li> ${index + 1}. <span>${option}</span> </li>
    `).join('');
    selectOption();
}

// options selection
function selectOption(){
    _options.querySelectorAll('li').forEach(function(option){
        option.addEventListener('click', function(){
            if(_options.querySelector('.selected')){
                const activeOption = _options.querySelector('.selected');
                activeOption.classList.remove('selected');
            }
            option.classList.add('selected');
        });
    });
}

function checkAnswer() {
    _checkBtn.disabled = true;

    if (_options.querySelector('.selected')) {
        let selectedAnswer = _options.querySelector('.selected span').textContent;
        console.log('Selected Answer:', selectedAnswer);
        console.log('Correct Answer:', HTMLDecode(correctAnswer));
        console.log(HTMLDecode(correctAnswer));
        if (selectedAnswer == HTMLDecode(correctAnswer)) {
            correctScore++;
            _result.innerHTML = `<p><i class="fas fa-check"></i>Correct Answer!</p>`;
        } else {
            _result.innerHTML = `<p><i class="fas fa-times"></i>Incorrect Answer!</p>`;
            _result.innerHTML += `<small><b>Correct Answer: </b>${HTMLDecode(correctAnswer)}</small>`;
        }

        checkCount();
    } else {
        _result.innerHTML = `<p><i class="fas fa-question"></i>Please select an option!</p>`;
        _checkBtn.disabled = false;
    }
}

// to convert html entities into normal text of correct answer if there is any
function HTMLDecode(textString) {
    let doc = new DOMParser().parseFromString(textString, "text/html");
    return doc.documentElement.textContent;
}

function checkCount(){
    askedCount++;
    setCount();
    if(askedCount === totalQuestion){
        _result.innerHTML += `<p>Your score is ${correctScore}.</p>`;
        _playAgainBtn.style.display = "block";
        _checkBtn.style.display = "none";
    } else {
        setTimeout(function(){
            loadQuestion();
        }, 300);
    }
}

function setCount(){
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
}

function restartQuiz(){
    correctScore = askedCount = 0;
    _playAgainBtn.style.display = "none";
    _checkBtn.style.display = "block";
    _checkBtn.disabled = false;
    setCount();
    loadQuestion();
}

// load question function modified to use customQuestions
function loadQuestion(){
    const randomQuestion = driverQuestions[Math.floor(Math.random() * driverQuestions.length)];
    showQuestion(randomQuestion);
}
