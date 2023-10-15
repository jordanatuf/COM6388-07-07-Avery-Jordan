var questionsArr = [
    {
        text: 'Which song was released in 2005?',
        correctAnswer: 'Bad Day',
        options: ['Bad Day', 'I am a Gummy Bear']
    },
    {
        text: 'Which song was released in 2006?',
        correctAnswer: 'Irreplaceable',
        options: ['Yeah 3x', 'Irreplaceable']
    },
    {
        text: 'Which song was released in 2007?',
        correctAnswer: 'Umbrella',
        options: ['Crazy In Love', 'Umbrella']
    },
    {
        text: 'Which song was released in 2008?',
        correctAnswer: 'Single Ladies',
        options: ['Dynamite', 'Single Ladies']
    },
    {
        text: 'Which song was released in 2009?',
        correctAnswer: 'Obsessed',
        options: ['Obsessed', 'Paper Planes']
    }
  ];
  
  var quizContainer = document.querySelector('#quiz');
  var currentQuestionIndex = 0;
  var timerInterval;
  var timerDisplay;
  var timeLeft;
  var timerElement;
  var userScore;
  var finalScore;
  var finalScoreDisplay;
  var currentQuestionIndex;
  var startButton;
  
  function startQuiz() {
    displayQuestion();
  }

  function startTimer() {
    timerElement = setInterval(function () {
        timeLeft--;
        if (timeLeft > 0) {
            timerDisplay.textContent = timeLeft;
        } else {
            clearInterval(timerElement);
            currentQuestionIndex++;
            if (currentQuestionIndex < questionsArr.length) {
                displayQuestion();
            } else {
                endQuiz();
            }
        }
    }, 1000);
  }
  
  function displayQuestion() {
    quizContainer.innerHTML = '';
    var questionElement = document.createElement('p');
    var choicesContainer = document.createElement('p');
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(choicesContainer);
  
    questionElement.textContent = questionsArr[currentQuestionIndex].text;
  
    questionsArr[currentQuestionIndex].options.forEach(function() {
      var choiceButton = document.createElement('button');
      choiceButton.textContent = choice;
      choicesContainer.appendChild(choiceButton);
      choiceButton.addEventListener('click', checkAnswer);
    });
  }
  
  function checkAnswer(event) {
    if (event.target.textContent === questionsArr[currentQuestionIndex].correctAnswer) {
      currentQuestionIndex++;
      if (currentQuestionIndex < questionsArr.length) {
        displayQuestion();
      } else {
        endQuiz();
      }
    }
  }
  
  function endQuiz() {
    quizContainer.innerHTML = '';
    var percentage = Math.round((userScore / questionsArr.length) * 100) + '%';
    localStorage.setItem('previous-score', percentage);
  }
  
  startButton = document.createElement('button');
  finalScoreDisplay = document.createElement('p');
  timerDisplay = document.createElement('p');
  startQuiz();
  