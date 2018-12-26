function initMap() {
	var myLatLng = new google.maps.LatLng(52.198362,0.144571);

	var pathData = [
		new google.maps.LatLng(52.167003, 0.136246), 
		new google.maps.LatLng(52.166328, 0.135359),
		new google.maps.LatLng(52.166092, 0.134277), 
		new google.maps.LatLng(52.166684, 0.132381), 
		new google.maps.LatLng(52.166931, 0.131780),
		new google.maps.LatLng(52.168023, 0.130235),
		new google.maps.LatLng(52.167075, 0.126694), 
		new google.maps.LatLng(52.168039, 0.126507),
		new google.maps.LatLng(52.170826, 0.124892),
		new google.maps.LatLng(52.177018, 0.124795),   
		new google.maps.LatLng(52.177820, 0.124795),
		new google.maps.LatLng(52.181955, 0.126796), 
		new google.maps.LatLng(52.182968, 0.126581),
		new google.maps.LatLng(52.183764, 0.127032),
		new google.maps.LatLng(52.185619, 0.127397),
		new google.maps.LatLng(52.186737, 0.127139), 
		new google.maps.LatLng(52.188335, 0.127118),
		new google.maps.LatLng(52.188763, 0.126796),
		new google.maps.LatLng(52.189730, 0.126721),
		new google.maps.LatLng(52.189881, 0.126892),    
		new google.maps.LatLng(52.190184, 0.126560),
		new google.maps.LatLng(52.190631, 0.126324),
		new google.maps.LatLng(52.191170, 0.125605),
		new google.maps.LatLng(52.191289, 0.125551),  
		new google.maps.LatLng(52.192236, 0.124200), 
		new google.maps.LatLng(52.194136, 0.122901),
		new google.maps.LatLng(52.194880, 0.122569),
		new google.maps.LatLng(52.195688, 0.122547),
		new google.maps.LatLng(52.195859, 0.122472),
		new google.maps.LatLng(52.197891, 0.122386)
	]

	var features = [
		{
			position: new google.maps.LatLng(52.204006, 0.120749),
			type: 'parking',
			title: 'Grand Arcade Parking',
			content: '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><strong>Grand Arcade Parking</strong><p>Corn Exchange St, Cambridge CB2 3QF</p></div></div>',
		},
		{
			position: new google.maps.LatLng(52.177887, 0.137704),
			type: 'parking',
			title: "Addenbrook's Hospital Car Park 2",
			content: "<div id='content'><div id='siteNotice'></div><div id='bodyContent'><strong>Addenbrook's Hospital Car Park 2</strong><p>Robinson Way, Cambridge CB2 0SL</p></div></div>",
		},
		{
			position: new google.maps.LatLng(52.183034, 0.125538),
			type: 'parking',
			title: "Porson Road and Barrow Road",
			content: "<div id='content'><div id='siteNotice'></div><div id='bodyContent'><strong>Barrow Road and Porson Road</strong><p>Barrow Road, Cambridge CB2 8AS</p><em>Please be aware that there are parking restrictions in this area</em></div></div>",
		},
		{
			position: new google.maps.LatLng(52.160015, 0.137620),
			type: 'info',
			title: "Spring Head",
			content: "<div id='content'><div id='siteNotice'></div><div id='bodyContent'><strong>Spring Head</strong><p>Graham's Road, Cambridge CB22 5JY</p></div></div>",
		},
		{
			position: new google.maps.LatLng(52.168036, 0.107623),
			type: 'parking',
			title: "Trumpington Park and Ride",
			content: "<div id='content'><div id='siteNotice'></div><div id='bodyContent'><strong>Trumpington Park and Ride</strong><p>43 Hauxton Rd, Cambridge CB2 9FT</p></div></div>",
		},
		{
			position: new google.maps.LatLng(52.193281, 0.123275),
			type: 'parking',
			title: "Pay and Display - Trumpington Road",
			content: "<div id='content'><div id='siteNotice'></div><div id='bodyContent'><strong>Pay and Display - Trumpington Road</strong><p>Trumpington Road, Cambridge CB2 8AB</p></div></div>",
		},		
	];

	var icons = {
		parking: {
			icon: '/static/img/parking-pin.svg'
		},
		pub: {
			icon: '/static/img/drink-pin.svg'
		},
		info: {
			icon: '/static/img/info-pin.svg'
		},
	};

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: myLatLng,
	  scrollwheel: false,
	  zoom: 12,
	});

	var conduitPath = new google.maps.Polyline({
		path: pathData,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});

	conduitPath.setMap(map);

	var pathArray = window.location.pathname.split( '/' );
	console.log(pathArray[1]);

	
	features.forEach(function(feature) {
			var marker = new google.maps.Marker({
			position: feature.position,
			icon: icons[feature.type].icon,
			map: map,
			
		});
		var infowindow = new google.maps.InfoWindow({
			content: feature.content
		});
		marker.addListener('click', function() {
			infowindow.open(map, marker);
		});
	});
}