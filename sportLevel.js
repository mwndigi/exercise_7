// Checker hvilke sportsgrene der er checket af og pusher dem til sportslevels
var sportLevel = document.getElementsByClassName("sportLevel");
for (i = 0; i < sportLevel.length; i++) {
    if (sportLevel[i].checked) {
        currentSport = sportLevel[i].value;
    }
}






















