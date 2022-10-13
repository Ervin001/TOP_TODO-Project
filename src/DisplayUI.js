export default class Display {
  loadHome() {
    // main container
    const containerEl = document.createElement('div');
    containerEl.classList.add('container');
    document.body.appendChild(containerEl);

    // logo container
    const logoContainerEl = document.createElement('div');
    logoContainerEl.classList.add('logo', 'grid-item');
    containerEl.appendChild(logoContainerEl);
    // Logo text container
    const logoTextEl = document.createElement('h1');
    logoTextEl.classList.add('logo-text');
    logoTextEl.textContent = 'Todo';
    logoContainerEl.appendChild(logoTextEl);

    // header container
    const headerEl = document.createElement('div');
    headerEl.classList.add('header', 'grid-item');
    containerEl.appendChild(headerEl);
    // Header first child
    const firstHeaderChild = document.createElement('div');
    firstHeaderChild.classList.add('header-child', 'first-child');
    headerEl.appendChild(firstHeaderChild);
    // Header second child
    const secondHeaderChild = document.createElement('div');
    secondHeaderChild.classList.add('header-child', 'second-child');
    headerEl.appendChild(secondHeaderChild);
    // sidebar container
    const sidebarContainerEl = document.createElement('aside');
    sidebarContainerEl.classList.add('sidebar', 'grid-item');
    sidebarContainerEl.textContent = 'Side Bar';
    containerEl.appendChild(sidebarContainerEl);

    // main content
    const mainContentEl = document.createElement('div');
    mainContentEl.classList.add('main-content', 'grid-item');
    containerEl.appendChild(mainContentEl);
  }

  addTodo(data) {}
  todoItems(array) {}
  deleteTodo(data) {}
  showForm() {}
  hideForm() {}
  todoMarker(color) {}
}
