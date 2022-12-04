import './styles.css';
import Display from './displayUI.js';
import TodoLogic from './logic.js';

import { format } from 'date-fns';

const display = new Display();
const todoLogic = new TodoLogic();
const dateFormat = format(new Date(), 'MMMM dd, yyyy');

display.loadHome();
const buttonEl = document.querySelector('.add-btn');
const submitEl = document.getElementById('submit-id');
const submitReplacedEl = document.getElementById('submit-replaced-id');
const taskEl = document.querySelectorAll('.single-todo-item-container');
const todoCont = document.querySelector('.todo-container');
const deleteBtnEl = document.querySelector('.delete-btn');

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', event => {
    const newColorScheme = event.matches ? 'dark' : 'light';
    const dark_light_mode = document.querySelector('.light-dark-text');
    dark_light_mode.textContent = newColorScheme;
  });

// EventListener for Tasks
todoCont.addEventListener('click', function (e) {
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
    return todoLogic.taskDiv(e.target.parentElement.parentElement);
  } else if (childEl) {
    display.toggleReplaceTaskForm();
    return todoLogic.taskDiv(e.target.parentElement);
  } else if (parentEl) {
    display.toggleReplaceTaskForm();
    return todoLogic.taskDiv(e.target);
  }
});

buttonEl.addEventListener('click', display.toggleForm);
// const todoExampleArray = [
//   {
//     title: 'Go to Store',
//     content: 'Get different things in the store',
//     date: 'Today',
//     id: '000000',
//   },
// ];

submitReplacedEl.addEventListener('click', replacedValues);

submitEl.addEventListener('click', inputValues);

deleteBtnEl.addEventListener('click', deleteTodo);

// for deleting the selected task

function deleteTodo(e) {
  e.preventDefault();
  display.deleteTask();
}

// for edited task
function replacedValues(e) {
  e.preventDefault();

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
    // This code needs to be replaced with a method that will replace the selected task with the new information
    let tIV = titleInputValue.value;
    let dIV = dateInputValue.value;
    let bIV = bodyInputValue.value;

    todoLogic.editTask({ tIV, dIV, bIV, date });

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
    const formEl = document.querySelector('.todo-form');
    display.toggleForm();
  }
}
