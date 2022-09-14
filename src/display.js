import { lastDayOfDecade } from 'date-fns';

export class DisplayUI {
  addHome() {
    // main Container El
    const containerEl = document.createElement('div');
    containerEl.classList.add('container');
    document.body.appendChild(containerEl);

    // Sidebar
    const sidebarContainerEl = document.createElement('div');
    sidebarContainerEl.classList.add('sidebar');
    containerEl.appendChild(sidebarContainerEl);

    // top-container
    const topContainerEl = document.createElement('div');
    topContainerEl.classList.add('profile-search');
    containerEl.appendChild(topContainerEl);

    // infoTodo container
    const todoInfoContainerEl = document.createElement('div');
    todoInfoContainerEl.classList.add('todo-info');
    containerEl.appendChild(todoInfoContainerEl);

    //Extra info container
    const extraInfoContainerEl = document.createElement('div');
    extraInfoContainerEl.classList.add('extra-info');
    containerEl.appendChild(extraInfoContainerEl);
  }
}
