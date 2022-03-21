export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._Items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderer() {
    this._Items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
