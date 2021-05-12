import "../sass/style.scss";
import "regenerator-runtime/runtime";

const init = (settings) => {
  console.log("test");

  const defaultOptions = {
    option1: false,
    option2: false,
    option3: false,
  };

  const options = Object.assign(defaultOptions, settings);

  console.log(options);
};

init({ option2: true });

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
