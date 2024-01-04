 // JavaScript source code
var pos = {x : 0, y : 0} 
function inicializar() {
    //Opciones del mapa
    var OpcionesMapa = {
        center: new google.maps.LatLng(pos.x, pos.y),
        mapTypeId: google.maps.MapTypeId.ROADMAP, //ROADMAP  SATELLITE HYBRID TERRAIN
        zoom: 18,
		scrollwheel: false,
		query: "Roberto Perez Obregon Law Office"
    };
 
    var miMapa;
    //constructor
    miMapa = new google.maps.Map(document.getElementById('mapa'), OpcionesMapa);
 
    //Añadimos el marcador
    var Marcador = new google.maps.Marker({
                    position: new google.maps.LatLng(pos.x, pos.y),
                    map: miMapa,
                    title:"Mi Ubicacion"
                });
}
 
function CargaScript(x,y) {
	pos = {x : x, y : y} 
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCAaD6blEoGnz-gDosCW24wC0Tv1Pt0Yds&callback=inicializar';
    document.body.appendChild(script);                 
}
 
