/*
------------------------------------------
---------------DROPDOWNS------------------
------------------------------------------
*/
const dropdowns_buttons = document.querySelectorAll('.dropdown-button');

dropdowns_buttons.forEach(el => el.addEventListener('click', event => {
  var dropdowns = document.getElementsByClassName('has-dropdown');
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('is-active')) {
        openDropdown.classList.remove('is-active');
    }
  }
  const element_container = el.parentElement;
  element_container.classList.toggle('is-active');
}));

// Cerrar el  dropdown cuando el usuario clickea fuera de el
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    var dropdowns = document.getElementsByClassName('has-dropdown');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('is-active')) {
          openDropdown.classList.remove('is-active');
      }
    }
  }
}

const dropdowns_trigger = document.querySelectorAll('.dropdown-trigger');

dropdowns_trigger.forEach(el => el.addEventListener('click', event => {
  const dropdown_container = el.parentElement;
  dropdown_container.classList.toggle('is-active');
}));

/*
-------------------------------------------
----------------COLLAPSES------------------
-------------------------------------------
*/
var collapse_buttons = document.getElementsByClassName("collapse-button");

for (i = 0; i < collapse_buttons.length; i++) {
  var collapse_button = collapse_buttons[i];
  collapse_button.addEventListener("click", toggle_CollapseVisibility);
}

function toggle_CollapseVisibility(e) {
  var classes = this.parentElement.classList;

  if(classes.contains("is-collapsed")) {
    return classes.remove("is-collapsed"),
    this.setAttribute("aria-expanded", "true");
  }
  
  classes.add("is-collapsed");
  this.setAttribute("aria-expanded", "false");
}

/*Outside collapse button*/
var outside_collapse_buttons = document.getElementsByClassName("outside-collapse-button");

for (i = 0; i < outside_collapse_buttons.length; i++) {
  var outside_collapse_button = outside_collapse_buttons[i];
  outside_collapse_button.addEventListener("click", toggle_OutsideCollapseVisibility);
}

function toggle_OutsideCollapseVisibility(e) {
  var outside_classes = this.parentElement.parentElement.classList;

  if(outside_classes.contains("is-collapsed")) {
    return outside_classes.remove("is-collapsed"),
    this.setAttribute("aria-expanded", "true");
  }
  
  outside_classes.add("is-collapsed");
  this.setAttribute("aria-expanded", "false");
}

/*
-------------------------------------------
--------------------TABS-------------------
-------------------------------------------
*/

var tabs_containers = document.getElementsByClassName("tabs-container");

for (i = 0; i < tabs_containers.length; i++) {
  var tab_container = tabs_containers[i];

  var nav_tabs = tab_container.getElementsByClassName("tabs");

  var li_navTabs = nav_tabs[0].querySelector("ul").children;

  for (x = 0; x < li_navTabs.length; x++) {
    var li_navTab = li_navTabs[x];

    li_navTab.setAttribute("tab-order",x);
    li_navTab.addEventListener("click", addTab_isActive);
  }

  li_navTabs[0].classList.add("is-active");

  var tab_content = tab_container.getElementsByClassName("tab-content");

  var tab_item = tab_content[0].children;

  tab_item[0].classList.add("is-active");
}

function addTab_isActive() {
  const order = this.getAttribute("tab-order");
  
  for (y = 0; y < tabs_containers.length; y++) {
    var tab_container = tabs_containers[y];

    var nav_tabs = tab_container.getElementsByClassName("tabs");

    var li_navTabs = nav_tabs[0].querySelector("ul").children;

    for (z = 0; z < li_navTabs.length; z++) {
      var li_navTab = li_navTabs[z];

      li_navTab.classList.remove("is-active");
    }

    var tab_content = tab_container.getElementsByClassName("tab-content");

    var tab_items = tab_content[0].children;

    for (q = 0; q < tab_items.length; q++) {
      var tab_item = tab_items[q];

      tab_item.classList.remove("is-active");
    }
    tab_items[order].classList.add("is-active");
  }
  this.classList.add("is-active");
}

/*
---------------------------------------------
--------------------MODALS-------------------
---------------------------------------------
*/

document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }
  
  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });
  
  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});

/*
---------------------------------------------------------
--------------------ACCESSIBILITY MENU FUNCTIONS-------------------
---------------------------------------------------------
*/

const getFontSize = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--font-size'));

function fontUp(){
  let fontSize = getFontSize();
  document.documentElement.style.setProperty('--font-size', `${fontSize * 1.1}`);
}

function fontDown(){
  let fontSize = getFontSize();
  document.documentElement.style.setProperty('--font-size', `${fontSize * 0.9}`);
}

function grayScale(){
  var body = document.body;
  body.classList.add("grayscale");
}

function reset(){
  let fontSize = 1;
  document.documentElement.style.setProperty('--font-size', fontSize);

  var body = document.body;
  body.classList.remove("grayscale");
}

/*
---------------------------------------------------------
--------------------OCULTAR CONTENIDOS CON DOS BOTNES DISTINTOS-------------------
---------------------------------------------------------
*/

const contenido = document.getElementById('contenido_oculto');
function show(){
  if(contenido.className == 'is-hidden'){
    contenido.classList.remove('is-hidden');
  }
}
function hide(){
  if(contenido.className != 'is-hidden'){
    contenido.classList.add('is-hidden');
  }
}


/*
---------------------------------------------------------
--------------------OCULTAR FILA DE TABLA-------------------
---------------------------------------------------------
*/

var boton = document.querySelector("#boton");
var elemento = document.querySelector("#elemento");

if (boton) {
  boton.addEventListener("click", function() {
    elemento.classList.toggle("his-hidden")
  })
}
