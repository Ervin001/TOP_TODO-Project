import './styles.css';
import Display from './displayUI.js';
import TodoLogic from './logic.js';
import { format } from 'date-fns';

const display = new Display();
const todoLogic = new TodoLogic();
const dateFormat = format(new Date(), 'MMMM dd, yyyy');

display.loadHome();

// const todoExampleArray = [
//   {
//     title: 'Go to Store',
//     content: 'Get different things in the store',
//     date: 'Today',
//     id: '000000',
//   },
// ];

todoLogic.addItemToArray({
  title: 'First Todo',
  content: 'This is where the body of the information will go',
  date: `${dateFormat}`,
  id: '00000001',
});

// Adds todo item to array in the logic class
todoLogic.addItemToArray({
  title: 'second Todo',
  content: 'This is where the body of the information will go',
  date: `${dateFormat}`,
  id: '00000002',
});
