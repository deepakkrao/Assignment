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

// 3rd page for project
document.getElementById("frd").addEventListener("click",()=>{
  document.getElementById("thirdPage").style.display="flex";
  document.getElementById("thirdPage").style.flexDirection="Column";
  document.getElementById("SecondPage").style.display="none";

})


document.getElementById("back").addEventListener("click",()=>{
  document.getElementById("thirdPage").style.display="none";
  document.getElementById("SecondPage").style.display="inline"
});

// project1 added items

function removeEvent(){
  var ArrClass = document.querySelectorAll(".remo");
  ArrClass.forEach((rem)=>{
  rem.addEventListener("click",()=>{
 rem.parentElement.remove();
})
})
}

function itemsAdded(){
  var newDiv = document.createElement("div");
  var btn = document.createElement("button");
  btn.setAttribute("class","remo");
  btn.textContent = "Remove";
  newDiv.textContent = document.getElementById("inp1").value;
  newDiv.setAttribute("class","ele");
  document.getElementById("addedItems").appendChild(newDiv).appendChild(btn);
  removeEvent();
}

document.getElementById("added").addEventListener("click",()=>{
itemsAdded();
})
document.getElementById("inp1").addEventListener("keydown",(event)=>{
  if(event.key == "Enter")
  itemsAdded();
  })

  // music for winning cheers

  function playSound() {
 
    var audio = new Audio('victorymale-version-230553.mp3');
    audio.play();
}

  // Tic toac toe Game
let Colors = ["#45a049","#fda900","#45a049","#fda900","#45a049","#fda900","#45a049","#fda900","#45a049"];
let OX = ["O","x","O","x","O","x","O","x","O"]



  var ArrayBox = document.querySelectorAll(".square")

