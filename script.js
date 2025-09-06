"use strict";
//function to display the output in html
const displayMessage = function (output) {
  document.querySelector(".output").textContent = output;
};
//dollars number button
document.querySelector(".dollars").addEventListener("click", function () {
  let amount = document.getElementById("amount").value;
  let rate = document.getElementById("rate").value;
  if (amount === "") {return;}  // No input: do nothing
  //convert function and math
  function convert(amount,rate) {
    return amount*rate;
  }
  let result = convert(amount, rate);
  // Format with commas
  let formattedResult = result.toLocaleString();
  let formattedAmount = Number(amount).toLocaleString();

  let message = `$${formattedAmount} = ${formattedResult} ကျပ်`;

  if (result >= 100000) {
    let lakh = (result / 100000).toFixed(2); // 2 decimals for clarity
    message += ` (${lakh} သိန်း)`;
  }

  displayMessage(`${message}`);
});
//kyats number button
document.querySelector(".kyats").addEventListener("click", function () {
  let amount = document.getElementById("amount").value;
  let rate = document.getElementById("rate").value;
  if (amount === "") {return;}  // No input: do nothing
  function convert(amount,rate) {
    return amount/rate;
  }
    // Format the kyat amount with commas
  let formattedAmount = Number(amount).toLocaleString();

  displayMessage(`${formattedAmount} ကျပ် = $${convert(amount, rate).toFixed(4)}`);
});
//lakh number button
document.querySelector(".lakh").addEventListener("click", function () {
  let amount = document.getElementById("amount").value;
  let rate = document.getElementById("rate").value;
  if (amount === "") {return;}  // No input: do nothing
  function convert(amount,rate) {
    return (amount * 100000) / rate;
  }
  // Format both amount and result with commas
  let formattedAmount = Number(amount).toLocaleString();
  let formattedResult = convert(amount, rate).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  displayMessage(`${formattedAmount} သိန်း = $${formattedResult}`);
});
