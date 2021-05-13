let currentTarget = "";
let currentPos = 0;
let triggerNode = [];
let clearNode = [];
const body = document.querySelector("body");

const backScrollCtrl = {
  disableScroll: function () {
    currentPos = document.documentElement.scrollTop || document.body.scrollTop;
    body.classList.add("is-scroll-enable");
    body.style.top = "-" + currentPos + "px";
  },
  enableScroll: function () {
    body.classList.remove("is-scroll-enable");
    window.scrollTo(0, currentPos);
    body.style.top = "";
  },
};

const modalCtrl = {
  clearModal: function () {
    if (currentTarget) {
      currentTarget.style.animation = "fade-out forwards 0.2s";
      setTimeout(function () {
        currentTarget.style.display = "none";
        currentTarget.style.animation = "";
      }, 200);
      backScrollCtrl.enableScroll();
    }
  },
  openModal: function (trigger) {
    currentTarget = document.querySelector(trigger.getAttribute("href"));
    currentTarget.style.display = "block";
    backScrollCtrl.disableScroll();
  },
};

export default {
  init: function (triggerSelector, clearSelector) {
    triggerNode = document.querySelectorAll(triggerSelector);
    clearNode = document.querySelectorAll(clearSelector);
    for (let trigger of triggerNode) {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        modalCtrl.openModal(trigger);
      });
    }
    for (let clear of clearNode) {
      clear.addEventListener("click", (e) => {
        e.preventDefault();
        modalCtrl.clearModal();
      });
    }
  },
};
