import Display from './displayUI';

const display = new Display();
export default class TodoLogic {
  #todoObjectsArray = [];

  createTodoObj(title, date, content, id) {
    this.#addItemToArray({
      title: title,
      date: date,
      content: content,
      id: id,
    });
    console.log(id);
  }

  logTodos() {
    return console.log(this.#todoObjectsArray);
  }

  #addItemToArray(item) {
    this.#todoObjectsArray.push(item);
    this.#passObjectToDisplay(item);
  }

  #passObjectToDisplay(obj) {
    display.addTodoItem(display.createTodoItem(obj));
  }

  formInputs() {}
}
