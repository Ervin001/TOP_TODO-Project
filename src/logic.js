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

  //This function will replace the task in the array holding all the task
  editTask({ info }, index) {
    console.log(info);
  }

  // This function will fill inputs with selected div
  taskDiv(div) {
    const replaceFormEl = document.querySelector('.replacement-form-container');
    const allTaskEl = document.querySelectorAll('.single-todo-item-container');

    // div details
    const divObj = {
      // title
      divT: div.children[1].children[0].textContent,
      // body
      divC: div.children[1].children[1].textContent,
      // date
      divD: div.children[2].textContent,
      divDataset: div.dataset.id,
    };

    const { divT, divC, divD, divDataset } = divObj;

    // title
    replaceFormEl.children[1][0].textContent = divT;
    replaceFormEl.children[1][0].value = divT;
    // date
    replaceFormEl.children[1][1].textContent = divD;
    replaceFormEl.children[1][1].value = divD;
    // body
    replaceFormEl.children[1][2].value = divC;
    replaceFormEl.children[1][2].value = divC;
    // form ID
  }

  getDivIndex(divEl) {
    let element;
    const allTaskEl = document.querySelectorAll('.single-todo-item-container');
    allTaskEl.forEach((task, i) => {
      if (task.dataset.id === divEl.dataset.id) {
        return (element = i);
      }
    });
    return element;
  }

  /**
   * @param {object} task Todo item Div
   * @param {object} param This object will have the updated values fo the updated todo item
   * param will set new values in todoItem inside #todoObjectsArray and update the values in the @task then pass info to DOM for update
   */
  editTask(task, param) {}

  formInputs() {}
}
