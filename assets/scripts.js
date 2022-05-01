function toggleNav() {
      var x = document.getElementById("nav");
      if (x.className === "nav") {
        x.className += " responsive";
      } else {
        x.className = "nav";
      }
    }

function toggleHomeNav() {
      var x = document.getElementById("home-nav");
      if (x.className === "home-nav") {
        x.className += " responsive";
      } else {
        x.className = "home-nav";
      }
    }
