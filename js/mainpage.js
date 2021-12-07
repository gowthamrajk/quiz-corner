const spanDate = document.getElementById("date");
const spanMonth = document.getElementById("month");
const spanYear = document.getElementById("year");
const spanWeekday = document.getElementById("weekday");


function renderTime()
{
    var mydate=new Date();
    var year=mydate.getYear();
    if(year<1000)
        year+=1900;
    var day=mydate.getDay();
    var month=mydate.getMonth();
    var daym=mydate.getDate();
    var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    var montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    var currentTime=new Date();
    var hour=currentTime.getHours();
    var minute=currentTime.getMinutes();
    var second=currentTime.getSeconds();
    if(hour==24)
        hour=0;
    else if(hour>12)
        hour=hour-0;
    if(hour<10)
        hour="0"+hour;
    if(minute<10)
        minute="0"+minute;
    if(second<10)
        second="0"+second;
    var myClock=document.getElementById("clockDisplay");
    myClock.textContent=""+dayarray[day]+" "+daym+" "+montharray[month]+" "+year+" | "+hour+":"+minute+":"+second;
    myClock.innerText=""+dayarray[day]+" "+daym+" "+montharray[month]+" "+year+" | "+hour+":"+minute+":"+second;

    setTimeout("renderTime()",1000);
}
renderTime();
var flag=0;
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = signupForm['name'].value;
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    console.log(name, email, password);
    signupForm.reset();
    auth.createUserWithEmailAndPassword(email, password).then((cred) => {
        return db.collection('users').doc(cred.user.uid).set({
            Name: name,
            Email: email,
            Password: password

        }).then(() => {
           console.log("success")
           sendEmail(name,email,password);

        }).catch(err => {
            location = "register-error1.html";
        })

    }).catch(err => {
        console.log(err);
        location = "register-error2.html";
    })
})

function sendEmail(name,email,password) 
{ 
      Email.send({ 
        Host: "smtp.gmail.com", 
        Username: "gowthamraj692@gmail.com", 
        Password: "xojeabbhcvthitth", 
        To: email,
        From: 'gowthamraj692@gmail.com',
        Subject: "Registration Confirmation - QUIZ CORNER", 
        Body: "<html><h1><b><font color='brown'>Hello "+name+", </font></h1><h3>Thankyou for Registering in QUIZ CORNER. Your User Email and Password is: </h3><br><h2>Registered email: <font color='red'> "+email+" </font><br>Password: <font color='red'> "+password+" </font></h2><br><h3> Hope you will have a great Experience with us.</h3> <h2><font color='navy'>Thanks & regards,</font><br><font color='red'>- Team Quiz Corner</font><br></h2></b></html>", 
      })  
        .then(function (message) 
        { 
            redirect();
            console.log(email+" "+password);
        }); 
}

function redirect()
{
    location = "register-success.html";
}

function validation()
{
    var form = document.getElementById("signup-form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("subtext");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        flag=1;
        text.innerHTML = "valid Email Address";
        text.style.color = "#00ff00";
    }
    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        flag=0;
        text.innerHTML = "Invalid Email Address";
        text.style.color = "#ff0000";
    }
    if(email == "")
    {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}
var state= false;
function toggle()
{
    if(state)
    {
        document.getElementById("password").setAttribute("type","password");
        document.getElementById("eye").style.color='#7a797e';
        state = false;
    }
    else
    {
        document.getElementById("password").setAttribute("type","text");
        document.getElementById("eye").style.color='#5887ef';
        state = true;
    }
}

var result = $("#strength");
    $('#password').keyup(function(){
        $(".result").html(checkStrength($('#password').val()))
    })  
 
    function checkStrength(password)
    {
    var strength = 0
    if (password.length == 0) 
    {
        result.removeClass()
        return ''
    }
 
    if (password.length < 6)
     {
        result.removeClass()
        result.addClass('short')
        return 'too short'
    }

    if (password.length > 7) 
    strength += 1
   
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) 
    strength += 1

    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  
    strength += 1 

    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) 
    strength += 1

    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,",%,&,@,#,$,^,*,?,_,~])/)) 
        strength += 1

    if (strength < 2) 
    {
        result.removeClass()
        result.addClass('weak')
        return 'weak'
    } 
    else if (strength == 2 )
    {
        result.removeClass()
        result.addClass('good')
        return 'good'
    } 
    else 
    {
        result.removeClass()
        result.addClass('strong')
        return 'strong'
    }
}