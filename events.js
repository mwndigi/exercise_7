// Imported from Event.js

class Events {
    //Klassens variabler
    constructor(eventName, eventLocation, Category, eventTime, eventDescription, eventCapacity, eventHost, eventParticipants) {
        this.eventName = eventName;
        this.eventLocation = eventLocation;
        this.Category = Category;
        this.eventTime = eventTime;
        this.eventDescription = eventDescription;
        this.eventCapacity = eventCapacity;
        this.eventHost = eventHost;
        this.eventParticipants = eventParticipants;
    }

    //Metode der skal sikre at event har kapacitet hvis en bruger ønsker at deltage
    //Virker ikke
    remainingCapacity() {
        var remainingCapacity = this.eventCapacity.length - this.eventParticipants.length;
        var joinEvent = true;
        if (remainingCapacity > 0) {
            return remainingCapacity.length;
        } else {joinEvent = false;}
    }
}

// IMPORTED from dummyEvent.js


// If-statement der ser om localstorage med key: storedListOfEvents er tom. Hvis der er tilfældet bliver hard-codede events tilknyttet
if (localStorage.getItem("storedListOfEvents") == null) {
    var listOfEvents = [];
// Hardcodede værdier pushes til array
    listOfEvents.push(new Events("Fælles madlavning", "København", "Mad", "17:30, d.31/12-2019", "Vi mødes laver lidt lækkert mad og drikker lidt vin. s.u. d. 24/12-2019", "4", "Thorn"));
    listOfEvents.push(new Events("Motionsfodbold", "Odense", "Sport", "17:00, d.20/10-2019", "Vi mødes til lidt hygge fodbold, fodboldstøvler er ikke et krav men anbefales", "22", "Thorn"));
    listOfEvents.push(new Events("Kulturnat", "København", "Kultur", "20:00, d.12/10-2019", "Vi går en tur rundt i byen og ser på hvad byen kan", "100", "Peter"));
    listOfEvents.push(new Events("Pubcrawl", "København", "Bytur", "16:00, d.1/11-2019", "Vi tager en tur op gennem Gothersgade og besøger lidt forskellige barer på J-dag", "25", "Thorn"));
    listOfEvents.push(new Events("Koncert med Khalid", "Aarhus", "Koncert", "11:00, 27/11-2019", "Vi tager ind og hører Khalid sammen. s.u. d 25/10-2019", "300", "Peter"));

    // listOfEvents stringifies, så de kan tilknyttes localStorage
    var listOfEventsString = JSON.stringify(listOfEvents);
    localStorage.setItem("storedListOfEvents", listOfEventsString);
} else {
    // localStorage med key: "storedListOfEvents" er ikke tomt, og den data hentes og gøres til objekter i arry'et listOfEvents
    var listOfEvents = JSON.parse(localStorage.getItem("storedListOfEvents"));
}

// IMPORTED from displayEvent

var listOfEvents = JSON.parse(localStorage.getItem("storedListOfEvents"));

// for-loop der kører igennem alle events
for (i=0; i<listOfEvents.length; i++) {

    // Tilknytter (appendChild) alle eventnavne (som paragraffer) til div'en eventName
    var eventName = document.createElement("p");
    eventName.innerHTML = listOfEvents[i].eventName;

    // Variabel tilknyttet tagget <hr>, som tilknytter en vandret linje under hver node
    var linje1 = document.createElement("hr");
    eventName.appendChild(linje1);
    document.getElementById("eventName").appendChild(eventName);

    // Samme fremgangsmåde
    var eventLocation = document.createElement("p");
    eventLocation.innerHTML = listOfEvents[i].eventLocation;
    var linje2 = document.createElement("hr");
    eventLocation.appendChild(linje2);
    document.getElementById("eventLocation").appendChild(eventLocation);

    // Samme fremgangsmåde
    var eventKategori = document.createElement("p");
    eventKategori.innerHTML = listOfEvents[i].Category;
    var linje3 = document.createElement("hr");
    eventKategori.appendChild(linje3);
    document.getElementById("eventKategori").appendChild(eventKategori);

    // Skal laves drastisk om, ved implementering af tidskoder
    // Samme fremgangsmåde
    var eventTid = document.createElement("p");
    eventTid.innerHTML = listOfEvents[i].eventTime;
    var linje4 = document.createElement("hr");
    eventTid.appendChild(linje4);
    document.getElementById("eventTid").appendChild(eventTid);

    // Samme fremgangsmåde
    var eventHost = document.createElement("p");
    eventHost.innerHTML = listOfEvents[i].eventHost;
    var linje5 = document.createElement("hr");
    eventHost.appendChild(linje5);
    document.getElementById("eventVært").appendChild(eventHost);

    // Samme fremgangsmåde
    var eventBeskrivelse = document.createElement("p");
    eventBeskrivelse.innerHTML = listOfEvents[i].eventDescription;
    var linje6 = document.createElement("hr");
    eventBeskrivelse.appendChild(linje6);
    document.getElementById("eventBeskrivelse").appendChild(eventBeskrivelse);

    // Virker ikke
    // var eventKapacitet = document.createElement("P");
    // eventKapacitet.innerHTML = listOfEvents[i].remainingCapacity;
    // document.getElementById("eventBeskrivelse").appendChild(eventBeskrivelse);

    // Samme fremgangsmåde
    var eventKapacitet = document.createElement("p");
    eventKapacitet.innerHTML = listOfEvents[i].eventCapacity;
    eventKapacitet.className = "event";
    var linje7 = document.createElement("hr");
    eventKapacitet.appendChild(linje7);
    document.getElementById("eventKapacitet").appendChild(eventKapacitet);

    // Tilmeldningsknap
    var tilmeldEvent = document.createElement("button");
    tilmeldEvent.innerHTML = "Tilmeld";
    document.getElementById("tilmeldEvent").appendChild(tilmeldEvent);

    tilmeldEvent.addEventListener('click', tilmeld, false);
}

function tilmeld() {
    alert("du er nu tilmeldt");
}