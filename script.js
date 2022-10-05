"use strict";

const labelContainer = document.querySelector(".container");
const labelDate = document.querySelector(".date");
const labelTime = document.querySelector(".time");
const dateAndTime = function () {
  const locale = navigator.language;
  const now = new Date();

  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  const dateIntl = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    year: "numeric",
    day: "2-digit",
    month: "long",
  }).format(now);

  labelDate.textContent = dateIntl;

  const timeIntl = new Intl.DateTimeFormat(locale, options).format(now);
  labelTime.textContent = timeIntl;
};

const time = setInterval(function () {
  dateAndTime();
}, 500);
dateAndTime();
console.log(new Date());
