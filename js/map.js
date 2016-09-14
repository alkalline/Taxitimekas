// TODO: Create a map variable
var map;
// TODO: Complete the following function to initialize the map
function initMap() {
  map_style = [
    {
      "featureType":"administrative",
      "elementType":"labels.text.fill",
      "stylers":[
        {"color":"#f5e050"}]
    },{
      "featureType":"administrative",
      "elementType":"labels.text.stroke",
      "stylers":[
        {"color":"#444444"}]
    },{
      "featureType":"landscape",
      "elementType":"all",
      "stylers":[
        {"hue":"#f5e050"}]
    },{
      "featureType":"poi",
      "elementType":"all",
      "stylers":[
        {"visibility":"off"}]
    },{
      "featureType":"road",
      "elementType":"all",
      "stylers":[
        {"saturation":-100},
        {"lightness":45}]
    },{
      "featureType":"road.highway",
      "elementType":"all",
      "stylers":[
        {"visibility":"simplified"}]
    },{
      "featureType":"road.arterial",
      "elementType":"labels.icon",
      "stylers":[
        {"visibility":"off"}]
    },{
      "featureType":"transit",
      "elementType":"all",
      "stylers":[
        {"visibility":"off"}]
    },{
      "featureType":"water",
      "elementType":"geometry",
      "stylers":[
        {"color":"#46bcec"},
        {"visibility":"on"}]
    }]
  // TODO: use a constructor to create a new map JS object. You can use the coordinates
  // we used, 40.7413549, -73.99802439999996 or your own!
  map=new google.maps.Map(document.getElementById('map'), {
    center: {lat:40.5169248, lng:21.2544022},
    zoom:13,
    styles: map_style
  });
  var piatses = { lat:40.521769, lng:21.261714 };
  var marker_image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  var marker = new google.maps.Marker({
    position: piatses,
    map:map,
    title:'1η/2η πιάτσα',
    //label: 'A',
    icon: marker_image,
    animation: google.maps.Animation.DROP //BOUNCE
  });
  var infownd = new google.maps.InfoWindow({
    content: marker.title
  });
  marker.addListener('click', function(){
    infownd.open(map,marker);
  });
}
