export default class Display {
  loadHome() {
    // main container
    const containerEl = document.createElement('div');
    containerEl.classList.add('container');
    document.body.appendChild(containerEl);

    // logo container
    const logoContainerEl = document.createElement('div');
    logoContainerEl.classList.add('logo', 'grid-item');
    logoContainerEl.textContent = 'Logo';
    containerEl.appendChild(logoContainerEl);

    // header container
    const headerEl = document.createElement('div');
    headerEl.classList.add('header', 'grid-item');
    containerEl.appendChild(headerEl);
    // prettier-ignore
    // Header first child
    const firstHeaderChild = document.createElement('div');
    firstHeaderChild.classList.add('header-child', 'first-child');
    firstHeaderChild.textContent = 'First Child';
    headerEl.appendChild(firstHeaderChild);
    // sidebar container
    const sidebarContainerEl = document.createElement('aside');
    sidebarContainerEl.classList.add('sidebar', 'grid-item');
    sidebarContainerEl.textContent = 'Side Bar';
    containerEl.appendChild(sidebarContainerEl);

    // main content
    const mainContentEl = document.createElement('div');
    mainContentEl.classList.add('main-content', 'grid-item');
    mainContentEl.textContent = 'Main Content';
    containerEl.appendChild(mainContentEl);
  }

  addTodo(data) {}
  todoItems(array) {}
  deleteTodo(data) {}
  showForm() {}
  hideForm() {}
  todoMarker(color) {}
}
