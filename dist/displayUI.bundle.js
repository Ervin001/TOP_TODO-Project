/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/svgs/add.svg":
/*!*********************************!*\
  !*** ./src/assets/svgs/add.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a84f57897338a51d970.svg";

/***/ }),

/***/ "./src/assets/svgs/albums.svg":
/*!************************************!*\
  !*** ./src/assets/svgs/albums.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "468fc7f28afbb173d249.svg";

/***/ }),

/***/ "./src/assets/svgs/calendar-clear.svg":
/*!********************************************!*\
  !*** ./src/assets/svgs/calendar-clear.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "537de7cee215b709a752.svg";

/***/ }),

/***/ "./src/assets/svgs/contrast-outline.svg":
/*!**********************************************!*\
  !*** ./src/assets/svgs/contrast-outline.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e93dae94d4e20c0b7fa1.svg";

/***/ }),

/***/ "./src/assets/svgs/contrast.svg":
/*!**************************************!*\
  !*** ./src/assets/svgs/contrast.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e74be5011b6b73446f73.svg";

/***/ }),

/***/ "./src/assets/svgs/file-tray-full.svg":
/*!********************************************!*\
  !*** ./src/assets/svgs/file-tray-full.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22ebeba3fc00e6d7e31f.svg";

/***/ }),

/***/ "./src/assets/svgs/file-tray.svg":
/*!***************************************!*\
  !*** ./src/assets/svgs/file-tray.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5eb99c96ffa70028a147.svg";

/***/ }),

/***/ "./src/assets/svgs/menu.svg":
/*!**********************************!*\
  !*** ./src/assets/svgs/menu.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20eda71e4f081d6a6caf.svg";

/***/ }),

/***/ "./src/assets/svgs/today.svg":
/*!***********************************!*\
  !*** ./src/assets/svgs/today.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "873dabdfe6efd87866e7.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/displayUI.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Display)
/* harmony export */ });
/* harmony import */ var _assets_svgs_menu_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/svgs/menu.svg */ "./src/assets/svgs/menu.svg");
/* harmony import */ var _assets_svgs_add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/svgs/add.svg */ "./src/assets/svgs/add.svg");
/* harmony import */ var _assets_svgs_calendar_clear_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/svgs/calendar-clear.svg */ "./src/assets/svgs/calendar-clear.svg");
/* harmony import */ var _assets_svgs_contrast_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/svgs/contrast-outline.svg */ "./src/assets/svgs/contrast-outline.svg");
/* harmony import */ var _assets_svgs_contrast_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/svgs/contrast.svg */ "./src/assets/svgs/contrast.svg");
/* harmony import */ var _assets_svgs_today_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/svgs/today.svg */ "./src/assets/svgs/today.svg");
/* harmony import */ var _assets_svgs_file_tray_full_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/svgs/file-tray-full.svg */ "./src/assets/svgs/file-tray-full.svg");
/* harmony import */ var _assets_svgs_file_tray_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/svgs/file-tray.svg */ "./src/assets/svgs/file-tray.svg");
/* harmony import */ var _assets_svgs_albums_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/svgs/albums.svg */ "./src/assets/svgs/albums.svg");











