// Defines the class of a user
class user {
    // Adds attributes to the class
    constructor (user_type, name, birthday, username, password, email, user_id) {
        this.user_type = user_type;
        this.name = name;
        this.birthday = birthday;
        this.username = username;
        this.password = password;
        this.email = email;
        this.user_id = user_id;
    }
    // Method added to the class, which display an alert, when the user is created from the class and called
    createAlert (){
        alert("Hi " + this.name + " you have been registered");
    }
}
​
// Creates admin-user, which is a pre-defined user
var admin = new user (0, "Admin", 10101000, "admin", 123456, "xx@mail.dk", 0);
​
​
// Defines variables of the fields that are required to be filled out during registration and checks if the fields are
// filled out correctly, if filled out correctly runs controlOfUserCreation
​
function controlOfUserCreation() {
    var type = document.getElementById("user_type");
    var birthday = document.getElementById("birthday").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var name = document.getElementById("name");
    var alertMessage = "";
    var alertBoolean = true;
​
    if (type.value == "1" || type.value == "2") {
        alertBoolean = true;
        console.log(alertBoolean);
    } else {
        alertMessage += "Brugertype skal vælges \n";
        alertBoolean = false;
        console.log(alertBoolean);
    }
    // if statement which controls that there is a name entered
    if (name.value==""){
        alertMessage += "Indtast dit navn \n";
        alertBoolean = false;
    }
​
    // if statement which controls that the wanted username is atleast 4 characters
    if (username.length <= "3") {
        alertMessage += "Brugernavn skal mindst være 4 tegn \n";
        alertBoolean = false;
    }
​
    // if statement which controls that the wanted password is atleast 6 characters
    if (password.length <= "5") {
        alertMessage += "Password skal mindst være 6 tegn \n";
        alertBoolean = false;
    }
​
    // Variable that collects the index number of @/at in the email
    var atpos=email.indexOf("@");
    // Variable that collects the index of the last ./dot in the email
    var dotpos=email.lastIndexOf(".");
​
    // if statement that validates the typed in email
    // atpos<1 (at least 1 character before @) dotpos<atpos+2 (must be characters between @ and .)
    // dotpos+2>=email.length (must be characters after . eg .com)
    if(atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        alertMessage += "Den indtastede email skal være gyldig \n";
        alertBoolean = false;
    }
    var GivenDate = birthday;
    var CurrentDate = new Date();
    GivenDate = new Date(GivenDate);
    // Controls that the GivenDate (date entered on site) is lesser than the CurrentDate (the date today)
    // to make sure that the entered birthday is an actual date
    if (GivenDate > CurrentDate) {
        alertMessage += "Indtast en korrekt fødselsdag";
        alertBoolean = false;
    }
​
    // Loop which goes through
    for ( let i = 0; i < userArray.length; i++) {
        if (username === userArray[i].username){
            alertMessage += "Brugernavnet bliver allerede brugt, af en anden bruger. Vælg et nyt \n";
            alertBoolean = false;
        }
    }
​
    // If the alertBoolean is false, it means one or more of the boxes, which the user have to fill out,
    // is not filled out correctly therefore the alertmessage is alerted.
    // All the fails is stored into the alertMessage. If the alertBoolean is true, it all are filled out
    // perfect, and the user is created
    if (alertBoolean === false) {
        alert(alertMessage);
    } else {
        createUser();
    }
}
​
// Defines a variable which collects the current users, which are stored in the localStorage
var userArray = JSON.parse(localStorage.getItem("allUsers"));
​
// Controls if there is any user stored in localStorage. If not, we create a new array which is empty. If yes we proceed with the current array
if (userArray == null) {
    var userArray = [];
    userArray.push(admin);
    console.log(userArray);
    console.log("tomt array med Admin-bruger");
} else {
    console.log(userArray);
    console.log("Nuværende brugere")
}
​
// Variable which contains the length of the array
var userArrayLength = userArray.length;
console.log(userArrayLength);
var user_idgen = 0;
​
// A function which generates the user_id for the users
function user_id_generator (){
    // This comparisson ensures that the userId cant be the same for two users.
    // Because of the userId is egual to the number of users,
    // then the userId just have to be 1 higher compared to the last created user
    user_idgen = userArrayLength++;
    // Ensures that if we have a user with userId=0 and a user with userId=3,
    // then the generation of userId's starts from the highest userId
    for ( let n = 0; n < userArray.length; n++) {
        var mid = userArray[n].user_id;
        if (user_idgen === mid) {
            user_idgen++;
        }
    }
    console.log(user_idgen);
    return user_idgen;
}
​
// The function which creates the user object
function createUser() {
​
    console.log("Calls user_id_generator");
    user_id_generator();
​
    // The class "user" is used to make an object, with the information which is typed in the boxes at the HTML page for registration
    var userObj = new user(
        document.getElementById("user_type").value,
        document.getElementById("name").value,
        document.getElementById("birthday").value,
        document.getElementById("username").value,
        document.getElementById("password").value,
        document.getElementById("email").value,
        user_idgen
    );
​
    // Pushes the new user into the array
    userArray.push(userObj);
    console.log(userArray);
    console.log("Nyeste bruger tilføjet");
​
    // Stores the array with user-objects into localstorage and logs the new userArray
    localStorage.setItem('allUsers', JSON.stringify(userArray));
    console.log(JSON.parse(localStorage.getItem("allUsers")));
​
    userObj.createAlert();
    // Allocates to the login-page when the user is created and stored
    window.location.href = "login.html";
}