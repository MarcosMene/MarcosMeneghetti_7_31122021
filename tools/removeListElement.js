function removeListElements(element) {
  const listItemsComplete = document.querySelectorAll(
    `.search-item-${element}`
  );
  if (listItemsComplete.length) {
    for (let j = 0; j < listItemsComplete.length; j++)
      listItemsComplete[j].addEventListener("click", () => {
        listItemsComplete[j].remove();
      });
  }
  console.log(listItemsComplete);
}
