export class DisplayUI {
  showWinner(data) {
    console.log(data);
  }

  containerAdd() {
    const containerEl = document.createElement('div');
    containerEl.classList.add('container');

    document.body.appendChild(containerEl);
  }
}
