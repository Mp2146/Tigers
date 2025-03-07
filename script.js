const Questions = [
    {
        q: "Fill in the blank: tigers live _____.",
        a: [{text: "in the desert.", isCorrect: false},
            {text: "in the evergreen forests.", isCorrect: true},
            {text: "in the mountains.", isCorrect: false},
            {text: "in the city.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: tigers have _____.",
        a: [{text: "red, with whitish fur.", isCorrect: false},
            {text: "whitish-gray fur.", isCorrect:false},
            {text: "black stripes, with orange fur.", isCorrect: true},
            {text: "white dots with black fur.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: tigers are one of the _____.",
        a: [{text: "lagest cat .", isCorrect: true},
            {text: "smalist cat.", isCorrect: false},
            {text: "lazy cats.", isCorrect: false},
            {text: "worst cats.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: tigers eat _____.",
        a: [{text: "frogs.", isCorrect: false},
            {text: "plants.", isCorrect: false},
            {text: "wild boar.", isCorrect: true},
            {text: "other cats.", isCorrect:false},
           ]
    },
    {
        q: "Fill in the blank: tiger ar endangerd becuse _____.",
        a: [{text: "Habbit loss.", isCorrect: true},
            {text: "humen activatiy.", isCorrect: true},
            {text: "illigale poaching.", isCorrect: true},
            {text: "All of the above.", isCorrect:true},
           ]
    },
    
    // add more questions here....
]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore() 
{
    const totalScore = document.getElementById("score");
    // ToDo: finish this later...
    totalScore.textContent = ` 🐯You scored ${score} out of ${Questions.length}🐯`;

}

function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}
