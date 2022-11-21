import Display from './displayUI';

const display = new Display();
export default class TodoLogic {
  #todoObjectsArray = [];

  constructor() {
    this.#getLocalStorage();
  }

  createTodoObj(title, date, content, id) {
    this.#addItemToArray({
      title: title,
      date: date,
      content: content,
      id: id,
    });
  }

  logTodos() {
    return console.log(this.#todoObjectsArray);
  }
  // main func doing the work
  #addItemToArray(item) {
    // item = obj
    this.#todoObjectsArray.push(item);
    this.#setLocalStorage(item);

    // code works
    this.#passObjectToDisplay(item);
  }

  #passObjectToDisplay(obj) {
    display.addTodoItem(display.createTodoItem(obj));
  }

  #setLocalStorage(item) {
    localStorage.setItem('task', JSON.stringify(this.#todoObjectsArray));
  }

  #getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('task'));

    if (!data) return;

    this.#todoObjectsArray = data;

    this.#todoObjectsArray.forEach(task => {
      // code does not work
      this.#passObjectToDisplay(task);
    });
  }

  formInputs() {}
}
