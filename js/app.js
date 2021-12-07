const questionNumber = document.querySelector(".question-number");
const parentTitle = document.querySelector(".parent-title");
const subTitle = document.querySelector(".sub-title");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const model_container = document.getElementById("model_container");
const result_container1 = document.getElementById("result_container1");
const result_container2 = document.getElementById("result_container2");
const result_container3 = document.getElementById("result_container3");
const result_container4 = document.getElementById("result_container4");
const result_container5 = document.getElementById("result_container5");
const close = document.getElementById("close");
const thankyou1 = document.getElementById("thankyou1");
const thankyou2 = document.getElementById("thankyou2");
const thankyou3 = document.getElementById("thankyou3");
const thankyou4 = document.getElementById("thankyou4");
const thankyou5 = document.getElementById("thankyou5");
const timeCount = quizBox.querySelector(".timer .timer_sec");
const timeLine = quizBox.querySelector(".time_line");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;
let counter;
let currTime = 0;
let totalTime = 0; 
let widthValue = 0;
let timeValue = 30;
let date = new Date();
let ctr = date.getTime();

//push the questions into availableQuestions array
function setAvailabeOption()
{
	const totalQuestions = quiz.length;
	for(let i=0;i<totalQuestions;i++)
	{
		availableQuestions.push(quiz[i])
	}
}

//set question number and question and option
function getNewQuestion()
{
    //set question number
    questionNumber.innerHTML = "Question "+(questionCounter+1)+" of "+quiz.length;
    //set question text
    //get random questions
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;

    //get the position of questionIndex from the availableQuestions array    
    const index1 = availableQuestions.indexOf(questionIndex);
    //remove the questionIndex from the availableQuestion Array, so that the question do not repeat
    availableQuestions.splice(index1,1);
    //set options
    //get the length of options
    const optionLen = currentQuestion.options.length
    //push options into availableOptions array
    for(let i=0;i<optionLen;i++)
    {
    	availableOptions.push(i)
    }

    optionContainer.innerHTML = '';
    let animationDelay = 0.2;
    //create options in html
    for(let i=0;i<optionLen;i++)
    {
    	//random option
    	const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)]
    	//get the position of optionIndex from availableOptions
    	const index2 = availableOptions.indexOf(optionIndex);
        //remove the optionIndex from availableOptions, so that it will not be repeated
    	availableOptions.splice(index2,1);
    	const option = document.createElement("div");
    	option.innerHTML = currentQuestion.options[optionIndex];
    	option.id = optionIndex;
    	option.style.animationDelay = animationDelay + 's';
    	animationDelay = animationDelay + 0.2;
    	option.className = "option";
    	optionContainer.appendChild(option)
    	option.setAttribute("onclick","getResult(this)");
    }
    questionCounter++;
}

//get the result of current attempt questions
function getResult(element)
{
	clearInterval(counter);
	clearInterval(counterLine); 
	const id = parseInt(element.id);
	//get answer by comparing the id of clicked option
	if(id === currentQuestion.answer)
	{
		//set the green color to the correct option
		element.classList.add("correct");
		//add the indicator to correct mark
		updateAnswersIndicator("correct");
		correctAnswers++;
	}
	else
	{
		//set the red color to the wrong option
		element.classList.add("wrong");
		//add the indicator to wrong mark
		updateAnswersIndicator("wrong");

		//if the answer is incorrect then show the correct option by addin green color the correct option
		const optionLen = optionContainer.children.length;
		for(let i=0;i<optionLen;i++)
		{
			if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
				optionContainer.children[i].classList.add("correct");
			}
		}
	}
	attempt++;
	unclickableOptions();
}

//make all the options unclickable once the user select a option(RESTRICT THE USER TO CHANGE THE OPTION)
function unclickableOptions()
{
	const optionLen = optionContainer.children.length;
	for(let i=0;i<optionLen;i++)
	{
		optionContainer.children[i].classList.add("already-answered");
	}
}

function answersIndicator()
{
	answersIndicatorContainer.innerHTML = '';
	const totalQuestions = quiz.length;
	for(let i=0;i<totalQuestions;i++)
	{
		const indicator = document.createElement("div");
		answersIndicatorContainer.appendChild(indicator);
	}
}

