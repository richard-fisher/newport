// Place an empty div with the id darkmode where you want to toggle to appear in your html
// ie. <div id="darkmode"></div>

(function() {

  function showDark() {
    document.documentElement.setAttribute("data-theme", "dark");
    Cookies.set('appearance', 'dark');
  }
  
  function showLight() {
    document.documentElement.setAttribute("data-theme", "light");
    Cookies.set('appearance', 'light');
  }

  var appearance = Cookies.get('appearance')
  document.getElementById("darkmode").innerHTML = '<span style="color: orangered">&#9788;</span>/<span style="color: #888">&#9789;</span><label class="switch"><input type="checkbox" name="darkmode" id="darkmode-checkbox"/><span class="slider round"></span></label>';

  if (appearance == 'dark') {
    document.getElementById('darkmode-checkbox').checked = true;
    showDark();
  } else if (appearance == 'light') {
    document.getElementById('darkmode-checkbox').checked = false;
    showLight();
  }

  document.getElementById("darkmode-checkbox").onchange = function(){
    if (document.getElementById('darkmode-checkbox').checked) {
      showDark();
    } else {
      showLight();
    }
  };

})();
