//   --------------------------------------- ||
//             Login Form              ||
//   --------------------------------------- ||

    // | -- Variables -- ||

    /* -- Login -- */

    var Login = document.getElementById('Login');
    var LoginForm = document.getElementById('loginForm');
    var Cancel = document.getElementById('cancel');
    var loginValue1 = document.getElementById('username');
    var loginValue2 = document.getElementById('loginPassword');
    var LoginUsernameError = document.getElementById('loginError1');
    var LoginPasswordError = document.getElementById('loginError2');
    var LoginInput = document.getElementsByClassName('LoginInput');
    var LoginSubmit = document.getElementsByClassName('submitButton')[0];
    var RequiredLogin = 0;
    var LoginOpen = false;
    var LoginSubmit = document.getElementsByClassName('loginSubmit')[0];


     /* -- Login Objects -- */
     
     var LoginRequired = {
        username: false,
        password: false
     };
     
     var user = {

        firstName: 'Nathan',
        lastName: 'Cluff',
        username: 'Englishman003',
        password: 'Agent003',
        email: 'ncluff003@gmail.com'

     };
     
     /* -- Login Object Arrays -- */
     var loginRequired = Object.keys(LoginRequired);
     var User = Object.values(user);

     /* -- Login Arrays -- */
     var LoginValues = [loginValue1, loginValue2];

     function LoginRequirements(){
        for(i = 0; i < LoginInput.length; i++){
            if(LoginInput[i].hasAttribute('required')){
                loginRequired[i] = true;
            }
        }
    }
    
    /* Login Functions */
    function ExtendLogin() {
        LoginForm.style.display = 'grid';
        LoginForm.style.height = '500%';
        LoginOpen = true;
        LoginRequirements();

    }
    
    function CloseLogin() {
        LoginForm.style.display = 'none';
        LoginForm.style.height = '0';
        LoginOpen = false;
    }
    LoginCheck = function(){

        var usernameError = "Username Is Required";
        var passwordError = "Password Is Required";
        var UsernameError = "Username Is Not In Our Records";
        var PasswordError = "Password Is Not In Our Records";
        var LoginErrorValues = [LoginUsernameError, LoginPasswordError];
        var LoginErrors = [usernameError, passwordError];
        var loginErrors = [UsernameError, PasswordError];
        var ErrorNumber = 0;
        
        for(var i = 0; i < LoginValues.length; i++){
            if(LoginValues[i].value === "" || LoginValues[i].value === LoginValues[i].placeholder){
                LoginErrorValues[i].innerHTML = LoginErrors[i];
                ErrorNumber++;
            }
        }

        for(i = 0; i < LoginValues.length; i++){
            if(LoginValues[i].value !== "" && LoginValues[i].value !== LoginValues[i].placeholder){
                LoginErrorValues[i].innerHTML = "";
                ErrorNumber--;
            }
        }

//  ObjectArray[index].test(InputValue);

        var LoginValidation = [];
        var j = 0;
        for(i = 2; i >= 2 && i < 4; i++){
            if(LoginValues[j].value === User[i]){
                LoginValidation.push(true);
                j++;
            }

            else{
                LoginValidation.push(false);
                j++;
            }
        }

        if(ErrorNumber === -2 && LoginValidation[0] === true && LoginValidation[1] === true){
            LoginForm.submit();
            window.location = "file:///F:/MyCompany/KingRichard/userProfile.html";
        }

        for(i =0; i < 2; i++){

            if(ErrorNumber === -2 && LoginValidation[i] !== true){
                LoginErrorValues[i].innerHTML = loginErrors[i];
            }

        }
        
    };
    
    Login.onclick = function(){ExtendLogin();};
    Cancel.onclick = function() {CloseLogin();};
    LoginSubmit.onclick = function(){
        document.addEventListener('click', function(event)
        { event.preventDefault();});
        LoginCheck();
        window.location = "file:///F:/MyCompany/KingRichard/userProfile.html";
    };
    
//   --------------------------------------- ||
//         New User Forms         ||
//   --------------------------------------- ||

// | -- Variables -- ||

