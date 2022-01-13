// remove mini tags on click x
function remove() {
  this.parentNode.remove();
}

const buttonTag = document.querySelectorAll(".close-tag");
console.log(buttonTag);
console.log(buttonTag);
console.log(buttonTag);
console.log(buttonTag);
for (var i = 0; i < buttonTag.length; i++) {
  buttonTag[i].addEventListener("click", remove, false);
}