class Display {
  loadHome() {
    // main container
    const containerEl = document.createElement('div');
    containerEl.classList.add('container');
    document.body.appendChild(containerEl);

    // Header container
    const headerContainerEl = document.createElement('div');
    headerContainerEl.classList.add('grid-item', 'header');
    containerEl.appendChild(headerContainerEl);
    // Hamburger Menu Container
    const hamContainerEl = document.createElement('div');
    hamContainerEl.classList.add('hamburger-menu', 'header-child');
    headerContainerEl.appendChild(hamContainerEl);
    // Hamburger Menu
    const menuIcon = new Image();
    menuIcon.src = _assets_svgs_menu_svg__WEBPACK_IMPORTED_MODULE_0__;
    menuIcon.classList.add('hamburger-menu-svg');
    hamContainerEl.appendChild(menuIcon);
    // Add todos button
    const addButtonElContainer = document.createElement('div');
    addButtonElContainer.classList.add('add-btn-container', 'header-child');
    headerContainerEl.appendChild(addButtonElContainer);

    // Add botton
    const addButtonEl = document.createElement('button');
    addButtonEl.classList.add('icon-btn', 'add-btn');
    addButtonElContainer.appendChild(addButtonEl);
    // icon
    const addButtonIcon = document.createElement('div');
    addButtonIcon.classList.add('add-icon');
    addButtonEl.appendChild(addButtonIcon);
    // icon text
    const addButtonIconText = document.createElement('div');
    addButtonIconText.classList.add('btn-txt');
    addButtonIconText.textContent = 'Add Todo';
    addButtonEl.appendChild(addButtonIconText);

    // Sidebar container
    const sidebarContainerEl = document.createElement('aside');
    sidebarContainerEl.classList.add('grid-item', 'sidebar');
    containerEl.appendChild(sidebarContainerEl);
    // SVG's Containers
    const svgContainerEl = document.createElement('div');
    svgContainerEl.classList.add('svg-container');
    sidebarContainerEl.appendChild(svgContainerEl);
    // Inbox svg container
    const inboxContainer = document.createElement('div');
    inboxContainer.classList.add('inbox-container', 'sidebar-svg-container');
    svgContainerEl.appendChild(inboxContainer);
    // Inbox svg
    const inboxSvg = new Image();
    inboxSvg.src = _assets_svgs_file_tray_svg__WEBPACK_IMPORTED_MODULE_7__;
    inboxSvg.classList.add('inbox-svg', 'sidebar-svg');
    inboxContainer.appendChild(inboxSvg);
    // inbox text
    const inboxText = document.createElement('p');
    inboxText.classList.add('inbox-svg-text', 'svg-text');
    inboxText.textContent = 'Inbox';
    inboxContainer.appendChild(inboxText);
    // Today svg container
    const todayContainer = document.createElement('div');
    todayContainer.classList.add('today-container', 'sidebar-svg-container');
    svgContainerEl.appendChild(todayContainer);
    // Today svg
    const todaySvg = new Image();
    todaySvg.src = _assets_svgs_today_svg__WEBPACK_IMPORTED_MODULE_5__;
    todaySvg.classList.add('today-svg', 'sidebar-svg');
    todayContainer.appendChild(todaySvg);
    // Today text
    const todayText = document.createElement('p');
    todayText.classList.add('today-svg-text', 'svg-text');
    todayText.textContent = 'Today';
    todayContainer.appendChild(todayText);
    // collection svg container
    const collectionContainer = document.createElement('div');
    collectionContainer.classList.add(
      'collection-container',
      'sidebar-svg-container'
    );
    svgContainerEl.appendChild(collectionContainer);
    // collections svg
    const albumsSvg = new Image();
    albumsSvg.src = _assets_svgs_albums_svg__WEBPACK_IMPORTED_MODULE_8__;
    albumsSvg.classList.add('collections-svg', 'sidebar-svg');
    collectionContainer.appendChild(albumsSvg);
    // Collection Text
    const collectionText = document.createElement('p');
    collectionText.classList.add('collection-svg-text', 'svg-text');
    collectionText.textContent = 'Collections';
    collectionContainer.appendChild(collectionText);
    // light/dark mode container
    const lightDarkSvgContainer = document.createElement('div');
    lightDarkSvgContainer.src = _assets_svgs_contrast_svg__WEBPACK_IMPORTED_MODULE_4__;
    lightDarkSvgContainer.classList.add(
      'light-dark-mode-container',
      'sidebar-svg-container'
    );
    svgContainerEl.appendChild(lightDarkSvgContainer);
    // light/dark mode
    const lightDarkSvg = document.createElement('div');
    lightDarkSvg.classList.add('light-dark-mode-svg', 'sidebar-svg');
    lightDarkSvgContainer.appendChild(lightDarkSvg);
    // light/dark mode text
    const lightDarkText = document.createElement('p');
    lightDarkText.classList.add('light-dark-text', 'svg-text');
    // dark-mode media query matched or not
    let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
    lightDarkText.textContent = `${matched ? 'Dark' : 'Light'}`;
    lightDarkSvgContainer.appendChild(lightDarkText);

    // _Todo container
    const todoContainerEl = document.createElement('div');
    todoContainerEl.classList.add('grid-item', 'todo-container');
    containerEl.appendChild(todoContainerEl);

    // Form container
    document.body.insertAdjacentHTML('beforeend', this.form());

    // Replacement Form
    document.body.insertAdjacentHTML('beforeend', this.replaceTaskForm());
  }

