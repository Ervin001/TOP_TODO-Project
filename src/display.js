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
    const openTabTitle = document.createElement('h1');
    openTabTitle.classList.add('title-tab');
    openTabTitle.textContent = 'My Task';
    topLeftContainerEl.appendChild(openTabTitle);

    // Right Top-Container
    const topRightContainerEl = document.createElement('div');
    topRightContainerEl.classList.add('top-right-C');
    topContainerEl.appendChild(topRightContainerEl);
  }
}
