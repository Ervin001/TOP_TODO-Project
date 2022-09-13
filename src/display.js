export class DisplayUI {
  addHome() {
    // main Container El
    const containerEl = document.createElement('div');
    containerEl.classList.add('container');
    document.body.appendChild(containerEl);

    // First child
    const headerEl = document.createElement('header');
    headerEl.classList.add('main', 'header');
    containerEl.appendChild(headerEl);

    // ^logo
    const logoEl = document.createElement('div');
    logoEl.textContent = 'TODO';
    logoEl.classList.add('logo', 'top');
    headerEl.appendChild(logoEl);

    // ^options

    // Second Child
    const mainContentEl = document.createElement('div');
    mainContentEl.classList.add('main', 'main-content');
    containerEl.appendChild(mainContentEl);
  }
}
