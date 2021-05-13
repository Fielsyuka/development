export default class Tab {
  constructor(id) {
    this.id = id;
    this.tab = document.getElementById(`tab-${this.id}`);
    this.active = 0;
    this.triggers = this.tab.querySelectorAll(".js-tab-trigger");
    this.contents = this.tab.querySelectorAll(".js-tab-content");
    this.handleActive(0);
    this.handleClick();
  }
  handleClick() {
    for (let i = 0; i < this.triggers.length; i++) {
      this.triggers[i].addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          this.handleActive(i);
        }.bind(this)
      );
    }
  }
  handleActive(index) {
    this.active = index;
    for (let i = 0; i < this.triggers.length; i++) {
      this.triggers[i].classList.remove("is-active");
      this.contents[i].classList.remove("is-active");
    }
    this.triggers[this.active].classList.add("is-active");
    this.contents[this.active].classList.add("is-active");
  }
}
