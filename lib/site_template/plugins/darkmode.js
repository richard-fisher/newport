// Place an empty div with the id darkmode where you want to toggle to appear in your html
// ie. <div id="darkmode"></div>

(function () {

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

  document.getElementById("darkmode-checkbox").onchange = function () {
    if (document.getElementById('darkmode-checkbox').checked) {
      showDark();
    } else {
      showLight();
    }
  };

})();

var css = ' .switch {position: relative;display: inline-block;width: 30px;height: 17px;}.switch input {opacity: 0;width: 0;height: 0;}.slider {position: absolute;cursor: pointer;top: 0;left: 0;right: 0;bottom: 0;background-color: #ccc;-webkit-transition: .4s;transition: .4s;}.slider:before {position: absolute;content: "";height: 13px;width: 13px;left: 2px;bottom: 2px;background-color: white;-webkit-transition: .4s;transition: .4s;color: #000;}input:checked + .slider {background-color: #333;}input:focus + .slider {box-shadow: 0 0 1px #333;}input:checked + .slider:before {-webkit-transform: translateX(13px);-ms-transform: translateX(13px);transform: translateX(13px);}.slider.round {border-radius: 17px;}.slider.round:before {border-radius: 50%;}';
var head = document.getElementsByTagName('head')[0];
var s = document.createElement('style');
s.setAttribute('type', 'text/css');
s.appendChild(document.createTextNode(css));
head.appendChild(s);