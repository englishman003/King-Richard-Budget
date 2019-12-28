//   --------------------------------------- ||
//          Profile Settings          ||
//   --------------------------------------- ||

var Settings = document.getElementsByClassName('profileSettings')[0];
var Settings2 = document.getElementsByClassName('profileSettings2')[0];
let ProfileSettingsContainer = document.getElementsByClassName('profileSettings-GridContainer')[0];
let ProfileSettingsHeader = document.getElementsByClassName('profileSettings-header')[0];
var SettingsContainer = document.getElementsByClassName('profileContainer-Settings-Container')[0];
var changePasswordHeader = document.getElementsByClassName('change-password-header')[0];
var changeUsernameHeader = document.getElementsByClassName('change-username-header')[0];
var changePassword = document.getElementsByClassName('change-password')[0];
var changeUsername = document.getElementsByClassName('change-username')[0];
var deleteProfile = document.getElementsByClassName('delete-profile')[0];
var UsernameForm = document.getElementsByClassName('formContainer')[0];
var PasswordInput = document.getElementById('pw');
var rPasswordInput = document.getElementById('rpw');
let Card = document.getElementsByClassName('cardContainer');

function oneHundredPercentHeight(element){
    element.classList.toggle('oneHundred');
}

function originalHeight(element){
    element.classList.revmoveClass('oneHundred');
}

changePassword.onclick = function(){
    oneHundredPercentHeight(changePassword);
}
changeUsername.onclick = function(){
    oneHundredPercentHeight(changeUsername);
}
UsernameForm.onclick = function(){
    oneHundredPercentHeight(changeUsername);
}
UsernameForm.onclick = function(){
    oneHundredPercentHeight(changeUsername);
}
PasswordInput.onclick = function(){
    oneHundredPercentHeight(changePassword);
}
rPasswordInput.onclick = function(){
    oneHundredPercentHeight(changePassword);
}

function showOptions(element1, element2, element3,element4){
    element1.style.display = 'block';
    element1.style.opacity = 1;
    element2.style.display = 'block';
    element2.style.opacity = 1;
    element3.style.display = 'block';
    element3.style.opacity = 1;
    element4.style.display = 'block';
    element4.style.opacity = 1;
    
}
function hideOptions(element1, element2, element3,element4){
    element1.style.display = 'none';
    element1.style.opacity = 0;
    element2.style.display = 'none';
    element2.style.opacity = 0;
    element3.style.display = 'none';
    element3.style.opacity = 0;
    element4.style.display = 'none';
    element4.style.opacity = 0;

    
}

Settings.onclick = function(){
    SettingsContainer.style.display = 'flex';
    Card[0].style.display = 'none';
    Card[1].style.display = 'none';
    Card[2].style.display = 'none';
    setTimeout(function() {showOptions(changeUsername, changePassword, deleteProfile, ProfileSettingsHeader);}, 800);   
    SettingsContainer.classList.toggle('oneHundredWidth');
    Settings.style.display = 'none';
    Settings2.style.display = 'inline-block';

}

function showCards(element1, element2, element3){
    Card[0].style.display = 'flex'; 
    Card[1].style.display = 'flex'; 
    Card[2].style.display = 'flex'; 
}

Settings2.onclick = function(){
    setTimeout(function() {hideOptions(changeUsername, changePassword, deleteProfile, ProfileSettingsHeader);}, 100);
    Settings.style.display = 'inline-block';
    Settings2.style.display = 'none';
    SettingsContainer.classList.toggle('oneHundredWidth');
    SettingsContainer.style.display = 'none';
    setTimeout(function() {showCards(Card[0], Card[1], Card[2]);}, 700);

}

