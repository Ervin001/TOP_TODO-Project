import './styles.css';
import TodoLogic from './logic.js';
import Display from './displayUI.js';

import { format } from 'date-fns';

const todoLogic = new TodoLogic();
const display = new Display();
const dateFormat = format(new Date(), 'MMMM dd, yyyy');

display.loadHome();
window.onload = function () {
  todoLogic.passArr();
};

const buttonEl = document.querySelector('.add-btn');
const submitEl = document.getElementById('submit-id');
const submitReplacedEl = document.getElementById('submit-replaced-id');
const taskEl = document.querySelectorAll('.single-todo-item-container');
const todoCont = document.querySelector('.todo-container');
const deleteBtnEl = document.querySelector('.delete-btn');
const formEl = document.querySelector('.form-container');
const replaceFormEl = document.querySelector('.replacement-form-container');
const checkValueEl = document.getElementById('checkbox');

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', event => {
    const newColorScheme = event.matches ? 'dark' : 'light';
    const dark_light_mode = document.querySelector('.light-dark-text');
    dark_light_mode.textContent = newColorScheme;
  });

// EventListener for Tasks
todoCont.addEventListener('click', function (e) {
  if (e.target.name === 'checkbox') {
    // pass that into display and set the value
    // display.updateChecked(e.target.checked);
  }
  // check grandchildEl
  const grandKidsEl =
    e.target.className === 'todo-Title' || e.target.className === 'todo-Body';
  // check childEl
  const childEl =
    e.target.className === 'checkBox-container td-item' ||
    e.target.className === 'description-container td-item' ||
    e.target.className === 'date td-item';
  // parentEl
  const parentEl = e.target.className === 'single-todo-item-container';

  // Returns the TODO DIV chosen
  if (grandKidsEl) {
    display.toggleReplaceTaskForm();

    return todoLogic.taskDiv(
      e.target.parentElement.parentElement,
      e.target.parentElement.parentElement.children[0].children[0].checked
    );
  } else if (childEl) {
    display.toggleReplaceTaskForm();
    return todoLogic.taskDiv(
      e.target.parentElement,
      e.target.parentElement.children[0].children[0].checked
    );
  } else if (parentEl) {
    display.toggleReplaceTaskForm();
    return todoLogic.taskDiv(
      e.target,
      e.target.children[0].children[0].checked
    );
  }
});

buttonEl.addEventListener('click', display.toggleForm);

// for edited task
submitReplacedEl.addEventListener('click', replacedValues);

submitEl.addEventListener('click', inputValues);

deleteBtnEl.addEventListener('click', deletedTask);

// deleteTask
function deletedTask(e) {
  e.preventDefault();
  todoLogic.deleteTask();
}

// for edited task
function replacedValues(e) {
  e.preventDefault();

  const checkBoxValue = document.getElementById('checkbox');
  // Values from the form
  const titleInputValue = document.getElementById('title-rp');
  const dateInputValue = document.getElementById('date-rp');
  const bodyInputValue = document.getElementById('description-rp');
  let date = Date.now();
  date += '';
  date.slice(4);

  if (
    titleInputValue.value !== '' ||
    dateInputValue.value !== '' ||
    bodyInputValue.value !== ''
  ) {
    // Form values are sent to logic.js
    let tIV = titleInputValue.value;
    let dIV = dateInputValue.value;
    let bIV = bodyInputValue.value;
    let chDiv = checkBoxValue.checked;

    todoLogic.editTask({ tIV, dIV, bIV, date, chDiv });

    // Form values are cleared
    titleInputValue.value = '';
    dateInputValue.value = '';
    bodyInputValue.value = '';

    display.toggleReplaceTaskForm();
  }
}

// for new tasks
function inputValues(e) {
  e.preventDefault();

  // Values from the form
  const titleInputValue = document.getElementById('title');
  const dateInputValue = document.getElementById('date');
  const bodyInputValue = document.getElementById('description');
  let date = Date.now();
  date += '';

  if (
    titleInputValue.value !== '' ||
    dateInputValue.value !== '' ||
    bodyInputValue.value !== ''
  ) {
    // Form values are sent to logic.js
    todoLogic.createTodoObj(
      titleInputValue.value,
      dateInputValue.value,
      bodyInputValue.value,
      date.slice(4)
    );

    // Form values are cleared
    titleInputValue.value = '';
    dateInputValue.value = '';
    bodyInputValue.value = '';
    display.toggleForm();
  }
}

document.addEventListener('mouseup', function (e) {
  if (!formEl.classList.contains('hidden')) {
    if (!formEl.contains(e.target)) {
      formEl.classList.toggle('hidden');
    }
  }
});

document.addEventListener('mouseup', function (e) {
  if (!replaceFormEl.classList.contains('hidden')) {
    if (!replaceFormEl.contains(e.target)) {
      replaceFormEl.classList.toggle('hidden');
    }
  }
});
