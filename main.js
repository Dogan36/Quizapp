function showQuestion() {
    loadCurrentTopic()
    loadNumberCurrentQuestion()
    loadQuestion()
    loadAnswers()
    loadButton()
    updateProgressbar()
}


function checkAnswer(i) {
    let topic = questions[currentTopic]
    let rightAnswer = topic[currentQuestion]["richtige antwort"]
    let rightNumber = rightAnswer.slice(-1)
    showResult(i, rightNumber)
    disableAnswerButtons()
    enableNextButton()
    currentQuestion++
    currentTotalQuestion++
    updateProgressbar()
}


function showNextQuestion() {
    if (currentQuestion == questions[currentTopic].length) {
        currentQuestion = 0
        currentTopic++
        if (currentTopic == questions.length) {
            showEndScreen()
        } else {
            nextQuestion()
        }
    } else {
        nextQuestion()
    }
}


function showResult(i, rightNumber){
    if (i == rightNumber) {
        document.getElementById(`answer${i}`).classList.add('bg-success')
        rightAnswers[currentTopic]++
    } else {
        document.getElementById(`answer${i}`).classList.add('bg-danger')
        document.getElementById(`answer${rightNumber}`).classList.add('bg-success')
    }
}


function nextQuestion() {
    document.getElementById('endscreen').style = 'display:none';
    document.getElementById('mainscreen').style = '';
    removeClasslist()
    disableNextButton()
    enableAnswerButtons()
    showQuestion()
}


function loadCurrentTopic() {
    for (let i = 0; i < 4; i++) {
        document.getElementById('list').children[i].classList.remove('active')
    }
    document.getElementById('list').children[currentTopic].classList.add('active')
}


function loadNumberCurrentQuestion() {
    document.getElementById('currentQuestion').innerHTML = currentQuestion + 1
}


function loadQuestion() {
    let topic = questions[currentTopic];
    let question = topic[currentQuestion]
    document.getElementById('question').innerHTML = question.frage
}


function loadAnswers() {
    let topic = questions[currentTopic]
    let question = topic[currentQuestion]
    document.getElementById('answer1').innerHTML = question["antwort 1"]
    document.getElementById('answer2').innerHTML = question["antwort 2"]
    document.getElementById('answer3').innerHTML = question["antwort 3"]
    document.getElementById('answer4').innerHTML = question["antwort 4"]
}


function enableNextButton() {
    document.getElementById('nextButton').disabled = false
}


function disableAnswerButtons() {
    document.getElementById('answer1').parentNode.removeAttribute("onclick")
    document.getElementById('answer2').parentNode.removeAttribute("onclick")
    document.getElementById('answer3').parentNode.removeAttribute("onclick")
    document.getElementById('answer4').parentNode.removeAttribute("onclick");
}


function disableNextButton() {
    document.getElementById('nextButton').disabled = true
}


function enableAnswerButtons() {
    document.getElementById('answer1').parentNode.setAttribute("onclick", "checkAnswer(1)")
    document.getElementById('answer2').parentNode.setAttribute("onclick", "checkAnswer(2)")
    document.getElementById('answer3').parentNode.setAttribute("onclick", "checkAnswer(3)")
    document.getElementById('answer4').parentNode.setAttribute("onclick", "checkAnswer(4)");
}


function removeClasslist() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer${i}`).classList.remove('bg-success')
    }
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer${i}`).classList.remove('bg-danger')
    }
}


function showEndScreen() {
    document.getElementById('endscreen').style = '';
    document.getElementById('mainscreen').style = 'display:none';
    document.getElementById('nextButton').innerHTML = 'Erneut starten';
    showRightAnswers()
    resetNumbers()
}


function showRightAnswers() {
    document.getElementById('resultHTML').innerHTML = rightAnswers[0] * 10
    document.getElementById('resultCSS').innerHTML = rightAnswers[1] * 10
    document.getElementById('resultJS').innerHTML = rightAnswers[2] * 10
    document.getElementById('resultNode').innerHTML = rightAnswers[3] * 10
    var totalAnswers = 0;
    for (var i = 0; i < rightAnswers.length; i++) {
        totalAnswers = totalAnswers + rightAnswers[i];
    }
    document.getElementById('resultTotal').innerHTML = totalAnswers / 4 * 10
}


function loadButton() {
    document.getElementById('nextButton').innerHTML = 'Nächste Frage';
}


function updateProgressbar() {
    let totalLength = 0;
    questions.forEach(function (innerArray) {
        totalLength += innerArray.length;
    });
    let percent = Math.round(currentTotalQuestion / totalLength * 100)
    document.getElementById('progressbar').innerHTML = `${percent} %`
    document.getElementById('progressbar').style = `width: ${percent}%;`
}


function resetNumbers(){
    currentTotalQuestion = 0
    rightAnswers = [0,0,0,0]
    currentTopic = 0
    currentQuestion = 0
}