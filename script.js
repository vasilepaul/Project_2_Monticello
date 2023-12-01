
function initMap() {
    let options = {
        center: {lat: 47.039800, lng: 28.806740},
        zoom: 15
    }
    let map = new google.maps.Map(document.getElementById('map'), options);
}


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