/* -- New User Form -- */

    /* Setup */
    var NewUser =document.getElementById('newUser');
    var NewUserContainer = document.getElementById('newUserContainer');
    var CloseContainer_NU = document.getElementById('Close');
    var NewUserForm = document.getElementsByClassName('newUserForm')[0];
    var FormSubmit = document.getElementsByClassName('inputContinue-Submit')[0];
    var QuestionSubmit = document.getElementsByClassName('inputContinue-Submit2')[0];
    var QuestionIndex = 0;
    var Question = document.getElementsByClassName('QuestionLabel');
    var Answer = document.getElementsByClassName('Question');
    var CurrentQuestion = 0;
    var Message = document.getElementsByClassName('messageArea')[0];
    var TogglePassword_NU = document.getElementsByClassName('passwordToggleContainer');
    var ShowPassword = document.getElementsByClassName('nuShow');
    var HidePassword = document.getElementsByClassName('nuHide');
    var PasswordShown = false;
    var RepeatPasswordShown = false;

    /* Input States */
    var empty = "";
    var Placeholder = Answer[CurrentQuestion].placeholder;

    /* Objects */

        // >  Required Object  <
            var Required = {
                firstName: false,
                lastName: false,
                username: false,
                password: false,
                repeatPassword: false,
                email: false            
            };

        // >  Valid Object  <
            var Valid = {
                firstName: /^[A-Za-z]+$/,
                lastName: /^[A-Za-z]+$/,
                username: /(?=[\w]*[A-Z])(?=[\w]*[\w])(?=[\w]*[\d])/,
                password: /(?=[\w]*[A-Z])(?=[\w]*[\w])(?=[\w]*[\d])/,
                repeatPassword: /(?=[\w]*[A-Z])(?=[\w]*[\w])(?=[\w]*[\d])/,
                email: /[^@]+@[^@]/                    
                };

    /* Arrays */

        // >  Single Arrays  < 
        var QuestionOne = [Question[0], Answer[0]];                                  //Array
        var QuestionTwo = [Question[1], Answer[1]];                                 //Array
        var QuestionThree = [Question[2], Answer[2]];                              //Array
        var QuestionFour = [Question[3], Answer[3]];                                //Array
        var QuestionFive = [Question[4], Answer[4]];                                 //Array
        var QuestionSix = [Question[5], Answer[5]];                                  //Array

        // >  2D Arrays  <        
        var Questions = [QuestionOne, QuestionTwo, QuestionThree, QuestionFour, QuestionFive, QuestionSix];             //Array of Arrays

        // > Object Arrays  <
        var required = Object.keys(Required);
        var Validation = Object.values(Valid);

        

// | -- Subtitle Example -- ||

// | -- Logging In -- ||

// | -- Cycling Questions -- ||

function makeInactive(){
    for(var i = 0; i < Questions[0].length; i++){    
        Questions[CurrentQuestion][i].style.opacity = 0;
        Questions[CurrentQuestion][i].style.height = 0;
        Questions[CurrentQuestion][i].style.marginTop = '(-20rem)';
        Questions[CurrentQuestion][i].style.display = 'none';    
    }
    
    if(CurrentQuestion === 5){
        removeWarningMessage(Message, empty);
    }
    
    CurrentQuestion++;
    return CurrentQuestion;    
}    
function makeCurrent(){    
    for(var j = 0; j < Questions[0].length; j++){
        if(CurrentQuestion === 6){
            break;
        }    
        else if(CurrentQuestion === 3){
            TogglePassword_NU[0].style.display = 'inline-block';
            TogglePassword_NU[1].style.display = 'none';
            ShowPassword[0].style.display = 'inline-block';
            ShowPassword[1].style.display = 'none';
            HidePassword[1].style.display = 'none';
        }    
        else if(CurrentQuestion === 4){
            TogglePassword_NU[0].style.display = 'none';
            TogglePassword_NU[1].style.display = 'inline-block';
            ShowPassword[0].style.display = 'none';
            HidePassword[0].style.display = 'none';
            ShowPassword[1].style.display = 'inline-block';
        }
    Questions[CurrentQuestion][j].style.display = 'inline-block';    
    Questions[CurrentQuestion][j].style.opacity = 1;
    Questions[CurrentQuestion][j].style.height = '100%';
    getFocus(Questions[CurrentQuestion][j]);
}   
    return CurrentQuestion;    
}

function cycleQuestions(){
    var p = 0;
    makeInactive();
    makeCurrent();
    if(CurrentQuestion > 2 && CurrentQuestion < 5){
        if (p === 2){
            p = 0;
        }
        TogglePassword_NU[p].style.display = 'inline-block';
    }
    else{
        for(var a = 0; a < TogglePassword_NU.length; a++){
            TogglePassword_NU[a].style.display = 'none';
        }
    }

    /* Warning shown once they reach Question 3 */
    if(CurrentQuestion === 2){
        setWarningMessage(Message, 'Username must have 1 Uppercase Letter, 1 Lowercase Letter, & 1 Number');
    }
    /* Warning shown once they reach Question 4 or 5 */
    if(CurrentQuestion === 3  || CurrentQuestion === 4){
        setWarningMessage(Message, 'Password must have 1 Uppercase Letter, 1 Lowercase Letter, & 1 Number');
    }
    /* Warning shown once they reach Question 6 */
    if(CurrentQuestion === 5){
        setWarningMessage(Message, 'Email is only collected for unique id purposes.  We will NOT spam. :)');
    }


}

