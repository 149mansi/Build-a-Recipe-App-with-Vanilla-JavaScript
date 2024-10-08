/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

/**
 * Home Page Search
 */
const /** @type {HTMLElement} */ $searchField = document.querySelector("[data-search-field]");
const /** @type {HTMLElement} */ $searchBtn = document.querySelector("[data-search-btn]");
$searchBtn.addEventListener("click", function() {
    if ($searchField.value) window.location = `/recipes.html?q=${$searchField.value}`;
});

/**
 * Search Submit when press "Enter key"
 */
$searchField.addEventListener("keydown", e => {
    if (e.key == "Enter") $searchBtn.click();
});

/**
 * Tab panel navigation
 */
const /** @type {NodeListOf<HTMLElement>} */ $tabBtns = document.querySelectorAll("[data-tab-btn]");
const /** @type {NodeListOf<HTMLElement>} */ $tabPanels = document.querySelectorAll("[data-tab-panel]");

let /** @type {HTMLElement} */ $lastActiveTabPanel = $tabPanels[0];
let /** @type {HTMLElement} */ $lastActiveTabBtn = $tabBtns[0];

addEventOnElements($tabBtns, "click", function() {
    $lastActiveTabPanel.setAttribute("hidden", "");
    $lastActiveTabBtn.setAttribute("aria-selected", false);
    $lastActiveTabBtn.setAttribute("tabindex", -1);

    const /** @type {HTMLElement} */ $currentTabPanel = document.querySelector(`#${this.getAttribute("aria-controls")}`);
    $currentTabPanel.removeAttribute("hidden");
    this.setAttribute("aria-selected", true);
    this.setAttribute("tabindex", 0);

    $lastActiveTabPanel = $currentTabPanel;
    $lastActiveTabBtn = this;
});

/**
 * Utility function to add event listeners to multiple elements
 */
function addEventOnElements(elements, eventType, callback) {
    elements.forEach(element => element.addEventListener(eventType, callback));
}

addEventOnElements($tabBtns,"keydown", function(e){
    const /**{NodeElement} */ $nextElement = this.$nextElementSibling;
    const /**{NodeElement} */ $previousElement = this.$previousElementSibling;
    if (e.key == "ArrowLeft" && $nextElement) {
        this.setAttribute("tabindex",-1);
        $nextElement.setAttribute("tabindex",0);
        $nextElement.focus();
    }
    else if(e.key == "ArrowLeft" && $previousElement){
        this.setAttribute("tabindex",-1);
        $previousElement.setAttribute("tabindex",0);
        $previousElement.focus();
    
    } else if(e.key == "Tab"){
        this.setAttribute("tabindex",-1);
        $lastActiveTabBtn.setAttribute("tabindex",0);
    }

});
