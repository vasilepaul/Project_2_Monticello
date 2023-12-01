
const menuItems = document.querySelectorAll('.menu_list li');
menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = item.textContent.toLowerCase(); 
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function initMap() {
    let options = {
        center: { lat: 47.039800, lng: 28.806740 },
        zoom: 15
    };
    let map = new google.maps.Map(document.getElementById('map'), options);


    let marker = new google.maps.Marker({
        position: { lat: 47.039800, lng: 28.806740 },
        map: map,
        title: 'Monticello'
    });

    let contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h2 id="firstHeading" class="firstHeading">Contact</h2>' +
        '<div id="bodyContent">' +
        '<p>Calea Iesilor 89</p>' +
        '<input type="email" placeholder="Email">' +
        '<button>Send</button>' +
        '</div>' +
        '</div>';

    let infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}
