"use strict";
//function to display the message (array item) in html
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
//dollars number button
document.querySelector(".dollars").addEventListener("click", function () {
  let val = document.getElementById("val").value;
  let rate = document.getElementById("rate").value;
  if (val === "") {return;}  // No input: do nothing
  function convert(val,rate) {
    return val*rate;
  }
  displayMessage(`$${val} = ${convert(val,rate)} ကျပ်`);
});
//kyats number button
document.querySelector(".kyats").addEventListener("click", function () {
  let val = document.getElementById("val").value;
  let rate = document.getElementById("rate").value;
  if (val === "") {return;}  // No input: do nothing
  function convert(val,rate) {
    return val/rate;
  }
  displayMessage(`${val} ကျပ် = $${convert(val,rate)}`);
});
//lakh number button
document.querySelector(".lakh").addEventListener("click", function () {
  let val = document.getElementById("val").value;
  let rate = document.getElementById("rate").value;
  if (val === "") {return;}  // No input: do nothing
  function convert(val,rate) {
    return (val * 100000) / rate;
  }
  displayMessage(`${val} သိန်း = $${convert(val,rate)}`);
});