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
    return this.#todoObjectsArray;
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

  taskDiv(div) {
    const formEl = document.querySelector('.form-container');

    console.log(div);
    const divObj = {
      divT: div.children[1].children[0].textContent,
      divC: div.children[1].children[1].textContent,
      divD: div.children[2].textContent,
      divDataset: div.dataset.id,
    };

    console.log(divObj);
  }

  /**
   * @param {object} task Todo item Div
   * @param {object} param This object will have the updated values fo the updated todo item
   * param will set new values in todoItem inside #todoObjectsArray and update the values in the @task then pass info to DOM for update
   */
  editTask(task, param) {}

  formInputs() {}
}