function checkWinner(){
  if(window.getComputedStyle(ArrayBox[0]).backgroundColor==window.getComputedStyle(ArrayBox[1]).backgroundColor&&window.getComputedStyle(ArrayBox[1]).backgroundColor==window.getComputedStyle(ArrayBox[2]).backgroundColor)
  {
    ArrayBox[0].style.backgroundColor = "red"
    ArrayBox[1].style.backgroundColor = "red"
    ArrayBox[2].style.backgroundColor = "red"
    playSound()
  }
 else if(window.getComputedStyle(ArrayBox[3]).backgroundColor==window.getComputedStyle(ArrayBox[4]).backgroundColor&&window.getComputedStyle(ArrayBox[4]).backgroundColor==window.getComputedStyle(ArrayBox[5]).backgroundColor)
    //     012 159 
   //      345 246
   //      678 147
    {
      ArrayBox[3].style.backgroundColor = "red"
      ArrayBox[4].style.backgroundColor = "red" 
      ArrayBox[5].style.backgroundColor = "red"
      playSound()
    }
   else if(window.getComputedStyle(ArrayBox[6]).backgroundColor==window.getComputedStyle(ArrayBox[7]).backgroundColor&&window.getComputedStyle(ArrayBox[7]).backgroundColor==window.getComputedStyle(ArrayBox[8]).backgroundColor)
      {
        ArrayBox[6].style.backgroundColor = "red"
        ArrayBox[7].style.backgroundColor = "red"
        ArrayBox[8].style.backgroundColor = "red"
        playSound()
      }
      else if(window.getComputedStyle(ArrayBox[0]).backgroundColor==window.getComputedStyle(ArrayBox[4]).backgroundColor&&window.getComputedStyle(ArrayBox[4]).backgroundColor==window.getComputedStyle(ArrayBox[8]).backgroundColor)
        {
          ArrayBox[0].style.backgroundColor = "red"
          ArrayBox[4].style.backgroundColor = "red"
          ArrayBox[8].style.backgroundColor = "red"
          playSound()
        }
       else if(window.getComputedStyle(ArrayBox[0]).backgroundColor==window.getComputedStyle(ArrayBox[3]).backgroundColor&&window.getComputedStyle(ArrayBox[3]).backgroundColor==window.getComputedStyle(ArrayBox[6]).backgroundColor)
          {
            ArrayBox[0].style.backgroundColor = "red"
            ArrayBox[3].style.backgroundColor = "red"
            ArrayBox[6].style.backgroundColor = "red"
            playSound()
          }

          else if(window.getComputedStyle(ArrayBox[1]).backgroundColor==window.getComputedStyle(ArrayBox[4]).backgroundColor&&window.getComputedStyle(ArrayBox[4]).backgroundColor==window.getComputedStyle(ArrayBox[7]).backgroundColor)
            {
              ArrayBox[1].style.backgroundColor = "red"
              ArrayBox[4].style.backgroundColor = "red"
              ArrayBox[7].style.backgroundColor = "red"
              playSound()
            } 

else if(window.getComputedStyle(ArrayBox[3]).backgroundColor==window.getComputedStyle(ArrayBox[5]).backgroundColor&&window.getComputedStyle(ArrayBox[5]).backgroundColor==window.getComputedStyle(ArrayBox[7]).backgroundColor)
  {
    ArrayBox[3].style.backgroundColor = "red"
    ArrayBox[5].style.backgroundColor = "red"
    ArrayBox[7].style.backgroundColor = "red"
    playSound()
  }
  else if(window.getComputedStyle(ArrayBox[2]).backgroundColor==window.getComputedStyle(ArrayBox[5]).backgroundColor&&window.getComputedStyle(ArrayBox[5]).backgroundColor==window.getComputedStyle(ArrayBox[8]).backgroundColor)
    {
      ArrayBox[2].style.backgroundColor = "red"
      ArrayBox[5].style.backgroundColor = "red"
      ArrayBox[8].style.backgroundColor = "red"
      playSound()
    }

    else if(window.getComputedStyle(ArrayBox[2]).backgroundColor==window.getComputedStyle(ArrayBox[4]).backgroundColor&&window.getComputedStyle(ArrayBox[4]).backgroundColor==window.getComputedStyle(ArrayBox[6]).backgroundColor)
      {
        ArrayBox[2].style.backgroundColor = "red"
        ArrayBox[4].style.backgroundColor = "red"
        ArrayBox[6].style.backgroundColor = "red"
        playSound()
      }
    
}

   ArrayBox.forEach((box)=>{
   box.addEventListener("click",function changeColor(){
   box.style.backgroundColor = Colors[0];
   box.innerHTML =`<h1>${OX[0]}</h1>` ;
   checkWinner();
   Colors.shift();
   OX.shift();
   box.removeEventListener("click",changeColor);
   })

  })

  // Magic Square start here
  let useNumber = [1,2,3,4,5,6,7,8,9];
  let arrayofSquare = document.querySelectorAll(".magic");

  function MagicSquare(){
    let arrayofNumber = document.querySelectorAll(".magic h1");
    var check = 0;
    let answer = ["8","1","6","3","5","7","4","9","2"];
      arrayofSquare.forEach((box,key)=>{
        if(box.textContent === answer[key])
        {
            check++;
        }
       else{
        box.textContent = "Wrong";
       }
    })
    if(check === 9)
    {
      playSound();
    }
  }

  arrayofSquare.forEach(function numering(boxes){
  boxes.addEventListener("click",function AssignNum(){
  boxes.innerHTML = `<h1>${useNumber[0]}</h1>`;
  useNumber.shift();
  boxes.removeEventListener("click",AssignNum);
  if(useNumber.length === 0){
    MagicSquare();
  }
  })
  })
  // fourth page
  document.querySelector("#thirdPage #icons #frd").addEventListener("click",()=>{
    document.getElementById("fourth-Page").style.display="flex";
    document.getElementById("fourth-Page").style.flexDirection="Column";
    document.getElementById("thirdPage").style.display="none";
  
  })
  
  document.querySelector("#fourth-Page #icons #back").addEventListener("click",()=>{
  document.getElementById("fourth-Page").style.display="none";
  document.getElementById("thirdPage").style.display="inline"
  });

  let arrayOfImage = ["https://images.unsplash.com/photo-1520077611045-6d5328682025?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1565886001214-ce8678c6c322?q=80&w=1066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1554322662-5b660295377d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1537458689875-b83005099102?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1532912488546-793a72bd7e1e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1533208705114-4f6b97d68ab1?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1533230408708-8f9f91d1235a?q=80&w=1094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1520077611045-6d5328682025?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1565886001214-ce8678c6c322?q=80&w=1066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];

   var imgNode =   document.querySelectorAll("#crousel #image-list img");
   var i = 0;
   var prevIndx = null;
   var showImg = ()=>{
    if(prevIndx !== null)
    {
      imgNode[prevIndx].style.border = "none";
    }
    imgNode[i].style.border = "5px solid white";
    document.getElementById("crousel").style.backgroundImage = `url(${arrayOfImage[i]})`;
    prevIndx=i;
    i++;
    if(i == arrayOfImage.length)
    {
      i=0;
    }
  }
  imgNode.forEach((img,key)=>{
    img.setAttribute("src",`${arrayOfImage[key]}`);
  })
  setInterval(showImg,4000);
