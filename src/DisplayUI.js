export default class Display {
  loadHome() {
    // main container
    const containerEl = document.createElement('div');
    containerEl.textContent = 'Hello World';
    containerEl.classList.add('container', 'grid', 'grid--3');
    document.body.appendChild(containerEl);

    // sidebar container

    // header view
    // todo item
  }

  addTodo(data) {}
  deleteTodo(data) {}
  showForm() {}
  hideForm() {}
  todoMarker(color) {}
}
