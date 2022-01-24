function removeMiniTag() {
  const removeMiniTag = document.querySelectorAll(".tag-button");
  if (removeMiniTag.length) {
    for (let j = 0; j < removeMiniTag.length; j++)
      removeMiniTag[j].addEventListener("click", () => {
        removeMiniTag[j].remove();
      });
  }
}
