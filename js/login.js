const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const loginEmail = loginForm['login-email'].value;
    const loginPassword = loginForm['login-password'].value;
    auth.signInWithEmailAndPassword(loginEmail, loginPassword).then(() => {
        console.log('login success');
        location = "selection.html";
    }).catch(err => {
        location = "login-error.html";
    })
})

function validation()
{
    var form = document.getElementById("login-form");
    var email = document.getElementById("login-email").value;
    var text = document.getElementById("subtext");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "valid Email Address";
        text.style.color = "#00ff00";
    }
    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
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
        document.getElementById("login-password").setAttribute("type","password");
        document.getElementById("eye").style.color='#7a797e';
        state = false;
    }
    else
    {
        document.getElementById("login-password").setAttribute("type","text");
        document.getElementById("eye").style.color='#5887ef';
        state = true;
    }
}

var result = $("#strength");
    $('#login-password').keyup(function(){
        $(".result").html(checkStrength($('#login-password').val()))
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