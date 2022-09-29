import './assets/style.css';
import { DisplayUI } from './display.js';
import { compareAsc, format, addDays, startOfDay, getDate } from 'date-fns';

// This is for toggling dark and light mode
// const root = document.documentElement;
const date = new Date();
const formattedDate = format(date, 'MM/dd/yyyy');
const today = getDate(date);

const displayUI = new DisplayUI();
displayUI.addHome();

// Object created by user in[ut will go here to add to DOM]
displayUI.addTodoItem('Get Milk', formattedDate);
displayUI.addTodoItem('Get Milk', formattedDate);
displayUI.addTodoItem('Get Milk', formattedDate);
const newTaskBtn = document.querySelector('.todo-button');

newTaskBtn.addEventListener('click', (e) => {
  displayUI.addTodoItem('Todo', formattedDate);
});
