function minitagsDOM(value, color, type) {
  const wrapper = document.createElement("button");
  wrapper.setAttribute("type", "button");
  wrapper.setAttribute("data-value", `${type}`);
  wrapper.classList.add("btn", `btn-${color}`, "text-white", "btn-sm");
  wrapper.classList.add("px-3", "me-3", "my-1");
  wrapper.classList.add("tag-button");

  let miniTagCard = "";
  miniTagCard += `
  
  <span class="mx-2 d-inline">${
    value.charAt(0).toUpperCase() + value.slice(1)
  }</span>
  <i class="far fa-times-circle fa-lg close-tag"></i>

    `;
  wrapper.innerHTML = miniTagCard;
  return wrapper;
}
