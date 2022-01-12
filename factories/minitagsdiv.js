function minitagsDOM(value, color) {
  const wrapper = document.createElement("button");
  wrapper.setAttribute("type", "button");
  wrapper.classList.add("btn", `btn-${color}`, "text-white", "btn-sm");

  //   wrapper.classList.add("btn-sm");
  wrapper.classList.add("px-3", "me-1", "my-1");
  wrapper.classList.add("tag-button");

  let miniTagCard = "";
  miniTagCard += `
  
  <span class="mx-2 d-inline">${value}</span>
  <i class="far fa-times-circle fa-lg close-tag"></i>

    `;
  wrapper.innerHTML = miniTagCard;
  return wrapper;
}
