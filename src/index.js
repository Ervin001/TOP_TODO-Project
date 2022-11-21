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
const taskEl = document.querySelectorAll('.single-todo-item-container');

console.log(taskEl);

buttonEl.addEventListener('click', display.toggleForm);
// const todoExampleArray = [
//   {
//     title: 'Go to Store',
//     content: 'Get different things in the store',
//     date: 'Today',
//     id: '000000',
//   },
// ];

submitEl.addEventListener('click', inputValues);

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
