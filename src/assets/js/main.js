import "../sass/style.scss";
import "regenerator-runtime/runtime";
import modal from "./module/modal.js";
import Tab from "./module/tab.js";

const main = {
  init: function () {
    this.setupEventListeners();
  },
  setupEventListeners: function () {
    // Modal
    modal.init(".js-modal-trigger", ".js-modal-close");
    // Tab
    const tab1 = new Tab(1);
    const tab2 = new Tab(2);
  },
};
main.init();
// const init = (settings) => {

//   console.log("test");

//   const defaultOptions = {
//     option1: false,
//     option2: false,
//     option3: false,
//   };

//   const options = Object.assign(defaultOptions, settings);

//   console.log(options);
// };

// init({ option2: true });

const task1 = () => {
  return new Promise((resolve, reject) => {
    console.log("task1スタート");
    setTimeout(() => {
      console.log("setTimeout");
      resolve();
    });
  });
};
const task2 = () => {
  console.log("task2");
};

const initTest = async () => {
  await task1();
  task2();
};

initTest();
