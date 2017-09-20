function initMap() {
  var myLatLng = {
    lat: 43.32069749, 
    lng: 21.9355841
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'NAIS PRINT design'
  });
}