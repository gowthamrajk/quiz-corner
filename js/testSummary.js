
const loggedUser = document.querySelector(".loggedUser");
    auth.onAuthStateChanged(user => {
    if (user)
     {
        fs.collection('users').doc(user.uid).get().then((snapshot) => {
            loggedUser.innerText = snapshot.data().Name;
        })
    }
    else {
        console.log('user is not signedIn...');
    }
})

auth.onAuthStateChanged(user => {
    var table = document.getElementById("myTable");
    if (user) {
        fs.collection(user.uid).get().then((snapshot) => {      
            if(snapshot.size == 0) {
                $("#myTable, #headtxt1").css("display","none");
                $("#textMessage").css("display","block");
            }     
            snapshot.forEach(doc => {
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                cell1.setAttribute("data-th","Parent Topic");
                var cell2 = row.insertCell(1);
                cell2.setAttribute("data-th","Sub Topic");
                var cell3 = row.insertCell(2);
                cell3.setAttribute("data-th","Total Questions");
                var cell4 = row.insertCell(3);
                cell4.setAttribute("data-th","Percentage");
                var cell5 = row.insertCell(4);
                cell5.setAttribute("data-th","Correct Answer");
                var cell6 = row.insertCell(5);
                cell6.setAttribute("data-th","Time Taken");

                cell1.innerHTML = doc.data().quizParentTitle;
                cell2.innerHTML = doc.data().quizSubTitle; 
                cell3.innerHTML = doc.data().totalQuestion;    
                cell4.innerHTML = doc.data().percentage;    
                cell5.innerHTML = doc.data().correctAnswers;    
                cell6.innerHTML = doc.data().totalTimeTaken;            
            });
        })          
        .then(() => {
            console.log('Summary Listed below');
        }).catch(err => {
            console.log(err.message);
        })
    }
    else {
        $("#myTable, #headtxt1, #headtxt").css("display","none");
        $("#textMessage1").css("display","block");
        console.log('user is not signed in');
    }
})