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

			map.attributionControl.setPrefix('');

			var data = [
			{"loc":[-6.1766309,106.8304899], "title":"Stasiun Gambir", "info":"<a href='https://www.google.com/maps/place/-6.1766309,106.8304899'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Gambir</a> <br><img src='gambar/Gambir.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.1747185,106.844333], "title":"Stasiun Pasar Senen", "info":"<a href='https://www.google.com/maps/place/-6.1747185,106.844333'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Pasar Senen</a> <br><img src='gambar/Senen.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.209878,106.8502174], "title":"Stasiun Manggarai", "info":"<a href='https://www.google.com/maps/place/-6.209878,106.8502174'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Manggarai</a> <br><img src='gambar/Manggarai.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.2152273,106.8703446], "title":"Stasiun Jatinegara", "info":"<a href='https://www.google.com/maps/place/-6.2152273,106.8703446'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Jatinegara</a> <br><img src='gambar/Jatinegara.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.2193255,106.9523325], "title":"Stasiun Cakung", "info":"<a href='https://www.google.com/maps/place/-6.2193255,106.9523325'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cakung</a> <br><img src='gambar/Cakung.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.2361393,106.9994797], "title":"Stasiun Bekasi", "info":"<a href='https://www.google.com/maps/place/-6.2361393,106.9994797'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Bekasi</a> <br><img src='gambar/Bekasi.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.2587068,107.0558152], "title":"Stasiun Tambun", "info":"<a href='https://www.google.com/maps/place/-6.2587068,107.0558152'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Tambun</a> <br><img src='gambar/Tambun.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.255403,107.1451267], "title":"Stasiun Cikarang", "info":"<a href='https://www.google.com/maps/place/-6.255403,107.1451267'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cikarang</a> <br><img src='gambar/Cikarang.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.2705733,107.1798401], "title":"Stasiun Lemahabang", "info":"<a href='https://www.google.com/maps/place/-6.2705733,107.1798401'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Lemahabang</a> <br><img src='gambar/Lemahabang.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.2700584,107.2612263], "title":"Stasiun Kedunggedeh", "info":"<a href='https://www.google.com/maps/place/-6.2700584,107.2612263'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kedunggedeh</a> <br><img src='gambar/Kedunggedeh.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.3052285,107.3001498], "title":"Stasiun Karawang", "info":"<a href='https://www.google.com/maps/place/-6.3052285,107.3001498'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Karawang</a> <br><img src='gambar/Karawang.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.349927,107.3453097], "title":"Stasiun Klari", "info":"<a href='https://www.google.com/maps/place/-6.349927,107.3453097'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Klari</a> <br><img src='gambar/Klari.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.369167,107.3746655], "title":"Stasiun Kosambi", "info":"<a href='https://www.google.com/maps/place/-6.369167,107.3746655'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kosambi</a> <br><img src='gambar/Kosambi.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.393221,107.4332273], "title":"Stasiun Dawuan", "info":"<a href='https://www.google.com/maps/place/-6.393221,107.4332273'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Dawuan</a> <br><img src='gambar/Dawuan.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4061293,107.4589963], "title":"Stasiun Cikampek", "info":"<a href='https://www.google.com/maps/place/-6.4061293,107.4589963'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cikampek</a> <br><img src='gambar/Cikampek.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4083877,107.5406358], "title":"Stasiun Tanjungrasa", "info":"<a href='https://www.google.com/maps/place/-6.4083877,107.5406358'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Tanjungrasa</a> <br><img src='gambar/Tanjungrasa.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4092452,107.584019], "title":"Stasiun Pabuaran", "info":"<a href='https://www.google.com/maps/place/-6.4092452,107.584019'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Pabuaran</a> <br><img src='gambar/Pabuaran.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4181861,107.6344593], "title":"Stasiun Pringkasap", "info":"<a href='https://www.google.com/maps/place/-6.4181861,107.6344593'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Pringkasap</a> <br><img src='gambar/Pringkasap.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4264075,107.6885019], "title":"Stasiun Pasirbungur", "info":"<a href='https://www.google.com/maps/place/-6.4264075,107.6885019'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Pasirbungur</a> <br><img src='gambar/Pasirbungur.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4355589,107.7396058], "title":"Stasiun Cikaum", "info":"<a href='https://www.google.com/maps/place/-6.4355589,107.7396058'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cikaum</a> <br><img src='gambar/Cikaum.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4537701,107.8171019], "title":"Stasiun Pegadenbaru", "info":"<a href='https://www.google.com/maps/place/-6.4537701,107.8171019'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Pegadenbaru</a> <br><img src='gambar/Pegadenbaru.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4554184,107.8830859], "title":"Stasiun Cipunegara", "info":"<a href='https://www.google.com/maps/place/-6.4554184,107.8830859'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cipunegara</a> <br><img src='gambar/Cipunegara.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4586318,107.9409389], "title":"Stasiun Haurgeulis", "info":"<a href='https://www.google.com/maps/place/-6.4586318,107.9409389'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Haurgeulis</a> <br><img src='gambar/Haurgeulis.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4639811,108.0352762], "title":"Stasiun Cilegeh", "info":"<a href='https://www.google.com/maps/place/-6.4639811,108.0352762'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cilegeh</a> <br><img src='gambar/Cilegeh.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4677987,108.1067379], "title":"Stasiun Kadokangabus", "info":"<a href='https://www.google.com/maps/place/-6.4677987,108.1067379'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kadokangabus</a> <br><img src='gambar/Kadokangabus.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.46987,108.1609946], "title":"Stasiun Terisi", "info":"<a href='https://www.google.com/maps/place/-6.46987,108.1609946'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Terisi</a> <br><img src='gambar/Terisi.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4647363,108.2346823], "title":"Stasiun Telagasari", "info":"<a href='https://www.google.com/maps/place/-6.4647363,108.2346823'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Telagasari</a> <br><img src='gambar/Telagasari.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4728392,108.3063283], "title":"Stasiun Jatibarang", "info":"<a href='https://www.google.com/maps/place/-6.4728392,108.3063283'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Jatibarang</a> <br><img src='gambar/Jatibarang.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.5283802,108.3532988], "title":"Stasiun Kertasemaya", "info":"<a href='https://www.google.com/maps/place/-6.5283802,108.3532988'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kertasemaya</a> <br><img src='gambar/Kertasemaya.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.6446634,108.4145435], "title":"Stasiun Arjawinangun", "info":"<a href='https://www.google.com/maps/place/-6.6446634,108.4145435'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Arjawinangun</a> <br><img src='gambar/Arjawinangun.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.6630732,108.4599957], "title":"Stasiun Bangoduwa", "info":"<a href='https://www.google.com/maps/place/-6.6630732,108.4599957'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Bangoduwa</a> <br><img src='gambar/Bangoduwa.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.679535,108.5006765], "title":"Stasiun Cangkring", "info":"<a href='https://www.google.com/maps/place/-6.679535,108.5006765'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cangkring</a> <br><img src='gambar/Cangkring.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.7052739,108.55555], "title":"Stasiun Cirebon", "info":"<a href='https://www.google.com/maps/place/-6.7052739,108.55555'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cirebon</a> <br><img src='gambar/Cirebon.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.7193421,108.5588038], "title":"Stasiun Cirebon Prujakan", "info":"<a href='https://www.google.com/maps/place/-6.7193421,108.5588038'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cirebon Prujakan</a> <br><img src='gambar/Prujakan.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.7777247,108.5930935], "title":"Stasiun Luwung", "info":"<a href='https://www.google.com/maps/place/-6.7777247,108.5930935'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Luwung</a> <br><img src='gambar/Luwung.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.832756,108.6259513], "title":"Stasiun Sindanglaut", "info":"<a href='https://www.google.com/maps/place/-6.832756,108.6259513'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Sindanglaut</a> <br><img src='gambar/Sindanglaut.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.9029226,108.7439859], "title":"Stasiun Ciledug", "info":"<a href='https://www.google.com/maps/place/-6.9029226,108.7439859'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Ciledug</a> <br><img src='gambar/Ciledug.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.9382946,108.8843762], "title":"Stasiun Ketanggungan", "info":"<a href='https://www.google.com/maps/place/-6.9382946,108.8843762'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Ketanggungan</a> <br><img src='gambar/Ketanggungan.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.9905456,108.9486991], "title":"Stasiun Larangan", "info":"<a href='https://www.google.com/maps/place/-6.9905456,108.9486991'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Larangan</a> <br><img src='gambar/Larangan.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.0245279,108.9888423], "title":"Stasiun Songgom", "info":"<a href='https://www.google.com/maps/place/-7.0245279,108.9888423'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Songgom</a> <br><img src='gambar/Songgom.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.1228194,108.9826878], "title":"Stasiun Prupuk", "info":"<a href='https://www.google.com/maps/place/-7.1228194,108.9826878'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Prupuk</a> <br><img src='gambar/Prupuk.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.1849349,109.0124701], "title":"Stasiun Linggapura", "info":"<a href='https://www.google.com/maps/place/-7.1849349,109.0124701'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Linggapura</a> <br><img src='gambar/Linggapura.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.2374021,109.0098136], "title":"Stasiun Bumiayu", "info":"<a href='https://www.google.com/maps/place/-7.2374021,109.0098136'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Bumiayu</a> <br><img src='gambar/Bumiayu.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.2855943,109.0297816], "title":"Stasiun Kretek", "info":"<a href='https://www.google.com/maps/place/-7.2855943,109.0297816'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kretek</a> <br><img src='gambar/Kretek.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.3281891,109.0576696], "title":"Stasiun Patuguran", "info":"<a href='https://www.google.com/maps/place/-7.3281891,109.0576696'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Patuguran</a> <br><img src='gambar/Patuguran.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.3824967,109.1211045], "title":"Stasiun Karangsari", "info":"<a href='https://www.google.com/maps/place/-7.3824967,109.1211045'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Karangsari</a> <br><img src='gambar/Karangsari.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.3884039,109.1859918], "title":"Stasiun Karanggandul", "info":"<a href='https://www.google.com/maps/place/-7.3884039,109.1859918'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Karanggandul</a> <br><img src='gambar/Karanggandul.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.4192276,109.2219922], "title":"Stasiun Purwokerto", "info":"<a href='https://www.google.com/maps/place/-7.4192276,109.2219922'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Purwokerto</a> <br><img src='gambar/Purwokerto.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.485911,109.2134084], "title":"Stasiun Notog", "info":"<a href='https://www.google.com/maps/place/-7.485911,109.2134084'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Notog</a> <br><img src='gambar/Notog.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.5324943,109.2040465], "title":"Stasiun Kebasen", "info":"<a href='https://www.google.com/maps/place/-7.5324943,109.2040465'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kebasen</a> <br><img src='gambar/Kebasen.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.5699609,109.2199129], "title":"Stasiun Randegan", "info":"<a href='https://www.google.com/maps/place/-7.5699609,109.2199129'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Randegan</a> <br><img src='gambar/Randegan.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6302529,109.2535622], "title":"Stasiun Kroya", "info":"<a href='https://www.google.com/maps/place/-7.6302529,109.2535622'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kroya</a> <br><img src='gambar/Kroya.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6214037,109.3150298], "title":"Stasiun Kemranjen", "info":"<a href='https://www.google.com/maps/place/-7.6214037,109.3150298'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kemranjen</a> <br><img src='gambar/Kemranjen.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6150948,109.3611648], "title":"Stasiun Sumpiuh", "info":"<a href='https://www.google.com/maps/place/-7.6150948,109.3611648'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Sumpiuh</a> <br><img src='gambar/Sumpiuh.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6130186,109.4086212], "title":"Stasiun Tambak", "info":"<a href='https://www.google.com/maps/place/-7.6130186,109.4086212'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Tambak</a> <br><img src='gambar/Tambak.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.615265,109.4469526], "title":"Stasiun Ijo", "info":"<a href='https://www.google.com/maps/place/-7.615265,109.4469526'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Ijo</a> <br><img src='gambar/Ijo.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6105735,109.5078155], "title":"Stasiun Gombong", "info":"<a href='https://www.google.com/maps/place/-7.6105735,109.5078155'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Gombong</a> <br><img src='gambar/Gombong.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6331663,109.5734925], "title":"Stasiun Karanganyar", "info":"<a href='https://www.google.com/maps/place/-7.6331663,109.5734925'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Karanganyar</a> <br><img src='gambar/Karanganyar.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6552086,109.6030665], "title":"Stasiun Sruweng", "info":"<a href='https://www.google.com/maps/place/-7.6552086,109.6030665'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Sruweng</a> <br><img src='gambar/Sruweng.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6791334,109.6395574], "title":"Stasiun Soka", "info":"<a href='https://www.google.com/maps/place/-7.6791334,109.6395574'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Soka</a> <br><img src='gambar/Soka.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6817128,109.6621947], "title":"Stasiun Kebumen", "info":"<a href='https://www.google.com/maps/place/-7.6817128,109.6621947'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kebumen</a> <br><img src='gambar/Kebumen.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6973976,109.7013199], "title":"Stasiun Wonosari", "info":"<a href='https://www.google.com/maps/place/-7.6973976,109.7013199'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Wonosari</a> <br><img src='gambar/Wonosari.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7168199,109.7342951], "title":"Stasiun Kutowinangun", "info":"<a href='https://www.google.com/maps/place/-7.7168199,109.7342951'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kutowinangun</a> <br><img src='gambar/Kutowinangun.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7243091,109.7981071], "title":"Stasiun Prembun", "info":"<a href='https://www.google.com/maps/place/-7.7243091,109.7981071'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Prembun</a> <br><img src='gambar/Prembun.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7243242,109.8585004], "title":"Stasiun Butuh", "info":"<a href='https://www.google.com/maps/place/-7.7243242,109.8585004'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Butuh</a> <br><img src='gambar/Butuh.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7258869,109.9071841], "title":"Stasiun Kutoarjo", "info":"<a href='https://www.google.com/maps/place/-7.7258869,109.9071841'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kutoarjo</a> <br><img src='gambar/Kutoarjo.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.8027515,110.0012486], "title":"Stasiun Jenar", "info":"<a href='https://www.google.com/maps/place/-7.8027515,110.0012486'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Jenar</a> <br><img src='gambar/Jenar.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.8619388,110.0404738], "title":"Stasiun Wojo", "info":"<a href='https://www.google.com/maps/place/-7.8619388,110.0404738'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Wojo</a> <br><img src='gambar/Wojo.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.8595563,110.1579272], "title":"Stasiun Wates", "info":"<a href='https://www.google.com/maps/place/-7.8595563,110.1579272'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Wates</a> <br><img src='gambar/Wates.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.8332315,110.2201313], "title":"Stasiun Sentolo", "info":"<a href='https://www.google.com/maps/place/-7.8332315,110.2201313'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Sentolo</a> <br><img src='gambar/Sentolo.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7960004,110.2842375], "title":"Stasiun Rewulu", "info":"<a href='https://www.google.com/maps/place/-7.7960004,110.2842375'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Rewulu</a> <br><img src='gambar/Rewulu.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.790877,110.3253908], "title":"Stasiun Patukan", "info":"<a href='https://www.google.com/maps/place/-7.790877,110.3253908'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Patukan</a> <br><img src='gambar/Patukan.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7892755,110.3638738], "title":"Stasiun Yogyakarta", "info":"<a href='https://www.google.com/maps/place/-7.7892755,110.3638738'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Yogyakarta</a> <br><img src='gambar/Yogyakarta.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7902301,110.3754493], "title":"Stasiun Lempuyangan", "info":"<a href='https://www.google.com/maps/place/-7.7902301,110.3754493'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Lempuyangan</a> <br><img src='gambar/Lempuyangan.jpg' width='305' height='55' /></a>"}
			];
			
			var markersLayer = new L.LayerGroup();	//layer contain searched elements
	
			map.addLayer(markersLayer);

			var controlSearch = new L.Control.Search({
				position:'topright',		
				layer: markersLayer,
				textPlaceholder: 'Stasiun...',
				textErr: 'Hanya Menampilkan Stasiun yang DIlewati <br> Kereta Api Rute Jakarta - Yogyakarta',
				initial: false,
				zoom: 19,
				marker: false
			});
			controlSearch.on('search:locationfound', function(e) {
				e.layer.openPopup();
				});
			map.addControl( controlSearch );
			
			var bigIcon = L.icon({
				iconUrl: 'images/st2.png',

				iconSize:     [15, 15],
				iconAnchor:   [4, 13],
				popupAnchor:  [3, -12]
			});
			
			
			////////////populate map with markers from sample data
			for(i in data) {
				var title = data[i].title,	//value searched
					loc = data[i].loc,		//position found
					info = data[i].info,
					marker = new L.Marker(new L.latLng(loc), {title: title, icon: bigIcon});//se property searched
				marker.bindPopup(info);
				markersLayer.addLayer(marker);
			}
			
			
		var hg = L.control.heightgraph({
             width: 500,
             height: 195,
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
		
		var markers = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < addressPoints.length; i++) {
			var a = addressPoints[i];
			var title = a[2];
			var marker = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker.bindPopup(title);
			markers.addLayer(marker);
		}
		
		var cb2 = {
		"Komplain" : markers,
		"Rel KA" : cb1
		};
		
		var baseMaps = {
		"OpenStreetMap" : osm,
		"Citra Esri": esri,
		"Citra Google" : google,
		"Google Maps" : gmaps
		};
    
		L.control.layers(baseMaps, cb2).addTo(map);
		
	
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