function updateAnswersIndicator(markType)
{
	answersIndicatorContainer.children[questionCounter-1].classList.add(markType);
}

function next()
{
	if(questionCounter == quiz.length)
	{
		totalTime += (timeValue - currTime);
		showAlertBox();
	}
	else
	{
		clearInterval(counter);
		startTimer(timeValue);
		clearInterval(counterLine);
		startTimerLine(0);
		getNewQuestion();
		totalTime += (timeValue - currTime);
	}
}

function showAlertBox()
{
	clearInterval(counter);
	clearInterval(counterLine);
	model_container.classList.add('show');
	close.addEventListener('click',()=>{
		model_container.classList.remove('show');
		quizOver();
	})
}

function showResult1()
{
	result_container1.classList.add('show');
	thankyou1.addEventListener('click',()=>{
		result_container1.classList.remove('show');
	})
}

function showResult2()
{
	result_container2.classList.add('show');
	thankyou2.addEventListener('click',()=>{
		result_container2.classList.remove('show');
	})
}

function showResult3()
{
	result_container3.classList.add('show');
	thankyou3.addEventListener('click',()=>{
		result_container3.classList.remove('show');
	})
}

function showResult4()
{
	result_container4.classList.add('show');
	thankyou4.addEventListener('click',()=>{
		result_container4.classList.remove('show');
	})
}

function showResult5()
{
	result_container5.classList.add('show');
	thankyou5.addEventListener('click',()=>{
		result_container5.classList.remove('show');
	})
}

function quizOver()
{
	//hide quiz box
	quizBox.classList.add("hide");
	//show result box
	resultBox.classList.remove("hide");
	quizResult();
}

//get quiz result
function quizResult()
{
	resultBox.querySelector(".total-questions").innerHTML = quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".not-attempt").innerHTML = quiz.length - attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    resultBox.querySelector(".total-time-taken").innerHTML = totalTime +" seconds out of "+quiz.length*30+" seconds";
    const percentage = Math.round(((correctAnswers/quiz.length)*100)*100)/100;
    if(percentage>=80.00)
    {
        resultBox.querySelector(".Percentage").innerHTML = "<b style='color:darkgreen;'>" + percentage.toFixed(1) + "%" + "     (Excellent, Keep it up)";
        showResult1();
    }
    else if(percentage>=60.00&&percentage<80.00)
    {
        resultBox.querySelector(".Percentage").innerHTML = "<b style='color:#056108;'>" + percentage.toFixed(1) + "%" + "     (Very Good, Keep learning)";
        showResult2();
    }
    else if(percentage>=40.00&&percentage<60.00)
    {
        resultBox.querySelector(".Percentage").innerHTML = "<b style='color:#7a6007;'>" + percentage.toFixed(1) + "%" + "     (Good, Keep Practicing)";
        showResult3();
    }
    else if(percentage>=30.00&&percentage<40.00)
    {
        resultBox.querySelector(".Percentage").innerHTML = "<b style='color:#7a4507;'>" + percentage.toFixed(1) + "%" + "     (satisfied, But not enough)";
        showResult4();
    }
    else if(percentage<30.00)
    {
        resultBox.querySelector(".Percentage").innerHTML = "<b style='color:darkred;'>" + percentage.toFixed(1) + "%" + "     (Poor, Need more Practice)</b>";
        showResult5();
    }
    resultBox.querySelector(".total-score").innerHTML = correctAnswers +" out of "+quiz.length+" questions";

    let id = ctr += 1;
    var totalTimeTaken = totalTime + " seconds";
    var totalQuestion = quiz.length, quizSubTitle = subTitle.innerHTML, quizParentTitle = parentTitle.innerHTML;
    auth.onAuthStateChanged(user => {
        if (user) {        	
            fs.collection(user.uid).doc('_' + id).set({         
                id: '_' + id,
                quizParentTitle,
                quizSubTitle,
                totalQuestion,
                correctAnswers,
                percentage,
                totalTimeTaken
            }).then(() => {
            	sendUserDetailsForEmailNotification(quizSubTitle,quizParentTitle,percentage);
                console.log('Test result added successfully !!!');
            }).catch(err => {
                console.log(err.message);
            })
        }
        else {
            console.log('user is not signedIn...');
        }
    })
}

