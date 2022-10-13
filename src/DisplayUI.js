import { format } from 'date-fns';
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
    // Hamburger Menu
    const hamburgerMenuEl = document.createElement('div');
    hamburgerMenuEl.classList.add('hamburger-menu', 'header-child');
    headerContainerEl.appendChild(hamburgerMenuEl);
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
