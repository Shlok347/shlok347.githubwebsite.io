$(document).ready(function() {
    
    
   
    /*----Maps---*/
   
           var map = new GMaps({
          div: '.map',
          lat: 29.201669,
          lng: 78.9778419,
        zoom :12 
        });
    
    map.addMarker({
 lat:  29.201669,
 lng: 78.9778419,
  title: 'Kashipur',
  infoWindow: {
  content: '<p>Our Kashipur HQ</p>'
  }
});
});