import Display from './displayUI';

const display = new Display();
export default class TodoLogic {
  #todoObjectsArray = [];

  logTodos() {
    return console.log(this.#todoObjectsArray);
  }

  addItemToArray(item) {
    this.#todoObjectsArray.push(item);
  }

  passObjectToDisplay(obj) {
    display.createTodoItem(obj);
  }
}
