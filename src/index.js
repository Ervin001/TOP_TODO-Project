import './styles.css';
import MyImage from './myImage.png';
import chalk from 'chalk';

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(
  chalk.green(
    'I am a green line ' +
      chalk.yellow.underline.bold('with a blue substring') +
      ' that becomes green again!'
  )
);

// const containerEl = document.createElement('div');

// containerEl.textContent = 'Hello World';
// containerEl.classList.add('hello');

// const imageEl = new Image();
// imageEl.src = MyImage;
// imageEl.classList.add('img');

// document.body.appendChild(containerEl);
// containerEl.appendChild(imageEl);
