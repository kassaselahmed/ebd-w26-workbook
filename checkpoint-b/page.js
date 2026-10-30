import { items } from "./items.js";

/**
 * Draws the provided items into the list, replacing the existing content.
 *
 * @param {Array} list
 * @returns {void}
 */
export function renderItems(list) {
  const element = document.querySelector("#list");

  element.innerHTML = "";

  for (const item of list) {
    const card = document.createElement("li");
    card.classList.add("article-card");
    card.textContent = item.name;

    element.append(card);
  }
}

/**
 * Returns only items priced above 100 EGP.
 *
 * @returns {Array}
 */
export function matching() {
  return items.filter((item) => item.price > 100);
}

/**
 * Displays all items and wires up the filter button.
 *
 * @returns {void}
 */
export function start() {
  renderItems(items);

  document.querySelector("#filter-button").addEventListener("click", () => {
    renderItems(matching());
  });
}

