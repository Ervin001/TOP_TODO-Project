import './assets/style.css';
import DisplayUI from './display.js';
import { compareAsc, format, addDays, startOfDay, getDate } from 'date-fns';

// This is for toggling dark and light mode
// const root = document.documentElement;
const date = new Date();
const formattedDate = format(date, 'MM/dd/yyyy');
const today = getDate(date);

const displayUI = new DisplayUI();
displayUI.homePage();