  form() {
    return `
      <div class="form-container hidden">
        <h1 class="form-title frm-chld">New Todo</h1>
        <form action="" method="get" class="todo-form frm-chld">
          <label for="title">Enter Title:</label>
          
          <input type="text" name="title" id="title" class="inpt" required autofocus/>
          
          <label for="date">Date:</label>
          
          <input type="date" name="date" id="date" class="inpt" required/>
          
          <label for="description">Enter info:</label>
          
          <textArea name"description" id="description" class="inpt" required cols="30" rows="10"></textArea>
          
          <input type="submit" id="submit-id" value="Add"  class="inpt" />
        </form>
      </div>
    `;
  }

  replaceTaskForm() {
    return `
      <div class="replacement-form-container hidden">
        <h1 class="form-title frm-chld">Replacement Form</h1>
        <form action="" method="get" class="replace-todo-form frm-chld">
          <label for="title-rp">Enter Title:</label>
          
          <input type="text" name="title-rp" id="title-rp" class="inpt" autofocus required/>
          
          <label for="date-rp">Date:</label>
          
          <input type="date" name="date-rp" id="date-rp" class="inpt" required/>
          
          <label for="description-rp">Enter info:</label>
          
          <textArea name"description-rp" id="description-rp" class="inpt" required cols="30" rows="10"></textArea>
          
          <button class="delete-btn inpt">Delete</button>
          <input type="submit" id="submit-replaced-id" value="Add"  class="inpt" />
        </form>
      </div>
    `;
  }

  // Returns html
  createTodoItem(todoObject) {
    let { title, content, date, id } = todoObject;

    const todoItemEL = `
      <div class="single-todo-item-container" data-checked="false" data-id="${id}">
        <div class="checkBox-container td-item">

        <input type="checkbox" id="checkbox" name="checkbox">

        </div>
        <div class="description-container td-item">
          <div class="todo-Title">${title}</div>
          <div class="todo-Body">${content}</div>
        </div>
        <div class="date td-item">${date}</div>
      </div>
    `;
    return todoItemEL;
  }

  // DOM: Renders task
  addTodoItem(item) {
    // Logic for adding `todoItem` to DOM
    // Check if DOM is loaded
    if (document.readyState == 'complete') {
      const todoContainerEl = document.querySelector('.todo-container');
      todoContainerEl.insertAdjacentHTML('afterbegin', item);
    }

    document.addEventListener('DOMContentLoaded', function () {
      const todoContainerEl = document.querySelector('.todo-container');
      todoContainerEl.insertAdjacentHTML('afterbegin', item);
    });
  }

  toggleForm() {
    const formEl = document.querySelector('.form-container');
    formEl.classList.toggle('hidden');
  }

  toggleReplaceTaskForm() {
    const formEl = document.querySelector('.replacement-form-container');
    formEl.classList.toggle('hidden');
  }

  addExistingInputFields(data) {
    const formEl = document.querySelector('.replacement-form-container');

    // Title
    formEl.childNodes[3][0].value = data;
    formEl.childNodes[3][0].textContent = data;
    // date
    formEl.childNodes[3][1].textContent = data;
    formEl.childNodes[3][1].textContent = data;
    // main-content
    formEl.childNodes[3][2].textContent = data;
    formEl.childNodes[3][2].textContent = data;
  }

  updateNewTaskInfo(newInfo, index) {
    const allTasks = document.querySelectorAll('.single-todo-item-container');
    const reverseTask = [...allTasks].reverse();

    // title
    reverseTask[index].children[1].children[0].textContent = newInfo.title;
    // main content
    reverseTask[index].children[1].children[1].textContent = newInfo.content;
    // date
    reverseTask[index].children[2].textContent = newInfo.date;
    // will update values in the DOM
  }

  updateModes() {
    const dark_light_mode = document.querySelector('.light-dark-text');
  }

  deleteDOMTask(index) {
    const allTasks = [
      ...document.querySelectorAll('.single-todo-item-container'),
    ].reverse();

    allTasks[index].remove();
  }

