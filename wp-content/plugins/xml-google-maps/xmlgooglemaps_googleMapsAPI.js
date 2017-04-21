function BannerButtonControl() {
}

// Zum Erstellen einer "Unterklasse" des GControl wird das Prototypobjekt auf eine Instanz des GControl-Objekts festgelegt
BannerButtonControl.prototype = new GControl();

// Erstellt ein DIV für jede der Schaltflächen und platziert sie in einem Container
// DIV, das als Bedienelement zurückgegeben wird. Das Bedienelement wird zum Kartencontainer hinzugefügt und gibt das Element für die Kartenklasse zurück, damit es ordnungsgemäß positioniert wird.
BannerButtonControl.prototype.initialize = function(map) {
  var container = document.createElement("div");
  var atag = document.createElement("a");
  atag.href = "http://www.matusz.ch/blog/projekte/xml-google-maps-wordpress-plugin/";
  atag.target = "_blank";
  var imgtag = document.createElement("img");
  imgtag.src= "images/pluginbanner_left.png";
  imgtag.alt = "Visit the plugin page!";
  imgtag.title = imgtag.alt;
  this.setButtonStyle_(imgtag);
  container.appendChild(atag);
  atag.appendChild(imgtag);
  map.getContainer().appendChild(container);
  return container;
}

// Standardmäßig wird das Bedienelement in der oberen linken Ecke der Karte mit 7 Pixeln Abstand zum Kartenrand angezeigt.
BannerButtonControl.prototype.getDefaultPosition = function() {
  return new GControlPosition(G_ANCHOR_BOTTOM_LEFT, new GSize(0, 38));
}

// Legt das korrekte CSS für das angegebene Schaltflächenelement fest.
BannerButtonControl.prototype.setButtonStyle_ = function(button) {
  button.style.border = "0px";
}

function FullScreenButtonControl() {
}

// Zum Erstellen einer "Unterklasse" des GControl wird das Prototypobjekt auf eine Instanz des GControl-Objekts festgelegt
FullScreenButtonControl.prototype = new GControl();

// Erstellt ein DIV für jede der Schaltflächen und platziert sie in einem Container
// DIV, das als Bedienelement zurückgegeben wird. Das Bedienelement wird zum Kartencontainer hinzugefügt und gibt das Element für die Kartenklasse zurück, damit es ordnungsgemäß positioniert wird.
FullScreenButtonControl.prototype.initialize = function(map) {
  var container = document.createElement("div");
  var atag = document.createElement("a");
  atag.href = document.URL + "&fullscreen=1";
  atag.target = "_blank";
  var imgtag = document.createElement("img");
  imgtag.src = "icons/fullscreen.png";
  imgtag.alt = "Fullscreen";
  imgtag.title = imgtag.alt;
  this.setButtonStyle_(imgtag);
  container.appendChild(atag);
  atag.appendChild(imgtag);
  map.getContainer().appendChild(container);
  return container;
}

// Standardmäßig wird das Bedienelement in der oberen linken Ecke der Karte mit 7 Pixeln Abstand zum Kartenrand angezeigt.
FullScreenButtonControl.prototype.getDefaultPosition = function() {
  return new GControlPosition(G_ANCHOR_BOTTOM_LEFT, new GSize(2, 196));
}

// Legt das korrekte CSS für das angegebene Schaltflächenelement fest.
FullScreenButtonControl.prototype.setButtonStyle_ = function(button) {
  button.style.border = "0px";
}