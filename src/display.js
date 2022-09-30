import HomeSvg from './assets/icons/home-sharp.svg';
export class DisplayUI {
  addHome() {
    // main Container El
    const containerEl = document.createElement('div');
    containerEl.classList.add('container');
    document.body.appendChild(containerEl);

    // Sidebar
    const sidebarContainerEl = document.createElement('div');
    sidebarContainerEl.classList.add('sidebar');
    containerEl.appendChild(sidebarContainerEl);

    // Icons
    // home
    const homeIcon = document.createElement('div');
    homeIcon.classList.add('home-icon', 'icon');
    sidebarContainerEl.appendChild(homeIcon);
    // checkMark
    const checkmarkIcon = document.createElement('div');
    checkmarkIcon.classList.add('checkmark-icon', 'icon');
    sidebarContainerEl.appendChild(checkmarkIcon);
    // favorites
    const favoritesIcon = document.createElement('div');
    favoritesIcon.classList.add('favorites-icon', 'icon');
    sidebarContainerEl.appendChild(favoritesIcon);
    // personProfile
    const profileIcon = document.createElement('div');
    profileIcon.classList.add('profile-icon', 'icon');
    sidebarContainerEl.appendChild(profileIcon);
    // support
    const supportIcon = document.createElement('div');
    supportIcon.classList.add('support-icon', 'icon');
    sidebarContainerEl.appendChild(supportIcon);
    // Settings
    const settingsIcon = document.createElement('div');
    settingsIcon.classList.add('settings-icon', 'icon');
    sidebarContainerEl.appendChild(settingsIcon);
    // day/night mode
    const dayNightIcon = document.createElement('div');
    dayNightIcon.classList.add('day-night-icon', 'icon');
    sidebarContainerEl.appendChild(dayNightIcon);

    // top-container
    const topContainerEl = document.createElement('div');
    topContainerEl.classList.add('profile-search');
    containerEl.appendChild(topContainerEl);

    // infoTodo container
    const todoInfoContainerEl = document.createElement('div');
    todoInfoContainerEl.classList.add('todo-info');
    containerEl.appendChild(todoInfoContainerEl);

    //Extra info container
    const extraInfoContainerEl = document.createElement('div');
    extraInfoContainerEl.classList.add('extra-info');
    containerEl.appendChild(extraInfoContainerEl);

    // Left Top-Container
    const topLeftContainerEl = document.createElement('div');
    topLeftContainerEl.classList.add('top-left-C');
    topContainerEl.appendChild(topLeftContainerEl);

    // Open tab title
    const openTabTitleEl = document.createElement('h1');
    openTabTitleEl.classList.add('title-tab');
    openTabTitleEl.textContent = 'My Task';
    topLeftContainerEl.appendChild(openTabTitleEl);

    // Right Top-Container
    const topRightContainerEl = document.createElement('div');
    topRightContainerEl.classList.add('top-right-C');
    topContainerEl.appendChild(topRightContainerEl);

    // Search Svg
    const searchIcon = document.createElement('div');
    searchIcon.classList.add('search-icon', 'icon');
    topRightContainerEl.appendChild(searchIcon);

    // User profile
    const userProfileIcon = document.createElement('div');
    userProfileIcon.classList.add('user-profile', 'icon');
    topRightContainerEl.appendChild(userProfileIcon);

    // _Todo button
    const todoButtonEl = document.createElement('button');
    todoButtonEl.classList.add('todo-button');
    todoButtonEl.textContent = 'New Task';
    topRightContainerEl.appendChild(todoButtonEl);
  }

  /**
   * @param {String} data Info for TODO item
   * @param {String} date String coming from date-fns
   */

  addTodoItem(data, date) {
    const todoContainerEl = document.querySelector('.todo-info');
    const todoItemCntnrEl = document.createElement('div');
    todoItemCntnrEl.classList.add('todo-item');
    todoItemCntnrEl.innerHTML = `
    <div class="radio-btn">
      <input type="checkbox" id="radio-btn" name="checked-todo" value="checked" "radio-btn item-todo"</input>
      <label for="radio-btn"></label>
    </div>
      <div class="todo-item-title item-todo">${data}</div>
      <div class="date item-todo">${date}</div>`;
    todoContainerEl.prepend(todoItemCntnrEl);
  }

  templateItem() {
    // const todoContainerEl = document.querySelector('.container');
    const tofoinfoContainerEl = document.querySelector('.todo-info');
    const todoFormContainerEl = document.createElement('div');
    todoFormContainerEl.classList.add('todo-form');
    // document.body.appendChild(todoFormContainerEl);
    tofoinfoContainerEl.appendChild(todoFormContainerEl);
  }
}
