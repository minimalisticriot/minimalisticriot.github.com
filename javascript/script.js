/* hide dotted outline on the clicked anchor by unfocusing it
 * http://haslayout.net/css-tuts/Removing-Dotted-Border-on-Clicked-Links */
function unfocusClick(id) {
  if (id == null) return;
  var links = document.getElementById(id).getElementsByTagName('a');
  for ( var i = 0; i < links.length; i++ ) {
    links[i].onmousedown = function () {
      this.blur();
      return false;
    }
    links[i].onclick = function() {
      this.blur();
    }
  }
}
