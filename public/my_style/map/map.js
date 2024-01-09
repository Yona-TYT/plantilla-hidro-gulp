 // JavaScript source code
var pos = {x : 0, y : 0, title: ""} 
function inicializar() {
	// Coordinates to center the map
	var myLatlng = new google.maps.LatLng(pos.x, pos.y);

	// Other options for the map, pretty much selfexplanatory
    var mapOptions = {
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP, //ROADMAP  SATELLITE HYBRID TERRAIN
        zoom: 18,
		scrollwheel: false,
		query: pos.title
    };
 
	// Attach a map to the DOM Element, with the defined settings
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
 
    //Añadimos el marcador
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: pos.title,
	});

	//Resize map
	//google.maps.event.addDomListener(window, 'load', initialize);
 	google.maps.event.addDomListener(window, "resize", function() {
 		var center = map.getCenter();
 		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
  });

}

function CargaScript(x, y, t) {
	pos = {x : x, y : y, title : t} 
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCAaD6blEoGnz-gDosCW24wC0Tv1Pt0Yds&callback=inicializar';
    document.body.appendChild(script);       
}


