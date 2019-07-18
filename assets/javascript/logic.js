// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyBDGttGqMV563UGjk0Cb4wfsV8zZnyAssg",
    authDomain: "train-schedule2-fb77f.firebaseapp.com",
    databaseURL: "https://train-schedule2-fb77f.firebaseio.com",
    projectId: "train-schedule2-fb77f",
    storageBucket: "",
    messagingSenderId: "86668278639",
    appId: "1:86668278639:web:94114b921e5b1412"
};
// Initialize Firebase
firebase.initializeApp(config);

///Here's a list of ID names in the HTML:
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
    firstTrainTime = moment($("#train-time").val().trim(), "HH:mm").format("HH:mm");
    frequency = parseFloat($("#frequency").val().trim());

    // Test
    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);

    // Push this info to the Firebase database
    database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency
    });
})

// When a child is added, perform the following actions
database.ref().on("child_added", function (snapshot) {

    // Creates variable to see database values
    var sv = snapshot.val();

    // Updating variables
    var trainName = sv.trainName;
    var destination = sv.destination;
    var firstTrainTime = sv.firstTrainTime;
    var frequency = sv.frequency;

    // Test
    console.log(snapshot);
    console.log(sv.trainName);
    console.log(sv.destination);
    console.log(sv.firstTrainTime);
    console.log(sv.frequency);
    console.log(snapshot.key + " - train is " + sv.trainName);

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1, "years");

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

    // Time apart (remainder)
    var tRemainder = diffTime % frequency;

    // Minute Until Train
    var minutesAway = frequency - tRemainder;

    // Next Train
    var nextArrival = moment().add(minutesAway, "minutes").format("HH:mm");

    // Test
    console.log(firstTimeConverted);
    console.log("DIFFERENCE IN TIME: " + diffTime);
    console.log("TIME APART: " + tRemainder);
    console.log("MINUTES TILL NEXT TRAIN: " + minutesAway);
    console.log("ARRIVAL TIME: " + moment(minutesAway).format("HH:mm"));

    // New variables to create and update table rows
    var tbl = $('.table');
    var row = $('<tr>');

    // Update Current Train Schedule row with data
    row.append($('<td>').text(trainName));
    row.append($('<td>').text(destination));
    row.append($('<td>').text(frequency));
    row.append($('<td>').text(nextArrival));
    row.append($('<td>').text(minutesAway));

    // Update Current Train Schedule table with data
    tbl.append(row);

    // Function to print info if input is errorObject
}, function (errorObject) {
    console.log('Errors Handled: ' + errorObject.code);
});