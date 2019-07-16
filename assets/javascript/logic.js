// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyAZJdiV3hcbhsQ50QBX2c0LzQ2YgZ-W3uY",
    authDomain: "train-schedule-69454.firebaseapp.com",
    databaseURL: "https://train-schedule-69454.firebaseio.com",
    projectId: "train-schedule-69454",
    storageBucket: "",
    messagingSenderId: "421115462529",
    appId: "1:421115462529:web:f876a6c8dc6ee9e0"
};
// Initialize Firebase
firebase.initializeApp(config);

///Here's a list of ID names in the HTML
//"#train-name"
//"#destination"
//"#train-time"
//"#frequency"
//"#submit-form"  - name of the submit button
var database = firebase.database();

// -----------------------------------------
// Global Variables
// -----------------------------------------

// Establishing global variables for Current Train Schedule and Add Train tables
var trainName = "";
var destination = "";
var firstTrainTime = "";
var frequency = 0;
var nextArrival = 0;
var minutesAway = 0;

// When submit button with 'submit-form' id is clicked, perform the following actions
$("#submit-form").on("click", function (event) {

    // Don't reset page
    event.preventDefault();

    // Set variables to equal the input of the Add Train table
    trainName = $("#train-name").val().trim();
    destination = $("#destination").val().trim();
    firstTrainTime = $("#train-time").val().trim();
    frequency = parseFloat($("#frequency").val().trim());

    // Test
    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);

    // Push this info the the Firebase database
    database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency
    });
})

// When a child is added, perform the following actions
database.ref().on("child_added", function (snapshot) {
    var sv = snapshot.val();
    console.log(snapshot);
    console.log(sv.trainName);
    console.log(sv.destination);
    console.log(sv.firstTrainTime);
    console.log(sv.frequency);

    console.log(snapshot.key + " - train is " + snapshot.val().trainName);
    //createRow(snapshot.val());


}, function (errorObject) {
    // console.log('Errors Handled: ' + errorObject.code);
});