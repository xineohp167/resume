
/*
These are HTML strings. Using JavaScript functions
replace the %data% placeholder text.
*/
var HTMLheaderName = "<h1 id='name'>%data%</h1>";
var HTMLheaderRole = "<h3><span class='white-text'>%data%</span></h3>";

var HTMLcontactGeneric = "<li class='flex-item'><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></li>";
var HTMLmobile = "<li class='flex-item'><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>";
var HTMLemail = "<li class='flex-item'><span class='orange-text'>email</span><span class='white-text'>%data%</span></li>";
var HTMLtwitter = "<li class='flex-item'><span class='orange-text'>twitter</span><span class='white-text'>%data%</span></li>";
var HTMLgithub = "<li class='flex-item'><span class='orange-text'>github</span><span class='white-text'>%data%</span></li>";
var HTMLblog = "<li class='flex-item'><span class='orange-text'>blog</span><span class='white-text'>%data%</span></li>";
var HTMLlocation = "<li class='flex-item'><span class='orange-text'>location</span><span class='white-text'>%data%</span></li>";

var HTMLbioPic = "<img src='%data%' class='biopic'>";
var HTMLWelcomeMsg = "<span class='welcome-message'>%data%</span>";

var HTMLskillsStart = "<h3 id='skillsH3'>Skills at a Glance:</h3><ul id='skills' class='flex-box'></ul>";
var HTMLskills = "<li class='flex-item'><span class='white-text'>%data%</span></li>";

var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLworkEmployer = "<a href='#'>%data%";
var HTMLworkTitle = " - %data%</a>";
var HTMLworkDates = "<div class='date-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div><br>";
var HTMLworkDescription = "<p><br>%data%</p>";

var HTMLprojectStart = "<div class='project-entry'></div>";
var HTMLprojectTitle = "<a href='#'>%data%</a>";
var HTMLprojectDates = "<div class='date-text'>%data%</div>";
var HTMLprojectDescription = "<p><br>%data%</p>";
var HTMLprojectImage = "<img src='%data%'>";

var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<a href='#'>%data%</a>";
var HTMLschoolDegree = "<em>%data%</em><br>";
var HTMLschoolThesis = "<em>Thesis: %data%</em><br>"
var HTMLschoolDates = "<div class='date-text'>%data%</div><br>";
var HTMLschoolLocation = "<div class='location-text'>%data%</div><br>";

var HTMLonlineClasses = "<br><h3>Online Classes</h3>";
var HTMLonlineTitle = "<a href='#'>%data%";
var HTMLonlineSchool = "<em><br>%data%</em>";
var HTMLonlineDates = "<div class='date-text'>%data%</div><br>";
var HTMLonlineURL = "<br><a href='#'>%data%</a>";

var googleMap = "<div id='map'></div>";

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable
var zoomLevel = 4;
/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {


  var myCenter=new google.maps.LatLng(42.696694, 23.315707);

  var mapOptions = {
    center: myCenter,
    zoom: zoomLevel,
    disableDefaultUI: true
  };


  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  window.mapBounds = new google.maps.LatLngBounds();


  var lat = myCenter.lat();  // latitude from the place service
  var lon = myCenter.lng();  // longitude from the place service
  bounds = window.mapBounds;



    // marker is an object with additional data about the pin for a single location
  marker = new google.maps.Marker({
    position: myCenter,
    map: map,
    title: "Sofia"
  });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
  var contentString =  "I'm here. Let's get in touch!";
  var infoWindow = new google.maps.InfoWindow({
    content: contentString
  });

  // hmmmm, I wonder what this is about...
  // marker.addListener('click', function() {
  //       infowindow.open(map, marker);
  // });
  google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
      infoWindow.open(map, marker)
    });

  bounds.extend(new google.maps.LatLng(lat, lon));
  // fit the map to the new marker
  map.fitBounds(bounds);
  // center the map
  map.setCenter(bounds.getCenter());
  map.setZoom(zoomLevel);
}


/*
Uncomment all the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
  map.setZoom(zoomLevel);
});
