import Display from './displayUI';

const display = new Display();
export default class TodoLogic {
  #todoObjectsArray = [];
  #taskIndex;
  #checked;

  constructor() {
    this.#getLocalStorage();
  }

  createTodoObj(title, date, content, id, checked = false) {
    this.#addItemToArray({
      title: title,
      date: date,
      content: content,
      id: id,
      checked: checked,
    });
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

  // This function will fill inputs with selected div
  taskDiv(div, checked) {
    const replaceFormEl = document.querySelector('.replacement-form-container');
    const allTaskEl = [
      ...document.querySelectorAll('.single-todo-item-container'),
    ].reverse();

    this.#checked = checked;
    // div details
    const divObj = {
      // checkbox
      divCheck: div.dataset.checked,
      // title
      divT: div.children[1].children[0].textContent,
      // body
      divC: div.children[1].children[1].textContent,
      // date
      divD: div.children[2].textContent,
      divDataset: div.dataset.id,
    };

    display.showChecked(this.#todoObjectsArray);

    const { divCheck, divT, divC, divD, divDataset } = divObj;

    // checked
    div.children[0].children[0].checked = checked;

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

    // getting the index
    this.#taskIndex = this.#getDivIndex(div);

    // changes value of checked in objects array
    this.#todoObjectsArray[this.#taskIndex].checked = checked;
    // This line is for the variable in the logic class
    this.#todoObjectsArray[this.#taskIndex].checked = this.#checked;
  }

  #getDivIndex(divEl) {
    let element;
    const allTaskEl = document.querySelectorAll('.single-todo-item-container');

    const reversedTasks = [...allTaskEl].reverse();
    reversedTasks.forEach((task, i) => {
      if (task.dataset.id === divEl.dataset.id) {
        return (element = i);
      }
    });
    return element;
  }

  /**
   * @param {object} task Info from
   */
  editTask(options) {
    const newNum = this.#taskIndex;

    // Will change the old info with the new info
    this.#todoObjectsArray[this.#taskIndex].title = options.tIV;
    this.#todoObjectsArray[this.#taskIndex].date = options.dIV;
    this.#todoObjectsArray[this.#taskIndex].content = options.bIV;
    this.#todoObjectsArray[this.#taskIndex].checked = this.#checked;

    display.showChecked(this.#todoObjectsArray);
    // new Object and index will be passed to displayUI
    display.updateNewTaskInfo(this.#todoObjectsArray[this.#taskIndex], newNum);

    // update local storage
    this.#setLocalStorage();
  }

  deleteTask(e) {
    const index = this.#taskIndex;
    display.deleteDOMTask(index);
    this.#todoObjectsArray.splice(index, 1);
    this.#setLocalStorage();
    display.toggleReplaceTaskForm();
  }

  passArr() {
    display.showChecked(this.#todoObjectsArray);
  }
}
