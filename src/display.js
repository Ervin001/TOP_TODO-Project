import moon from './assets/icons/moon-sharp.svg';
import './assets/style.css';

class DisplayUI {
  homePage() {
    let html = `
      <div class="container">
        <div class="cntr sidebar">
        <h1 class="page-info"></h1>
        <svg class="image" width="500" height="600" data="./assets/icons/moon-sharp.svg"/>
        </div>
        <div class="cntr header">header</div>
        <div class="cntr main-content">Content</div>
      </div>
      <form action="" method="get" class="todo-form hide">
        <div class="todo-body">
          <label for="todo-info">Enter Todo</label>
          <input type="text" name="todo-info" id="todo-info" required" >
        </div>
        <input type="button" value="Add Todo" />
      </form>
    `;

    document.body.insertAdjacentHTML('afterbegin', html);
  }
}

export default DisplayUI;