function resetQuiz()
{
	questionCounter = 0;
    correctAnswers = 0;
    attempt = 0;
    clearInterval(counter);
	clearInterval(counterLine);
}

function tryAgainQuiz()
{
	//hide the resultBox
	resultBox.classList.add("hide");
	//show the quizBox
	quizBox.classList.remove("hide");
	//reset the elements to 0
	resetQuiz();
	//restart the quiz
	startQuiz();
}

function goToHome()
{
	//reset the quiz
	resetQuiz();
	//hide result box
	resultBox.classList.add("hide");
	//show home box
	homeBox.classList.remove("hide");
	window.location.replace("selection.html");
}

//### Starting Point ###

function startQuiz()
{
	//hide home box
	homeBox.classList.add("hide");
	//show quiz box
	quizBox.classList.remove("hide");
    //set all questions in the availableQuestions Array
	setAvailabeOption();
	//call the getNewQuestion function
	getNewQuestion();
	//start Timer and TimeLine
    startTimer(timeValue);
    //start TimerLine
    startTimerLine(0);
	//to create indicators of answers
	answersIndicator();
}

function startTimer(time)
{
	counter = setInterval(timer,1000);
	function timer()
	{
		timeCount.textContent = time;
		currTime=time;
		time--;
		if(time < 0)
		{
			clearInterval(counter);
			timeCount.textContent = "00";
			updateAnswersIndicator("notAttempted");
			next();
		}
	}
}

function startTimerLine(time)
{
    counterLine = setInterval(timer, 120);
    function timer()
    {
        time += 1; 
        timeLine.style.width = time + "px";
        checkNavigation();
        if(time > 640)
        { 
            clearInterval(counterLine); 
        }
    }
}

function checkNavigation()
{
	var str=document.visibilityState;
	if(str === "hidden")
	{
		console.log(str);
		window.location.replace("navigationError.html");
	}
}

window.onload = function()
{
	homeBox.querySelector(".total-questions").innerHTML = quiz.length;
}

function sendUserDetailsForEmailNotification(quizSubTitle,quizParentTitle,percentage) {
	const url = "https://gowthamrajk.github.io/quizapp/";
    auth.onAuthStateChanged(user => {
        if (user) {
            fs.collection('users').doc(user.uid).get().then((snapshot) => {
                const name = snapshot.data().Name;                      
                const email = snapshot.data().Email;             
                sendEmail(name,email,url,quizSubTitle,quizParentTitle,percentage);
            })
        }
    })
}

function sendEmail(name,email,url,quizSubTitle,quizParentTitle,percentage) 
{ 
    Email.send({ 
        Host: "smtp.gmail.com", 
        Username: "gowthamraj692@gmail.com", 
        Password: "xojeabbhcvthitth", 
        To: email,
        From: 'gowthamraj692@gmail.com', 
        Subject: "Greetings From QUIZ CORNER - Test Completion", 
        Body: "<html><h1><b><b style='color:maroon'>Hello "+name+", </b></h1><h3>You have successfully completed the quiz in Quiz Corner. Following are your attempt Details : <br><br><b style='font-size:25px;'>Quiz Title : <b style='color:maroon;'>"+quizSubTitle+"</b></b><br><b style='font-size:25px;'>Module Title : <b style='color:maroon;'>"+quizParentTitle+"</b></b><br><b style='font-size:25px;'>Percentage : <b style='color:maroon;'>"+percentage+" %</b></b><br><br> For Detailed Test Summary, Login to the portal using "+url+" and check your summary under Test Summary Tab...</h3><h2><font color='navy'>Thanks & regards,</font><br><font color='red'>- GowthamRaj.K (QUIZ CORNER)</font><br></h2><h3>for more queries,<p>reach me at:\ngowthamraj692@gmail.com\n9698382306</p></h3></b></html>", 
    }) 
    .then(function(message) 
    { 
    	console.log(message);
        console.log(name+" "+email+" "+quizSubTitle+" "+quizParentTitle+" "+percentage);
    }); 
} 