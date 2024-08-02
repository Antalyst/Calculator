// question arrray bjecty

const questions = [{
    question : "what is animal is the king of the Jungle ?",
    answer: [
        {text:"Lion", correct:"true"},
        {text:"Rhino", correct:"false"},
        {text:"Whale", correct:"false"},
        {text:"Tiger", correct:"false"},
    ]
},{
    question : "What is the Meaning of ISP?",
    answer: [
        {text:"Internet Service Provider", correct:"true"},
        {text:"Internet Satilite Provider", correct:"false"},
        {text:"Intelligence Service Product", correct:"false"},
        {text:"Internet Service Proudct", correct:"false"},
    ]
},{
    question : "what is animal is the king of the Jungle ?",
    answer: [
        {text:"Usa", correct:"false"},
        {text:"Aus", correct:"true"},
        {text:"Asia", correct:"false"},
        {text:"Antartica", correct:"false"},
    ]
},
];

//variable pulled inside the index file//

const ques = document.querySelector('.ques');
const answerBtn = document.querySelector('.con-btn');
const nextBtn = document.querySelector('.next-btn');
const btnsChild = document.getElementsByClassName("answer");

let currentIndex = 0;
let score = 0;

// function to start the quiz//

function Start() {
    currentIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}
// function to show the question on the aaray object reposible for  showing the new question//
function showQuestion() {
    //this fuction i called if i click the next the previus dislay answer will be display none//
    resetState();
    let currentQuest = questions[currentIndex];
    let quesno = currentIndex +1;
    ques.innerHTML = quesno + ". " + currentQuest.question;

    // createing function inside the question array obeject to the answers secti on array object//
    currentQuest.answer.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add('btn')
        answerBtn.appendChild(button);
        //checking if the answer is correct if the person click the button answers//
        if(answers.correct){
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click', selectAnswer) 
    });
}

//reset state function

function resetState() {
    // remove the first child if you clock the btn next in a short tem remove the previus answer//
    nextBtn.style.display ="none"; 
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

// fuction checking if the answer is correct// 
function selectAnswer(e){
//create a variable for e tagert and variable for correct
    const selectbtn = e.target;
    const isCorrect = selectbtn.dataset.correct === "true";
    if(isCorrect){
        selectbtn.classList.add("correct");
        score++;
    }else{
        selectbtn.classList.add("incorrect"); 
    }

    // to create a botton one click at a time create a array checking for button for each
    // from the answer btn parent to there children
    Array.from(answerBtn.children).forEach(button =>{
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled= true;
    });
    nextBtn.style.display = "block";
}
function showscore() {
    resetState();
    ques.innerHTML = `Your Score ${score} out of ${questions.length}!`
    nextBtn.innerHTML = "Play Again"
    nextBtn.style.display = "block";
}


// this question is for fandle the new updated question
function handdle(){
    currentIndex++;
    if (currentIndex < questions.length) {
        showQuestion();
    }else{
        showscore();
    }
}


// thes fuction is for checking the lenght ofd a question
nextBtn.addEventListener('click', ()=>{
    if (currentIndex < questions.length) {
        handdle();
    }
    else{
        Start();
    }
})

Start();

