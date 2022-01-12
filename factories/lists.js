function listsDOM(item) {
  const wrapper = document.createElement("li");
  wrapper.classList.add("search-item");
  wrapper.setAttribute("data-value", `${item.toLowerCase()}`);
  wrapper.innerText = item.charAt(0).toUpperCase() + item.slice(1);

  return wrapper;
}
