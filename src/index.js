import './styles.css';
import Display from './displayUI.js';
import TodoLogic from './logic.js';
import { format } from 'date-fns';

const display = new Display();
const todoLogic = new TodoLogic();
const dateFormat = format(new Date(), 'MMMM dd, yyyy');

display.loadHome();

const todoExampleArray = [
  {
    Title: 'Go to Store',
    Content: 'Get different things in the store',
    TimeCreated: 'Today',
    Id: '000000',
  },
  {
    Title: 'Go to Store',
    Content: 'Get different things in the store',
    TimeCreated: 'Today',
    Id: '000000',
  },
  {
    Title: 'Go to Store',
    Content: 'Get different things in the store',
    TimeCreated: 'Today',
    Id: '000000',
  },
  {
    Title: 'Go to Store',
    Content: 'Get different things in the store',
    TimeCreated: 'Today',
    Id: '000000',
  },
];

display.todoItems(todoExampleArray);

todoLogic.addItemToArray({
  Title: 'First Todo',
  Content: 'This is where the body of the information will go',
  TimeCreated: `${dateFormat}`,
  Id: '00000001',
});

todoLogic.addItemToArray({
  Title: 'First Todo',
  Content: 'This is where the body of the information will go',
  TimeCreated: `${dateFormat}`,
  Id: '00000002',
});
todoLogic.displayObject('ss');
