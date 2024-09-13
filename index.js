

function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("signup-login");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");

    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tab-highlight", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " tab-highlight";
  }


  