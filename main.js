// click on assignment hide first page
document.getElementById("btn1").addEventListener("click",()=>{document.getElementById("firstPage").style.display="none";
  document.getElementById("SecondPage").style.display="inline"
});


document.getElementById("bck").addEventListener("click",()=>{document.getElementById("firstPage").style.display="flex";
  document.getElementById("SecondPage").style.display="none"
})


// Calculator functionality

function appendValue(value) {
  document.getElementById('result').value += value;
}

function clearDisplay() {
  document.getElementById('result').value = '';
}

function deleteLast() {
  let result = document.getElementById('result');
 result.value = result.value.slice(0, -1);
}

function calculateResult() {
  let result = document.getElementById('result');
      result.value = eval(result.value);
  
}


// --------MCQS JS
// questions
const questions = [
  {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: 2
  },
  {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: 1
  },
  {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: 1
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: 2
},
{
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: 1
},
{
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 1
},
];
//  functinality
document.addEventListener("DOMContentLoaded", () => {
  const questionsContainer = document.getElementById("questions");

  questions.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");

      const questionTitle = document.createElement("h2");
      questionTitle.textContent = `Q${index + 1}: ${q.question}`;
      questionDiv.appendChild(questionTitle);

      const optionsDiv = document.createElement("div");
      optionsDiv.classList.add("options");

      q.options.forEach((option, i) => {
          const label = document.createElement("label");
          const input = document.createElement("input");
          input.type = "radio";
          input.name = `question${index}`;
          input.value = i;
          label.appendChild(input);
          label.appendChild(document.createTextNode(option));
          optionsDiv.appendChild(label);
      });

      questionDiv.appendChild(optionsDiv);
      questionsContainer.appendChild(questionDiv);
  });
});

function evaluateAnswers() {
  let score = 0;

  questions.forEach((q, index) => {
      const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
      if (selectedOption && parseInt(selectedOption.value) === q.answer) {
          score++;
      }
  });

  const resultDiv = document.getElementById("result1");
  resultDiv.innerHTML = `You scored ${score} out of ${questions.length}`;
}






// currency convertor

const exchangeRates = {
  USD: 83.56,
  EUR: 90.63,
  GBP: 107.63,
  JPY: 0.52,
  AUD: 56.47
};

function convert() {
  const inrAmount = document.getElementById('inr').value;
  const selectedCurrency = document.getElementById('currency').value;
  const resultElement = document.getElementById('result2');

  if (inrAmount === "") {
      resultElement.textContent = "Please enter an amount in INR.";
      return;
  }

  const convertedAmount = inrAmount * exchangeRates[selectedCurrency];
  resultElement.textContent = `${inrAmount} ${selectedCurrency} = ${convertedAmount.toFixed(2)} INR`;
}

