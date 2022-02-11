function minitagsDOM(value, color, type) {
  const wrapper = document.createElement("button");

  wrapper.setAttribute("type", "button");
  wrapper.setAttribute("datavalue", `${type}`);
  wrapper.classList.add("btn", `btn-${color}`, "text-white", "btn-sm");
  wrapper.classList.add("ps-3", "py-2");
  wrapper.classList.add("tag-button");

  let miniTagCard = "";
  miniTagCard += `
  
  ${value.charAt(0).toUpperCase() + value.slice(1)}
  <i class="far fa-times-circle fa-lg close-tag"></i>

    `;
  wrapper.innerHTML = miniTagCard;
  return wrapper;
}
