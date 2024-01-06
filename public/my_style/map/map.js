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


}

//https://www.google.com/maps/place/Antonio+de+San+Miguel+422,+5310004+Osorno,+Los+Lagos,+Chile/@-40.5633755,-73.1119766,19z/data=!3m1!4b1!4m6!3m5!1s0x96163638aa4212ad:0xe41795a23bcc6200!8m2!3d-40.5633755!4d-73.1113329!16s%2Fg%2F11jtvx3_7h?entry=ttu


function CargaScript(x, y, t) {
	pos = {x : x, y : y, title : t} 
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCAaD6blEoGnz-gDosCW24wC0Tv1Pt0Yds&callback=inicializar';
    document.body.appendChild(script);       
}


