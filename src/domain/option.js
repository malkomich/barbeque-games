export default class Option {

  constructor(text, right, checked) {
    this.text = text;
    this.right = right || false;
    this.checked = checked || false;
  }

  check(checked) {
    this.checked = checked;
  }

  toggle() {
    this.checked = !this.checked;
  }

}
