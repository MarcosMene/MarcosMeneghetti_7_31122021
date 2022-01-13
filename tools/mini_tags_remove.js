// remove mini tags on click x
function remove() {
  this.parentNode.remove();
}

let buttonTag = document.querySelectorAll(".close-tag");

for (var i = 0; i < buttonTag.length; i++) {
  buttonTag[i].addEventListener("click", remove, false);
}
