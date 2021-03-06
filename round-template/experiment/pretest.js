
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  

// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: " How power supply is done to Raspberry Pi ?",
      answers: {
        a: "USB connection",
        b: "Internal battery",
        c: "Charger",
        d: "Adapter"
      },
      correctAnswer: "a"
    },

    {
      question: "What are the distributions are supported by Raspberry Pi ?",
      answers: {
        a: "Arch Linux",
        b: "Debain",
        c: "Fedora Remix",
        d: " Arch Linux, Debain, and Fedora Remix"
      },
      correctAnswer: "d"
    },

    {
      question: "How many USB ports are present in Raspberry Pi 3 ?",
      answers: {
        a: "5",
        b: "2",
        c: "4",
        d: "3"
      },
      correctAnswer: "c"
    },
    {
      question: "How many Input/Output pins on board Raspberry Pi 3 has ?",
      answers: {
        a: "20",
        b: "30",
        c: "40",
        d: "50"
      },
      correctAnswer: "c"
    },
    {
      question: "What does GPIO stands for ? ",
      answers: {
        a: "General Purpose Inner Outer Propeller",
        b: "General Purpose Input Output Pins",
        c: "General powered  Input Output Pins",
        d: "General Purpose Input Output Processor"
      },
      correctAnswer: "b"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
