"use strict";

const adviceText = document.querySelector(".advice-text");
const buttonDice = document.querySelector(".randomize");
const adviceNumber = document.querySelector(".advice-id");

const getAdvice = async () => {
  axios
    .get("https://api.adviceslip.com/advice")
    .then((response) => {
      const advice = response.data.slip.advice;
      const adviceId = response.data.slip.id;

      adviceText.innerHTML = advice;
      adviceNumber.innerHTML = adviceId;
    })
    .catch((error) => console.error(error));
};

buttonDice.addEventListener("click", function () {
  getAdvice();
});
