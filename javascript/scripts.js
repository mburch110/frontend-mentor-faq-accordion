const questionHeads = document.querySelectorAll(".l-question-answer-head");
const questionHeadlines = document.querySelectorAll(".c-question-answer__head");
const questionTexts = document.querySelectorAll(".c-question-answer__text");
const questionArrows = document.querySelectorAll(".c-question-answer__arrow");

questionHeads.forEach((head, index) => {
  head.addEventListener("click", () => {
    questionHeadlines[index].classList.toggle("c-question-answer__head--focus");
    questionTexts[index].classList.toggle("is-hidden");
    questionArrows[index].classList.toggle("c-question-answer__arrow--rotated");

    for (let i = 0; i < questionTexts.length; i++) {
      if (index != i) {
        questionHeadlines[i].classList.remove("c-question-answer__head--focus");
        questionTexts[i].classList.add("is-hidden");
        questionArrows[i].classList.remove("c-question-answer__arrow--rotated");
      }
    }
  });
});
