
/*
get coords position and load link
http://maps.google.com/maps?z=12&t=m&q=<lat>,<lng>

    z is the zoom level (1-21)
    t is the map type ("m" map, "k" satellite, "h" hybrid, "p" terrain, "e" GoogleEarth)
    q is the search query

*/

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(get_geo_link);
  } 
}

function get_geo_link(position) {
  var pos = "https://www.google.com/maps/embed/v1/place?key=AIzaSyBTPNAn9hvpteLcYxmLymCjqE9j0tAK2gI&q="+position.coords.latitude +  "," + position.coords.longitude;
  document.getElementById("map").src = pos;
  var geo_positions_data = [{"lat": 2323,"long": 4544}, {"lat": 2323,"long": 4544}];  
  for (interator in geo_positions_data) {
  	console.log(geo_positions_data[interator].lat);
  }
  return pos;

}

function set_geo_link(position){
	if (navigator.geolocation) {
		var setLat = document.getElementById("latitud").value;
		var setLog = document.getElementById("longitud").value;
	if (setLog=="") {
		alert("entry longitude, please");
	}else{
		console.log("SetPosition Longitud : "+setLog);
		if (setLat=="") {
			alert("entry latitud, please");
		}else{
			console.log("SetPosition Latitud: "+setLat);
			var pos = "https://www.google.com/maps/embed/v1/place?key=AIzaSyBTPNAn9hvpteLcYxmLymCjqE9j0tAK2gI&q="+setLat +  "," + setLog;
			console.log(pos);
			return pos;
		}
	}
  }	
}

function viewMap(){
	var pos = set_geo_link();
	if (typeof something != "undefined") {
		document.getElementById("map").src = pos;
		console.log("Positions is : " + pos);
	}
}
