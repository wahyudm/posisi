$(function() {
    // Setup leaflet map
    var map = new L.Map('map',{
        center: [-6.746844, 108.175107],
        zoom: 9
        });
		
			var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			});
			
			var esri = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
			attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
			});
			
			var google = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
		   maxZoom: 20,
		   subdomains:['mt0','mt1','mt2','mt3'],
		   attribution: 'Google Satellite'
		   });
		   
		   var gmaps = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
		   maxZoom: 20,
		   subdomains:['mt0','mt1','mt2','mt3'],
		   attribution: 'Google Streets'
			}).addTo(map);

			var data = [
			{"loc":[-6.1766309,106.8304899], "title":"Stasiun Gambir"},
			{"loc":[-6.1747185,106.844333], "title":"Stasiun Pasar Senen"},
			{"loc":[-6.209878,106.8502174], "title":"Stasiun Manggarai"},
			{"loc":[-6.2152273,106.8703446], "title":"Stasiun Jatinegara"},
			{"loc":[-6.2193255,106.9523325], "title":"Stasiun Cakung"},
			{"loc":[-6.2361393,106.9994797], "title":"Stasiun Bekasi"},
			{"loc":[-6.2587068,107.0558152], "title":"Stasiun Tambun"},
			{"loc":[-6.255403,107.1451267], "title":"Stasiun Cikarang"},
			{"loc":[-6.2705733,107.1798401], "title":"Stasiun Lemahabang"},
			{"loc":[-6.2700584,107.2612263], "title":"Stasiun Kedunggedeh"},
			{"loc":[-6.3052285,107.3001498], "title":"Stasiun Karawang"},
			{"loc":[-6.349927,107.3453097], "title":"Stasiun Klari"},
			{"loc":[-6.369167,107.3746655], "title":"Stasiun Kosambi"},
			{"loc":[-6.393221,107.4332273], "title":"Stasiun Dawuan"},
			{"loc":[-6.4061293,107.4589963], "title":"Stasiun Cikampek"},
			{"loc":[-6.4083877,107.5406358], "title":"Stasiun Tanjungrasa"},
			{"loc":[-6.4092452,107.584019], "title":"Stasiun Pabuaran"},
			{"loc":[-6.4181861,107.6344593], "title":"Stasiun Pringkasap"},
			{"loc":[-6.4264075,107.6885019], "title":"Stasiun Pasirbungur"},
			{"loc":[-6.4355589,107.7396058], "title":"Stasiun Cikaum"},
			{"loc":[-6.4537701,107.8171019], "title":"Stasiun Pegadenbaru"},
			{"loc":[-6.4554184,107.8830859], "title":"Stasiun Cipunegara"},
			{"loc":[-6.4586318,107.9409389], "title":"Stasiun Haurgeulis"},
			{"loc":[-6.4639811,108.0352762], "title":"Stasiun Cilegeh"},
			{"loc":[-6.4677987,108.1067379], "title":"Stasiun Kadokangabus"},
			{"loc":[-6.46987,108.1609946], "title":"Stasiun Terisi"},
			{"loc":[-6.4647363,108.2346823], "title":"Stasiun Telagasari"},
			{"loc":[-6.4728392,108.3063283], "title":"Stasiun Jatibarang"},
			{"loc":[-6.5283802,108.3532988], "title":"Stasiun Kertasemaya"},
			{"loc":[-6.6446634,108.4145435], "title":"Stasiun Arjawinangun"},
			{"loc":[-6.6630732,108.4599957], "title":"Stasiun Bangoduwa"},
			{"loc":[-6.679535,108.5006765], "title":"Stasiun Cangkring"},
			{"loc":[-6.7052739,108.55555], "title":"Stasiun Cirebon"},
			{"loc":[-6.7193421,108.5588038], "title":"Stasiun Cirebon Prujakan"},
			{"loc":[-6.7777247,108.5930935], "title":"Stasiun Luwung"},
			{"loc":[-6.832756,108.6259513], "title":"Stasiun Sindanglaut"},
			{"loc":[-6.9029226,108.7439859], "title":"Stasiun Ciledug"},
			{"loc":[-6.9382946,108.8843762], "title":"Stasiun Ketanggungan"},
			{"loc":[-6.9905456,108.9486991], "title":"Stasiun Larangan"},
			{"loc":[-7.0245279,108.9888423], "title":"Stasiun Songgom"},
			{"loc":[-7.1228194,108.9826878], "title":"Stasiun Prupuk"},
			{"loc":[-7.1849349,109.0124701], "title":"Stasiun Linggapura"},
			{"loc":[-7.2374021,109.0098136], "title":"Stasiun Bumiayu"},
			{"loc":[-7.2855943,109.0297816], "title":"Stasiun Kretek"},
			{"loc":[-7.3281891,109.0576696], "title":"Stasiun Patuguran"},
			{"loc":[-7.3824967,109.1211045], "title":"Stasiun Karangsari"},
			{"loc":[-7.3884039,109.1859918], "title":"Stasiun Karanggandul"},
			{"loc":[-7.4192276,109.2219922], "title":"Stasiun Purwokerto"},
			{"loc":[-7.485911,109.2134084], "title":"Stasiun Notog"},
			{"loc":[-7.5324943,109.2040465], "title":"Stasiun Kebasen"},
			{"loc":[-7.5699609,109.2199129], "title":"Stasiun Randegan"},
			{"loc":[-7.6302529,109.2535622], "title":"Stasiun Kroya"},
			{"loc":[-7.6214037,109.3150298], "title":"Stasiun Kemranjen"},
			{"loc":[-7.6150948,109.3611648], "title":"Stasiun Sumpiuh"},
			{"loc":[-7.6130186,109.4086212], "title":"Stasiun Tambak"},
			{"loc":[-7.615265,109.4469526], "title":"Stasiun Ijo"},
			{"loc":[-7.6105735,109.5078155], "title":"Stasiun Gombong"},
			{"loc":[-7.6331663,109.5734925], "title":"Stasiun Karanganyar"},
			{"loc":[-7.6552086,109.6030665], "title":"Stasiun Sruweng"},
			{"loc":[-7.6791334,109.6395574], "title":"Stasiun Soka"},
			{"loc":[-7.6817128,109.6621947], "title":"Stasiun Kebumen"},
			{"loc":[-7.6973976,109.7013199], "title":"Stasiun Wonosari"},
			{"loc":[-7.7168199,109.7342951], "title":"Stasiun Kutowinangun"},
			{"loc":[-7.7243091,109.7981071], "title":"Stasiun Prembun"},
			{"loc":[-7.7243242,109.8585004], "title":"Stasiun Butuh"},
			{"loc":[-7.7258869,109.9071841], "title":"Stasiun Kutoarjo"},
			{"loc":[-7.8027515,110.0012486], "title":"Stasiun Jenar"},
			{"loc":[-7.8619388,110.0404738], "title":"Stasiun Wojo"},
			{"loc":[-7.8595563,110.1579272], "title":"Stasiun Wates"},
			{"loc":[-7.8332315,110.2201313], "title":"Stasiun Sentolo"},
			{"loc":[-7.7960004,110.2842375], "title":"Stasiun Rewulu"},
			{"loc":[-7.790877,110.3253908], "title":"Stasiun Patukan"},
			{"loc":[-7.7892755,110.3638738], "title":"Stasiun Yogyakarta"},
			{"loc":[-7.7902301,110.3754493], "title":"Stasiun Lempuyangan"}
			];
			
			var markersLayer = new L.LayerGroup();	//layer contain searched elements
	
			map.addLayer(markersLayer);

			var controlSearch = new L.Control.Search({
				position:'topright',		
				layer: markersLayer,
				textPlaceholder: 'Stasiun...',
				textErr: 'Hanya Menampilkan Stasiun yang DIlewati <br> Kereta Api Rute Jakarta - Yogyakarta',
				initial: false,
				zoom: 18,
				marker: false,
				hideMarkerOnCollapse: true
			});

			map.addControl( controlSearch );
			
			var bigIcon = L.icon({
				iconUrl: 'images/st2.png',

				iconSize:     [35, 35],
				iconAnchor:   [10, 30],
				popupAnchor:  [7, -28]
			});
			
			
			////////////populate map with markers from sample data
			for(i in data) {
				var title = data[i].title,	//value searched
					loc = data[i].loc,		//position found
					marker = new L.Marker(new L.latLng(loc), {title: title, icon: bigIcon});//se property searched
				marker.bindPopup(title);
				markersLayer.addLayer(marker);
			}
			
			
		var hg = L.control.heightgraph({
             width: 800,
             height: 280,
             margins: {
                 top: 10,
                 right: 30,
                 bottom: 55,
                 left: 50
             },
             translation: {
                 distance: "Jarak (dari LPN)",
				 elevation: "Elevasi",
				 segment_length: "Panjang Segmen (Petak)",
				 type: "Petak",
				 legend: "Legenda"
             },
             expandCallback: function(expand){console.log("Expand: "+expand)},
             position: "topright",
			 expand: false,
             mappings: colorMappings
         });

         hg.addTo(map);

         hg.addData(geojson);	
		
		var exteriorStyle = {
		"color": "#ffffff",
		"weight": 0,
		"fillOpacity": .75
		};
		
		var cb = L.geoJson(geojson, {style: exteriorStyle}).addTo(map);
		
		var cb1 = L.geoJson(jalur,{
		onEachFeature: function (feature, layer) {
			layer.bindPopup(
			feature.properties.Jarak
			);
		}
	}).addTo(map);
		
		var baseMaps = {
		"OpenStreetMap" : osm,
		"Citra Esri": esri,
		"Citra Google" : google,
		"Google Maps" : gmaps
		};
    
		L.control.layers(baseMaps).addTo(map);
		
	
    // Adds the background layer to the map

    // Colors for AwesomeMarkers
   var lokoIcon = L.icon({
                            iconUrl: 'images/loko1.png',
                            iconSize: [40, 40], // size of the icon
                            shadowSize: [0, 0], // size of the shadow
                            iconAnchor: [17, 20], // point of the icon which will correspond to marker's location
                            shadowAnchor: [0, 0], // the same for the shadow
                            popupAnchor: [0, -20] // point from which the popup should open relative to the iconAnchor
                        });
    
    // =====================================================
    // =============== Playback ============================
    // =====================================================

    // Playback options
    var playbackOptions = {        
        // layer and marker options
        layer: {
            pointToLayer : function(featureData, latlng){
                var result = {};
                
                if (featureData && featureData.properties && featureData.properties.path_options){
                    result = featureData.properties.path_options;
                }
                
                if (!result.radius){
                    result.radius = 5;
                }
                
                return new L.CircleMarker(latlng, result);
            }
        },
        
         marker: function (featureData) {
                    return {
                        icon: lokoIcon,
                        getPopup: function (feature) {
                            return feature.properties.title;
                        }
                    };
                },
		
		
		popups: true,
		fadeMarkersWhenStale: true,
		tracksLayer : false
    };
    
    // Initialize playback
    var playback = new L.Playback(map, demoTracks, null, playbackOptions);
    
    // Initialize custom control
    var control = new L.Playback.Control(playback);
    control.addTo(map);
    
    // Add data
    playback.addData(ka85);
       
});
