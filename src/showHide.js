// import { dateCalcForm } from "./datecalc.js";

const timerHide = document.getElementById("timer_hide");
const dateCalcHide = document.getElementById("datecalc_hide");

dateCalcHide.addEventListener("click", showHide);
timerHide.addEventListener("click", showHide);

dateCalcHide.nextElementSibling.style.display = "block";
function showHide() {
    if (dateCalcHide.nextElementSibling.style.display == "block") {
        dateCalcHide.nextElementSibling.style.display = "none";
        timerHide.nextElementSibling.style.display = "block";
    } else {
        dateCalcHide.nextElementSibling.style.display = "block";
        timerHide.nextElementSibling.style.display = "none";
    }

}