import './styles.css';
import Display from './displayUI.js';

import { format } from 'date-fns';

const display = new Display();

display.loadHome();

const todoExampleArray = [
  {
    Title: 'Go to Store',
    Content: 'Get different things in the store',
    TimeCreated: 'Today',
  },
  {
    Title: 'Go to Store',
    Content: 'Get different things in the store',
    TimeCreated: 'Today',
  },
  {
    Title: 'Go to Store',
    Content: 'Get different things in the store',
    TimeCreated: 'Today',
  },
  {
    Title: 'Go to Store',
    Content: 'Get different things in the store',
    TimeCreated: 'Today',
  },
];

display.todoItems(todoExampleArray);

const dateFormat = format(new Date(), 'MMMM dd, yyyy');
console.log(dateFormat);
