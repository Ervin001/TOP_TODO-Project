import './styles.css';
import MyImage from './myImage.png';
import Display from './DisplayUI.js';

const display = new Display();

display.loadHome();

const containerEl = document.createElement('div');

containerEl.textContent = 'Hello World';
containerEl.classList.add('hello');

const imageEl = new Image();
imageEl.src = MyImage;
imageEl.classList.add('img');

document.body.appendChild(containerEl);
containerEl.appendChild(imageEl);
