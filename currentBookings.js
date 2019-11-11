// Creates a var/array 'bookings' that gets/saves all the bookings from localStorage,
// so we can use the information.
var bookings = JSON.parse(localStorage.getItem("Bookings"));

// Here we create an empty array to use in our function below.
// This array will be the array that will be used to show bookings on My Page.
currentStudentBookings = [];

// Here we make a for loop that goes through every index of array 'bookings'.
// It checks if the individual bookings studentIDs
// matches the currently logged ins studentID.
// If it is, it will push that index into 'currentStudentBookings' array.

function currentIDBookings() {
    for(i = 0; i < bookings.length; i++) {
        if(bookings[i].studentID == currentStudent.studentID) {
            currentStudentBookings.push(bookings[i]);
        }
    }
}

// Calls the function currentIDBookings so it's being executed.
currentIDBookings();








