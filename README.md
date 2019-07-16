# Train Schedule Application

Train Schedule application written in Javascript and incorporates use of Google Firebase and Moment.js

[Link to train schedule!](https://ashleyerffmeyer.github.io/train-schedule/) 

## Authors
Ashley Erffmeyer, with major support from KU's Coding Boot Camp staff members:
* Ryan LaRue (Instructor)
* Jenny Dean (TA)
* Jacqueline Kolze (TA)
* Eli Vargas (TA)

## Tools Used
* Firebase
* Moment.js
* JavaScript
* jQuery
* Bootstrap
* CSS
* HTML

## Prerequisites & Installations
None

Note: Added the following script lines in index.html to allow for bootstrap, jQuery, Firebase, and Moment.js functionality

```html
<!--Enabling bootstrap functionality-->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

<!--Enabling jQuery-->
<script src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>

<!--Enabling Firebase-->
<script src="https://www.gstatic.com/firebasejs/6.0.4/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.0.4/firebase-database.js"></script>

<!--My own css style sheet-->
<link rel="stylesheet" href="assets/css/style.css">

<!--Importing my JavaScript logic-->
<script type="text/javascript" src="assets/javascript/logic.js"></script>

<!--Importing Bootstrap JavaScript-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
```

## Design Notes

* App meets these basic specs:
  
  * When adding trains, administrators should be able to submit the following:
    
    * Train Name
    
    * Destination 
    
    * First Train Time -- in military time
    
    * Frequency -- in minutes
  
  * App calculates when the next train will arrive; this should be relative to the current time.
  
  * Users from many different machines must be able to view same train times.

  ## Application Overview

This is a train schedule application that incorporates Firebase to host arrival and departure data. The app retrieves and manipulates this information with Moment.js. The website provides up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