  showChecked(arr) {
    const allTasks = [
      ...document.querySelectorAll('.single-todo-item-container'),
    ].reverse();
    arr.forEach((e, i) => {
      if (e.checked) {
        allTasks[i].children[0].children[0].checked = true;
      }
    });
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF90b2RvLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvcF90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3BfdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b3BfdG9kby1wcm9qZWN0Ly4vc3JjL2Rpc3BsYXlVSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgTWVudSBmcm9tICcuL2Fzc2V0cy9zdmdzL21lbnUuc3ZnJztcbmltcG9ydCBBZGQgZnJvbSAnLi9hc3NldHMvc3Zncy9hZGQuc3ZnJztcbmltcG9ydCBDYWxlbmRhciBmcm9tICcuL2Fzc2V0cy9zdmdzL2NhbGVuZGFyLWNsZWFyLnN2Zyc7XG5pbXBvcnQgQ29udHJhc3RPdXRsaW5lIGZyb20gJy4vYXNzZXRzL3N2Z3MvY29udHJhc3Qtb3V0bGluZS5zdmcnO1xuaW1wb3J0IENvbnRyYXN0IGZyb20gJy4vYXNzZXRzL3N2Z3MvY29udHJhc3Quc3ZnJztcbmltcG9ydCBUb2RheSBmcm9tICcuL2Fzc2V0cy9zdmdzL3RvZGF5LnN2Zyc7XG5pbXBvcnQgRmlsZVRyYXlGdWxsIGZyb20gJy4vYXNzZXRzL3N2Z3MvZmlsZS10cmF5LWZ1bGwuc3ZnJztcbmltcG9ydCBGaWxlVHJheSBmcm9tICcuL2Fzc2V0cy9zdmdzL2ZpbGUtdHJheS5zdmcnO1xuaW1wb3J0IEFsYnVtcyBmcm9tICcuL2Fzc2V0cy9zdmdzL2FsYnVtcy5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5IHtcbiAgbG9hZEhvbWUoKSB7XG4gICAgLy8gbWFpbiBjb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lckVsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyRWwpO1xuXG4gICAgLy8gSGVhZGVyIGNvbnRhaW5lclxuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyQ29udGFpbmVyRWwuY2xhc3NMaXN0LmFkZCgnZ3JpZC1pdGVtJywgJ2hlYWRlcicpO1xuICAgIGNvbnRhaW5lckVsLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lckVsKTtcbiAgICAvLyBIYW1idXJnZXIgTWVudSBDb250YWluZXJcbiAgICBjb25zdCBoYW1Db250YWluZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhhbUNvbnRhaW5lckVsLmNsYXNzTGlzdC5hZGQoJ2hhbWJ1cmdlci1tZW51JywgJ2hlYWRlci1jaGlsZCcpO1xuICAgIGhlYWRlckNvbnRhaW5lckVsLmFwcGVuZENoaWxkKGhhbUNvbnRhaW5lckVsKTtcbiAgICAvLyBIYW1idXJnZXIgTWVudVxuICAgIGNvbnN0IG1lbnVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbWVudUljb24uc3JjID0gTWVudTtcbiAgICBtZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdoYW1idXJnZXItbWVudS1zdmcnKTtcbiAgICBoYW1Db250YWluZXJFbC5hcHBlbmRDaGlsZChtZW51SWNvbik7XG4gICAgLy8gQWRkIHRvZG9zIGJ1dHRvblxuICAgIGNvbnN0IGFkZEJ1dHRvbkVsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkQnV0dG9uRWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkLWJ0bi1jb250YWluZXInLCAnaGVhZGVyLWNoaWxkJyk7XG4gICAgaGVhZGVyQ29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uRWxDb250YWluZXIpO1xuXG4gICAgLy8gQWRkIGJvdHRvblxuICAgIGNvbnN0IGFkZEJ1dHRvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnV0dG9uRWwuY2xhc3NMaXN0LmFkZCgnaWNvbi1idG4nLCAnYWRkLWJ0bicpO1xuICAgIGFkZEJ1dHRvbkVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbkVsKTtcbiAgICAvLyBpY29uXG4gICAgY29uc3QgYWRkQnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZEJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnYWRkLWljb24nKTtcbiAgICBhZGRCdXR0b25FbC5hcHBlbmRDaGlsZChhZGRCdXR0b25JY29uKTtcbiAgICAvLyBpY29uIHRleHRcbiAgICBjb25zdCBhZGRCdXR0b25JY29uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZEJ1dHRvbkljb25UZXh0LmNsYXNzTGlzdC5hZGQoJ2J0bi10eHQnKTtcbiAgICBhZGRCdXR0b25JY29uVGV4dC50ZXh0Q29udGVudCA9ICdBZGQgVG9kbyc7XG4gICAgYWRkQnV0dG9uRWwuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uSWNvblRleHQpO1xuXG4gICAgLy8gU2lkZWJhciBjb250YWluZXJcbiAgICBjb25zdCBzaWRlYmFyQ29udGFpbmVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xuICAgIHNpZGViYXJDb250YWluZXJFbC5jbGFzc0xpc3QuYWRkKCdncmlkLWl0ZW0nLCAnc2lkZWJhcicpO1xuICAgIGNvbnRhaW5lckVsLmFwcGVuZENoaWxkKHNpZGViYXJDb250YWluZXJFbCk7XG4gICAgLy8gU1ZHJ3MgQ29udGFpbmVyc1xuICAgIGNvbnN0IHN2Z0NvbnRhaW5lckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ZnQ29udGFpbmVyRWwuY2xhc3NMaXN0LmFkZCgnc3ZnLWNvbnRhaW5lcicpO1xuICAgIHNpZGViYXJDb250YWluZXJFbC5hcHBlbmRDaGlsZChzdmdDb250YWluZXJFbCk7XG4gICAgLy8gSW5ib3ggc3ZnIGNvbnRhaW5lclxuICAgIGNvbnN0IGluYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5ib3gtY29udGFpbmVyJywgJ3NpZGViYXItc3ZnLWNvbnRhaW5lcicpO1xuICAgIHN2Z0NvbnRhaW5lckVsLmFwcGVuZENoaWxkKGluYm94Q29udGFpbmVyKTtcbiAgICAvLyBJbmJveCBzdmdcbiAgICBjb25zdCBpbmJveFN2ZyA9IG5ldyBJbWFnZSgpO1xuICAgIGluYm94U3ZnLnNyYyA9IEZpbGVUcmF5O1xuICAgIGluYm94U3ZnLmNsYXNzTGlzdC5hZGQoJ2luYm94LXN2ZycsICdzaWRlYmFyLXN2ZycpO1xuICAgIGluYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGluYm94U3ZnKTtcbiAgICAvLyBpbmJveCB0ZXh0XG4gICAgY29uc3QgaW5ib3hUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluYm94VGV4dC5jbGFzc0xpc3QuYWRkKCdpbmJveC1zdmctdGV4dCcsICdzdmctdGV4dCcpO1xuICAgIGluYm94VGV4dC50ZXh0Q29udGVudCA9ICdJbmJveCc7XG4gICAgaW5ib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5ib3hUZXh0KTtcbiAgICAvLyBUb2RheSBzdmcgY29udGFpbmVyXG4gICAgY29uc3QgdG9kYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RheS1jb250YWluZXInLCAnc2lkZWJhci1zdmctY29udGFpbmVyJyk7XG4gICAgc3ZnQ29udGFpbmVyRWwuYXBwZW5kQ2hpbGQodG9kYXlDb250YWluZXIpO1xuICAgIC8vIFRvZGF5IHN2Z1xuICAgIGNvbnN0IHRvZGF5U3ZnID0gbmV3IEltYWdlKCk7XG4gICAgdG9kYXlTdmcuc3JjID0gVG9kYXk7XG4gICAgdG9kYXlTdmcuY2xhc3NMaXN0LmFkZCgndG9kYXktc3ZnJywgJ3NpZGViYXItc3ZnJyk7XG4gICAgdG9kYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlTdmcpO1xuICAgIC8vIFRvZGF5IHRleHRcbiAgICBjb25zdCB0b2RheVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9kYXlUZXh0LmNsYXNzTGlzdC5hZGQoJ3RvZGF5LXN2Zy10ZXh0JywgJ3N2Zy10ZXh0Jyk7XG4gICAgdG9kYXlUZXh0LnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICB0b2RheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheVRleHQpO1xuICAgIC8vIGNvbGxlY3Rpb24gc3ZnIGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAnY29sbGVjdGlvbi1jb250YWluZXInLFxuICAgICAgJ3NpZGViYXItc3ZnLWNvbnRhaW5lcidcbiAgICApO1xuICAgIHN2Z0NvbnRhaW5lckVsLmFwcGVuZENoaWxkKGNvbGxlY3Rpb25Db250YWluZXIpO1xuICAgIC8vIGNvbGxlY3Rpb25zIHN2Z1xuICAgIGNvbnN0IGFsYnVtc1N2ZyA9IG5ldyBJbWFnZSgpO1xuICAgIGFsYnVtc1N2Zy5zcmMgPSBBbGJ1bXM7XG4gICAgYWxidW1zU3ZnLmNsYXNzTGlzdC5hZGQoJ2NvbGxlY3Rpb25zLXN2ZycsICdzaWRlYmFyLXN2ZycpO1xuICAgIGNvbGxlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWxidW1zU3ZnKTtcbiAgICAvLyBDb2xsZWN0aW9uIFRleHRcbiAgICBjb25zdCBjb2xsZWN0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb2xsZWN0aW9uVGV4dC5jbGFzc0xpc3QuYWRkKCdjb2xsZWN0aW9uLXN2Zy10ZXh0JywgJ3N2Zy10ZXh0Jyk7XG4gICAgY29sbGVjdGlvblRleHQudGV4dENvbnRlbnQgPSAnQ29sbGVjdGlvbnMnO1xuICAgIGNvbGxlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY29sbGVjdGlvblRleHQpO1xuICAgIC8vIGxpZ2h0L2RhcmsgbW9kZSBjb250YWluZXJcbiAgICBjb25zdCBsaWdodERhcmtTdmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaWdodERhcmtTdmdDb250YWluZXIuc3JjID0gQ29udHJhc3Q7XG4gICAgbGlnaHREYXJrU3ZnQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAnbGlnaHQtZGFyay1tb2RlLWNvbnRhaW5lcicsXG4gICAgICAnc2lkZWJhci1zdmctY29udGFpbmVyJ1xuICAgICk7XG4gICAgc3ZnQ29udGFpbmVyRWwuYXBwZW5kQ2hpbGQobGlnaHREYXJrU3ZnQ29udGFpbmVyKTtcbiAgICAvLyBsaWdodC9kYXJrIG1vZGVcbiAgICBjb25zdCBsaWdodERhcmtTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaWdodERhcmtTdmcuY2xhc3NMaXN0LmFkZCgnbGlnaHQtZGFyay1tb2RlLXN2ZycsICdzaWRlYmFyLXN2ZycpO1xuICAgIGxpZ2h0RGFya1N2Z0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaWdodERhcmtTdmcpO1xuICAgIC8vIGxpZ2h0L2RhcmsgbW9kZSB0ZXh0XG4gICAgY29uc3QgbGlnaHREYXJrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsaWdodERhcmtUZXh0LmNsYXNzTGlzdC5hZGQoJ2xpZ2h0LWRhcmstdGV4dCcsICdzdmctdGV4dCcpO1xuICAgIC8vIGRhcmstbW9kZSBtZWRpYSBxdWVyeSBtYXRjaGVkIG9yIG5vdFxuICAgIGxldCBtYXRjaGVkID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzO1xuICAgIGxpZ2h0RGFya1RleHQudGV4dENvbnRlbnQgPSBgJHttYXRjaGVkID8gJ0RhcmsnIDogJ0xpZ2h0J31gO1xuICAgIGxpZ2h0RGFya1N2Z0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaWdodERhcmtUZXh0KTtcblxuICAgIC8vIF9Ub2RvIGNvbnRhaW5lclxuICAgIGNvbnN0IHRvZG9Db250YWluZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Db250YWluZXJFbC5jbGFzc0xpc3QuYWRkKCdncmlkLWl0ZW0nLCAndG9kby1jb250YWluZXInKTtcbiAgICBjb250YWluZXJFbC5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyRWwpO1xuXG4gICAgLy8gRm9ybSBjb250YWluZXJcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5mb3JtKCkpO1xuXG4gICAgLy8gUmVwbGFjZW1lbnQgRm9ybVxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLnJlcGxhY2VUYXNrRm9ybSgpKTtcbiAgfVxuXG4gIGZvcm0oKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRhaW5lciBoaWRkZW5cIj5cbiAgICAgICAgPGgxIGNsYXNzPVwiZm9ybS10aXRsZSBmcm0tY2hsZFwiPk5ldyBUb2RvPC9oMT5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgbWV0aG9kPVwiZ2V0XCIgY2xhc3M9XCJ0b2RvLWZvcm0gZnJtLWNobGRcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5FbnRlciBUaXRsZTo8L2xhYmVsPlxuICAgICAgICAgIFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwidGl0bGVcIiBjbGFzcz1cImlucHRcIiByZXF1aXJlZCBhdXRvZm9jdXMvPlxuICAgICAgICAgIFxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+RGF0ZTo8L2xhYmVsPlxuICAgICAgICAgIFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgY2xhc3M9XCJpbnB0XCIgcmVxdWlyZWQvPlxuICAgICAgICAgIFxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkVudGVyIGluZm86PC9sYWJlbD5cbiAgICAgICAgICBcbiAgICAgICAgICA8dGV4dEFyZWEgbmFtZVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgY2xhc3M9XCJpbnB0XCIgcmVxdWlyZWQgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+PC90ZXh0QXJlYT5cbiAgICAgICAgICBcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGlkPVwic3VibWl0LWlkXCIgdmFsdWU9XCJBZGRcIiAgY2xhc3M9XCJpbnB0XCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHJlcGxhY2VUYXNrRm9ybSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcz1cInJlcGxhY2VtZW50LWZvcm0tY29udGFpbmVyIGhpZGRlblwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJmb3JtLXRpdGxlIGZybS1jaGxkXCI+UmVwbGFjZW1lbnQgRm9ybTwvaDE+XG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIG1ldGhvZD1cImdldFwiIGNsYXNzPVwicmVwbGFjZS10b2RvLWZvcm0gZnJtLWNobGRcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGUtcnBcIj5FbnRlciBUaXRsZTo8L2xhYmVsPlxuICAgICAgICAgIFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZS1ycFwiIGlkPVwidGl0bGUtcnBcIiBjbGFzcz1cImlucHRcIiBhdXRvZm9jdXMgcmVxdWlyZWQvPlxuICAgICAgICAgIFxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlLXJwXCI+RGF0ZTo8L2xhYmVsPlxuICAgICAgICAgIFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlLXJwXCIgaWQ9XCJkYXRlLXJwXCIgY2xhc3M9XCJpbnB0XCIgcmVxdWlyZWQvPlxuICAgICAgICAgIFxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvbi1ycFwiPkVudGVyIGluZm86PC9sYWJlbD5cbiAgICAgICAgICBcbiAgICAgICAgICA8dGV4dEFyZWEgbmFtZVwiZGVzY3JpcHRpb24tcnBcIiBpZD1cImRlc2NyaXB0aW9uLXJwXCIgY2xhc3M9XCJpbnB0XCIgcmVxdWlyZWQgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+PC90ZXh0QXJlYT5cbiAgICAgICAgICBcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLWJ0biBpbnB0XCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBpZD1cInN1Ym1pdC1yZXBsYWNlZC1pZFwiIHZhbHVlPVwiQWRkXCIgIGNsYXNzPVwiaW5wdFwiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICAvLyBSZXR1cm5zIGh0bWxcbiAgY3JlYXRlVG9kb0l0ZW0odG9kb09iamVjdCkge1xuICAgIGxldCB7IHRpdGxlLCBjb250ZW50LCBkYXRlLCBpZCB9ID0gdG9kb09iamVjdDtcblxuICAgIGNvbnN0IHRvZG9JdGVtRUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwic2luZ2xlLXRvZG8taXRlbS1jb250YWluZXJcIiBkYXRhLWNoZWNrZWQ9XCJmYWxzZVwiIGRhdGEtaWQ9XCIke2lkfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tCb3gtY29udGFpbmVyIHRkLWl0ZW1cIj5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb24tY29udGFpbmVyIHRkLWl0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1UaXRsZVwiPiR7dGl0bGV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tQm9keVwiPiR7Y29udGVudH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlIHRkLWl0ZW1cIj4ke2RhdGV9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIHJldHVybiB0b2RvSXRlbUVMO1xuICB9XG5cbiAgLy8gRE9NOiBSZW5kZXJzIHRhc2tcbiAgYWRkVG9kb0l0ZW0oaXRlbSkge1xuICAgIC8vIExvZ2ljIGZvciBhZGRpbmcgYHRvZG9JdGVtYCB0byBET01cbiAgICAvLyBDaGVjayBpZiBET00gaXMgbG9hZGVkXG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJykge1xuICAgICAgY29uc3QgdG9kb0NvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XG4gICAgICB0b2RvQ29udGFpbmVyRWwuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgaXRlbSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IHRvZG9Db250YWluZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xuICAgICAgdG9kb0NvbnRhaW5lckVsLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcbiAgICBmb3JtRWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIH1cblxuICB0b2dnbGVSZXBsYWNlVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcGxhY2VtZW50LWZvcm0tY29udGFpbmVyJyk7XG4gICAgZm9ybUVsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9XG5cbiAgYWRkRXhpc3RpbmdJbnB1dEZpZWxkcyhkYXRhKSB7XG4gICAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcGxhY2VtZW50LWZvcm0tY29udGFpbmVyJyk7XG5cbiAgICAvLyBUaXRsZVxuICAgIGZvcm1FbC5jaGlsZE5vZGVzWzNdWzBdLnZhbHVlID0gZGF0YTtcbiAgICBmb3JtRWwuY2hpbGROb2Rlc1szXVswXS50ZXh0Q29udGVudCA9IGRhdGE7XG4gICAgLy8gZGF0ZVxuICAgIGZvcm1FbC5jaGlsZE5vZGVzWzNdWzFdLnRleHRDb250ZW50ID0gZGF0YTtcbiAgICBmb3JtRWwuY2hpbGROb2Rlc1szXVsxXS50ZXh0Q29udGVudCA9IGRhdGE7XG4gICAgLy8gbWFpbi1jb250ZW50XG4gICAgZm9ybUVsLmNoaWxkTm9kZXNbM11bMl0udGV4dENvbnRlbnQgPSBkYXRhO1xuICAgIGZvcm1FbC5jaGlsZE5vZGVzWzNdWzJdLnRleHRDb250ZW50ID0gZGF0YTtcbiAgfVxuXG4gIHVwZGF0ZU5ld1Rhc2tJbmZvKG5ld0luZm8sIGluZGV4KSB7XG4gICAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2luZ2xlLXRvZG8taXRlbS1jb250YWluZXInKTtcbiAgICBjb25zdCByZXZlcnNlVGFzayA9IFsuLi5hbGxUYXNrc10ucmV2ZXJzZSgpO1xuXG4gICAgLy8gdGl0bGVcbiAgICByZXZlcnNlVGFza1tpbmRleF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBuZXdJbmZvLnRpdGxlO1xuICAgIC8vIG1haW4gY29udGVudFxuICAgIHJldmVyc2VUYXNrW2luZGV4XS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IG5ld0luZm8uY29udGVudDtcbiAgICAvLyBkYXRlXG4gICAgcmV2ZXJzZVRhc2tbaW5kZXhdLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gbmV3SW5mby5kYXRlO1xuICAgIC8vIHdpbGwgdXBkYXRlIHZhbHVlcyBpbiB0aGUgRE9NXG4gIH1cblxuICB1cGRhdGVNb2RlcygpIHtcbiAgICBjb25zdCBkYXJrX2xpZ2h0X21vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHQtZGFyay10ZXh0Jyk7XG4gIH1cblxuICBkZWxldGVET01UYXNrKGluZGV4KSB7XG4gICAgY29uc3QgYWxsVGFza3MgPSBbXG4gICAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2luZ2xlLXRvZG8taXRlbS1jb250YWluZXInKSxcbiAgICBdLnJldmVyc2UoKTtcblxuICAgIGFsbFRhc2tzW2luZGV4XS5yZW1vdmUoKTtcbiAgfVxuXG4gIHNob3dDaGVja2VkKGFycikge1xuICAgIGNvbnN0IGFsbFRhc2tzID0gW1xuICAgICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpbmdsZS10b2RvLWl0ZW0tY29udGFpbmVyJyksXG4gICAgXS5yZXZlcnNlKCk7XG4gICAgYXJyLmZvckVhY2goKGUsIGkpID0+IHtcbiAgICAgIGlmIChlLmNoZWNrZWQpIHtcbiAgICAgICAgYWxsVGFza3NbaV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==