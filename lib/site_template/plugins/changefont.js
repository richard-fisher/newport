function setFontFromCookies() {
  var fontSize = Cookies.get('font-size');
  if (fontSize == undefined) {
    var fontSize = 0.9;
  }

  var fontFamily = Cookies.get('font-family');
  if (fontFamily == undefined) {
    var fontFamily = 'monospace';
  }

  if (fontFamily == 'monospace') {
    var lineHeight = Number(fontSize) + 0.4;
  } else {
    var lineHeight = Number(fontSize) + 1;
  }

  console.log(fontFamily);
  console.log(fontSize + 'rem');
  console.log(lineHeight + 'rem');

  let body = document.getElementsByClassName("posts")[0];
  body.style.fontSize = fontSize + 'rem';
  body.style.fontFamily = fontFamily;
  body.style.lineHeight = lineHeight + 'rem';
}

function showDropDown() {
  document.getElementById("dropdown").classList.toggle("show");
}

function setFontSize(size) {
  switch (size) {
    case 'small':
      Cookies.set('font-size', 0.8);
      setFontFromCookies();
      break;
    case 'medium':
      Cookies.set('font-size', 0.9);
      setFontFromCookies();
      break;
    case 'large':
      Cookies.set('font-size', 1.0);
      setFontFromCookies();
      break;
  }
}

function setFont(font) {
  switch (font) {
    case 'mono':
      Cookies.set('font-family', 'monospace');
      setFontFromCookies();
      break;
    case 'sans':
      Cookies.set('font-family', 'sans-serif');
      setFontFromCookies();
      break;
  }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

setFontFromCookies();
document.getElementById("changefont").innerHTML = '<div class="dropdown"><button onclick="showDropDown()" class="dropbtn">&#9776;</button><div id="dropdown" class="dropdown-content"><span>Font Size<br /><button onclick="setFontSize(\x27small\x27)" class="font-size-small">A</button><button onclick="setFontSize(\x27medium\x27)" class="font-size-medium">A</button><button onclick="setFontSize(\x27large\x27)" class="font-size-large">A</button></span><span>Font<br /><button onclick="setFont(\x27mono\x27)" class="font-mono">mono</button><button onclick="setFont(\x27sans\x27)" class="font-sans">sans-serif</button></span></div></div>';
var css = '.font-size-small{font-size:.9rem;border:none;background:#ddd;cursor:pointer}.font-size-medium{font-size:1rem;border:none;background:#ddd;cursor:pointer}.font-size-large{font-size:1.1rem;border:none;background:#ddd;cursor:pointer}.font-mono{font-family:monospace;border:none;cursor:pointer}.font-sans{font-family:sans-serif;border:none;cursor:pointer}.dropbtn{padding:0;font-size:16px;border:none;cursor:pointer;background:0 0;color:var(--text-color)}.dropdown{position:relative;display:inline-block}.dropdown-content{text-align:center;display:none;position:absolute;background-color:#eee;min-width:180px;z-index:1;margin-left:-160px}.dropdown-content span{color:#000;padding:12px 16px;text-decoration:none;display:block}.show{display:block}';
var head = document.getElementsByTagName('head')[0];
var s = document.createElement('style');
s.setAttribute('type', 'text/css');
s.appendChild(document.createTextNode(css));
head.appendChild(s);