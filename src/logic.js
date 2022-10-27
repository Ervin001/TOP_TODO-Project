import Display from './displayUI';

const display = new Display();
export default class TodoLogic {
  #todoObjectsArray = [];

  logTodos() {
    return console.log(this.#todoObjectsArray);
  }

  addItemToArray(item) {
    this.#todoObjectsArray.push(item);
    this.#passObjectToDisplay(item);
  }

  #passObjectToDisplay(obj) {
    display.addTodoItem(display.createTodoItem(obj));
  }
}