// | -- Password Toggle -- ||

function TogglePassword(){
    if(PasswordShown === false){
        ShowPassword[0].style.display = 'none';
        HidePassword[0].style.display = 'inline-block';
        Answer[3].type = 'text';
        PasswordShown = true;
    }
    else if(PasswordShown === true){
        ShowPassword[0].style.display = 'inline-block';
        HidePassword[0].style.display = 'none';
        Answer[3].type = 'password';
        PasswordShown = false;
    }
}

function TogglePassword2(){
    if(RepeatPasswordShown === false){
        ShowPassword[1].style.display = 'none';
        HidePassword[1].style.display = 'inline-block';
        Answer[4].type = 'text';
        RepeatPasswordShown = true;
    }
    else if(RepeatPasswordShown === true){
        ShowPassword[1].style.display = 'inline-block';
        HidePassword[1].style.display = 'none';
        Answer[4].type = 'password';
        RepeatPasswordShown = false;
    }
}
TogglePassword_NU[0].onclick = function(){
TogglePassword();
};
TogglePassword_NU[1].onclick = function(){
TogglePassword2();
};
ShowPassword[0].onclick = function(){
TogglePassword();
};
ShowPassword[1].onclick = function(){
TogglePassword2();
};

// | -- New User Form Error / Warning Messages -- ||

    function setErrorMessage(element, element2, errormessage){        
        element.textContent = errormessage;
        element.classList.add('error');
        element.style.opacity = 1;
        element2[CurrentQuestion].focus();
    }

    function removeErrorMessage(element, errormessage){
        element.textContent = errormessage;
        element.classList.remove('error');
        element.opacity = 0;
    }

    function setWarningMessage(element, errormessage){

        element.textContent = errormessage;
        element.classList.add('warning');
        element.style.opacity = 1;

        if(CurrentQuestion === 4 || CurrentQuestion === 5){
            element.style.color = '#FFFFFF';
        }

    }

    function removeWarningMessage(element, errormessage){

        element.textContent = errormessage;
        element.classList.remove('warning');
        element.style.opacity = 0;

    }   
    
// | -- New User Form Validation -- ||

QuestionSubmit.onclick = function(){

        /* Make sure the input is not empty or the placeholder. */
        if((required[CurrentQuestion] === true) && (Answer[CurrentQuestion].value === empty || Answer[CurrentQuestion] === Placeholder)) {        
            setErrorMessage(Message, Answer, 'This field is required');
        }
        /* Check to know if a value is entered */        
        else if(Answer[CurrentQuestion] !== empty || Answer[CurrentQuestion] !== Answer[CurrentQuestion].placeholder) {        
            var value = Answer[CurrentQuestion].value;   // Store Input Value
            validResult = Validation[CurrentQuestion].test(value);  //  Test to see if input matches the pattern necessary for the Question
            var passwordsMatch = true;  // Assume passwords will match.

            /* What is done if input is valid. */
            if (CurrentQuestion === 0 || CurrentQuestion === 1 || CurrentQuestion === 2 || CurrentQuestion === 5){
                if(validResult === true){
                    removeErrorMessage(Message, empty);
                    cycleQuestions();
                }

                else if(validResult === false){
                    switch (CurrentQuestion){
                        case 0:  setErrorMessage(Message, Answer, 'Please enter your first name.'); break;
                        case 1:  setErrorMessage(Message, Answer, 'Please enter your last name.'); break;
                        case 2:  setErrorMessage(Message, Answer, 'Usernames must have 1 Uppercase Letter, 1 Lowercase Letter, & 1 Number.'); break;
                        case 3:  setErrorMessage(Message, Answer, 'Passwords must have 1 Uppercase Letter,  1 Lowercase Letter, & 1 Number.'); break;
                        case 4:  setErrorMessage(Message, Answer, 'Passwords should match.'); break;
                        case 5:  setErrorMessage(Message, Answer, 'Please enter a valid email address.  johndoe@email.com'); break;
                        default: setErrorMessage(Message, 'That is not the right value'); break;
                    }
                }
            }                
            
             else if(validResult === true){
                if(Answer[3].value !== Answer[4].value){                                //  If Passwords do not match this is what to do.
                    if(CurrentQuestion === 4){
                        setErrorMessage(Message, Answer, 'Passwords must match.');   // Set error message stating that passwords do not match.
                        passwordsMatch = false;                                                     // Password variable set to false.
                    }
                            
                    else{                                                                                       // Move on without an error message if passwords do match.
                            passwordsMatch = true;
                            removeErrorMessage(Message, empty);                                     // Remove the error message, if any was there.  
                    }                            
                }

                /* Switch statement for what to do if passwords finally match. */
                switch (passwordsMatch) {        
                    case false:
                    setErrorMessage(Message, Answer, ' ');
                    var passMatch = 'Passwords MUST MATCH!';
                    Message.innerHTML = "";
                    Message.innerHTML = passMatch; 
                    break;        
                    case true: 
                        removeWarningMessage(Message, empty);
                        removeErrorMessage(Message, empty);
                        cycleQuestions();
                        break;        
                }
            }                
    
            else if(validResult === false) {
    
                switch (CurrentQuestion){
                    case 0:  setErrorMessage(Message, Answer, 'Please enter your first name.'); break;
                    case 1:  setErrorMessage(Message, Answer, 'Please enter your last name.'); break;
                    case 2:  setErrorMessage(Message, Answer, 'Usernames must have 1 Uppercase Letter, 1 Lowercase Letter, & 1 Number.'); break;
                    case 3:  setErrorMessage(Message, Answer, 'Passwords must have 1 Uppercase Letter,  1 Lowercase Letter, & 1 Number.'); break;
                    case 4:  setErrorMessage(Message, Answer, 'Passwords should match.'); break;
                    case 5:  setErrorMessage(Message, Answer, 'Please enter a valid email address.  johndoe@email.com'); break;
                    default: setErrorMessage(Message, 'That is not the right value'); break;
                }
            }                
        }
    
};

