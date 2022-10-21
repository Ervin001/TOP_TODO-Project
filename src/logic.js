export default class TodoLogic {
  #todoObjectsArray = [];

  displayObject(data) {
    return console.log(this.#todoObjectsArray);
  }

  addItemToArray(item) {
    this.#todoObjectsArray.push(item);
  }
}
