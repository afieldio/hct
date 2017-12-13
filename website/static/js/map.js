function initMap() {
	var myLatLng = new google.maps.LatLng(52.198362,0.144571);

	var pathData = [
		new google.maps.LatLng(52.20625227354752, 0.12078523635864258),
		new google.maps.LatLng(52.20560793316631, 0.11870384216308594),
		new google.maps.LatLng(52.20548072410742, 0.11791715621950516),
		new google.maps.LatLng(52.20461281981008, 0.11768112182619461),
		new google.maps.LatLng(52.202824357499516, 0.1186252593994368),
		new google.maps.LatLng(52.197721584112635, 0.12244472503664383),
		new google.maps.LatLng(52.19506475368203, 0.12261638641359696),
		new google.maps.LatLng(52.19222361079005, 0.12420425415041336),
		new google.maps.LatLng(52.191144981213284, 0.12553462982180008),
		new google.maps.LatLng(52.17209364978223, 0.12484798431398758),
		new google.maps.LatLng(52.17068552728821, 0.12484798431398758),
		new google.maps.LatLng(52.168356105320505, 0.12652168273928055),
		new google.maps.LatLng(52.16593443002925, 0.1266504287719954),
		new google.maps.LatLng(52.1643681676729, 0.1277662277221907),
		new google.maps.LatLng(52.163091425641134, 0.13107070922853836),
		new google.maps.LatLng(52.16664515274634, 0.13195047378542313),
		new google.maps.LatLng(52.16657276484065, 0.13263711929323563),
		new google.maps.LatLng(52.16614501572149, 0.13433227539064774),
		new google.maps.LatLng(52.16640824643529, 0.1355339050293196),
	]

	var features = [
		{
			position: new google.maps.LatLng(52.20625227354752, 0.12078523635864258),
			type: 'parking',
			title: 'Nine Wells Parking',
			content: '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><h1>Nine Wells Parking</h1></div></div>'
		},
		{
			position: new google.maps.LatLng(52.23635427354752, 0.14078523635864258),
			type: 'parking',
			title: 'Cambridge City Center Parking',
			content: '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><h1>Cambridge City Center Parking</h1></div></div>'
		},
		{
			position: new google.maps.LatLng(52.16640824643529, 0.1355339050293196),
			type: 'pub',
			title: 'The George and Dragon',
			content: '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><h1>The Pub</h1></div></div>'
		},
	];

	var icons = {
		parking: {
			icon: '/static/img/parking-pin.svg'
		},
		pub: {
			icon: '/static/img/drink-pin.svg'
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

	if(pathArray[1] == 'location'){
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


}



