import { format } from 'date-fns';
import Menu from './assets/svgs/menu.svg';
import Add from './assets/svgs/add.svg';
import Calendar from './assets/svgs/calendar-clear.svg';
import ContrastOutline from './assets/svgs/contrast-outline.svg';
import Contrast from './assets/svgs/contrast.svg';
import Today from './assets/svgs/today.svg';
import FileTrayFull from './assets/svgs/file-tray-full.svg';
import FileTray from './assets/svgs/file-tray.svg';
import Albums from './assets/svgs/albums.svg';

export default class Display {
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
    menuIcon.src = Menu;
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
    inboxSvg.src = FileTray;
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
    todaySvg.src = Today;
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
    albumsSvg.src = Albums;
    albumsSvg.classList.add('collections-svg', 'sidebar-svg');
    collectionContainer.appendChild(albumsSvg);
    // Collection Text
    const collectionText = document.createElement('p');
    collectionText.classList.add('collection-svg-text', 'svg-text');
    collectionText.textContent = 'Collections';
    collectionContainer.appendChild(collectionText);
    // light/dark mode container
    const lightDarkSvgContainer = document.createElement('div');
    lightDarkSvgContainer.src = Contrast;
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
  }

  form() {
    return `
      <div class="form-container">
        <h1 class="form-title frm-chld">New Todo</h1>
        <form action="" method="get" class="todo-form frm-chld">
          <label for="title">Enter Title:</label>
          
          <input type="text" name="title" id="title" class="inpt" required/>
          
          <label for="date">Date:</label>
          
          <input type="date" name="date" id="date" class="inpt" required/>
          
          <label for="description">Enter info:</label>
          
          <textArea name"description" id="description" class="inpt" required cols="30" rows="10"></textArea>
          
          <input type="submit" id="submit-id" value="Add"  class="inpt" />
        </form>
      </div>
    `;
  }

  // Returns html
  createTodoItem(todoObject) {
    let { title, content, date, id } = todoObject;
    const todoItemEL = `
      <div class="single-todo-item-container" data-id="${id}">
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

  addTodoItem(item) {
    // Logic for adding `todoItem` to DOM
    const todoContainerEl = document.querySelector('.todo-container');
    // todoContainerEl.appendChild(item);
    todoContainerEl.insertAdjacentHTML('beforeend', item);
  }

  deleteTodo(item) {}

  showForm(e) {
    console.log(e);
  }
  hideForm() {}
  todoMarker(color) {}
}
