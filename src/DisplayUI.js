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
    const addButtonEl = document.createElement('div');
    addButtonEl.classList.add('add-btn', 'header-child');
    headerContainerEl.appendChild(addButtonEl);

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
