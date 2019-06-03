const cookiesBanner = () => {
    let cookies = sessionStorage.getItem('user')
    if (cookies != 'cookiesAccepted') {
        document.getElementById("bandeau-cookies").style.display= "inline"
    } else {
        sessionStorage.setItem('user', 'cookiesAccepted');
    }
}

cookiesBanner();

const infoRemove = () => {
    sessionStorage.setItem('user', 'cookiesAccepted');
    document.getElementById("bandeau-cookies").style.display = "none"
}

//Chargement de la data
function initData () {
    console.log("data function")
    var myRequestData = new XMLHttpRequest();
    myRequestData.open('GET','https://maps.gb-group.co/data/dealers.geojson');
  
    myRequestData.onreadystatechange = function () {
        var data = JSON.parse(myRequestData.responseText);
  
        console.log(data)
      }
    myRequestData.send(); 
  }
  
  initData();
