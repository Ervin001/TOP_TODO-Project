import { format } from 'date-fns';
import Menu from './assets/svgs/menu.svg';
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
    /*<button class="icon-btn add-btn">
    <div class="add-icon"></div>
    <div class="btn-txt">Add Photo</div>
    </button>
*/
    // Sidebar container
    const sidebarContainerEl = document.createElement('aside');
    sidebarContainerEl.classList.add('grid-item', 'sidebar');
    containerEl.appendChild(sidebarContainerEl);

    // _Todo container
    const todoContainerEl = document.createElement('div');
    todoContainerEl.classList.add('grid-item', 'todo-container');
    containerEl.appendChild(todoContainerEl);
  }

  addTodo(data) {}
  todoItems(array) {}
  deleteTodo(data) {}
  showForm() {}
  hideForm() {}
  todoMarker(color) {}
}