//   --------------------------------------- ||
//            Form Submit            ||
//   --------------------------------------- ||

document.addEventListener("keydown", function(event){
if(CurrentQuestion < 6){                                                            // Checking if you are still answering form questions.
    if(event.keyCode === 13){    
        event.preventDefault();

        switch(LoginOpen){
          case false:  document.addEventListener('click', function(event){ event.preventDefault();}); QuestionSubmit.click();break;
          case true: LoginCheck(); window.location = "file:///F:/MyCompany/KingRichard/userProfile.html"; break;
        }     
    }  
}    
 if(CurrentQuestion === 6){                                                     // Checking if you are done with the form.
    NewUserForm.submit();    
}

});

// | -- New User Form Setup -- ||

function getFocus(element){
    element.focus();
}

function setUpNewUserForms(){

    /* Make New User Container Full Screen Width */
    NewUserContainer.style.width = '100%';

    /* Display 1st Question And Answer Input */
    for(var i = 0; i < Questions[QuestionIndex].length; i++){                  //  Questions[QuestionIndex].length = 2
        Questions[QuestionIndex][i].style.display = 'block';                    //   Make 1st Question & Answer Input Display As A Block Element
        Questions[QuestionIndex][i].style.opacity = 1;                            //   Make 1st Question & Answer Input Visble
        Questions[QuestionIndex][i].style.height = '100%';                     //   Make 1st Question & Answer Have 100% Height
    }

    /* Check Form For Required Inputs */
    for(i = 0; i < required.length; i++){                                                     //  required.length = 6
        if(Answer[i].hasAttribute('required')){                                          //  If Answer[i] Has The Required Attribute, Answer[i] = true
            required[i] = true;
        }    
    }    
}

NewUser.onclick = function(){
    NewUserContainer.style.display = 'grid';                                                //  Make the New User Container Visible                                                                                      //  Hiding Questions, Labels, & Password Toggle From The Start
    setTimeout(function() {setUpNewUserForms();}, 100);                         //  After 1/10th Of A Second, Set Up Form To Start From 1st Question
    CloseContainer_NU.style.display = 'grid';                                            //  Make Option Of Closing & Cancelling New User Membership Possible
    setTimeout(function() {getFocus(Answer[QuestionIndex]);}, 400);     //  After 4/10ths Of A Second, Make The 1st Question Focused
};

function hideEverything(){
    
    /* Hide Both Questions & Their Labels */
    for(var i = 0; i < Questions.length; i++){
        for(var j = 0; j < Questions[i].length; j++){
            Questions[i][j].style.opacity = 0;
            Questions[i][j].style.display = 'none';                                 //  Hiding Questions, Labels, & Password Toggle When Form Is Closed
        }
    }

    /* Hide Password Toggle */
    for(var a = 0; a < TogglePassword_NU.length; a++){
        TogglePassword_NU[a].style.display = 'none';

    }
}

function hideFormContainer(element){
    element.style.display = 'none';
}


CloseContainer_NU.onclick = function(){

    hideEverything();
    NewUserContainer.style.width = 0;
    setTimeout(function() {hideFormContainer(NewUserContainer);}, 300);
    for(i = 0; i < Answer.length; i++){
        Question[i].style.marginTop = 0;
        Answer[i].style.marginTop = 0;
    }

    NewUserForm.reset();
    removeErrorMessage(Message, empty);
    removeWarningMessage(Message, empty);
    CurrentQuestion = 0;
    CloseContainer_NU.style.display = 'none';

};