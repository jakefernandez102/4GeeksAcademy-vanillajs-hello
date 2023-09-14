/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
window.addEventListener("load", e => {
  e.preventDefault();
  generateExcuse();
});

const generateExcuse = () => {
  let excuse = "";
  const excuseP = document.querySelector("#excuse");
  let whoExcuse = Math.floor(Math.random() * who.length);
  let actionExcuse = Math.floor(Math.random() * action.length);
  let whatExcuse = Math.floor(Math.random() * what.length);
  let whenExcuse = Math.floor(Math.random() * when.length);
  console.log({ whoExcuse });
  console.log({ actionExcuse });
  console.log({ whatExcuse });
  console.log({ whenExcuse });
  excuse = `${who[whoExcuse]}  ${action[actionExcuse]}  ${what[whatExcuse]}  ${when[whenExcuse]}`;
  excuseP.textContent = excuse;
};
